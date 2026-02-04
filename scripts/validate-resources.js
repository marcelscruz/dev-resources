const fs = require('fs')
const path = require('path')

// Valid categories from types/category.ts
const VALID_CATEGORIES = [
    'Accessibility',
    'AI',
    'Analytics',
    'Animation',
    'API Building',
    'Audio',
    'Authentication',
    'Blockchain',
    'Blog',
    'Book',
    'Browser',
    'CDN',
    'CMS',
    'Cheatsheet',
    'Cloud Computing',
    'Code Challenge',
    'Code Generator',
    'Code Snippet',
    'Color',
    'Conference',
    'Database',
    'Design',
    'Documentation',
    'Domain',
    'Editor',
    'Email',
    'Extension',
    'Font',
    'Forum',
    'Freelance',
    'Hacktoberfest',
    'Hosting',
    'Icon',
    'Illustration',
    'Image',
    'Inspiration',
    'Interview',
    'Job',
    'Learn',
    'Legal',
    'Logging',
    'Logo',
    'Library',
    'Marketing',
    'Newsletter',
    'Open Source',
    'Performance',
    'Personal Website',
    'Podcast',
    'Productivity',
    'Programming',
    'Prototyping',
    'Remote',
    'Resume',
    'Scraping',
    'Screenshot',
    'Security',
    'SEO',
    'Serverless',
    'Social Media',
    'Storage',
    'Startup',
    'Template',
    'Terminal',
    'Testing',
    'Tooling',
    'Typing',
    'UI',
    'UX',
    'Video',
    'Web3',
    'Website Builder',
    'Writing',
    'YouTube Channel',
]

const MAX_CATEGORIES = 3

class ResourceValidator {
    constructor() {
        this.errors = []
        this.warnings = []
        this.allResources = []
        this.seenUrls = new Map() // url -> { file, name }
        this.seenNames = new Map() // lowercase name -> { file, name }
    }

    /**
     * Extract resources from TypeScript file content
     */
    extractResources(content) {
        const resources = []

        // Match resource objects in the resources array
        // This regex captures individual resource objects
        const resourceRegex = /\{\s*name:\s*['"`]([^'"`]+)['"`]\s*,\s*description:\s*['"`]([^'"`]+)['"`]\s*,\s*categories:\s*\[([^\]]*)\]\s*,\s*url:\s*['"`]([^'"`]+)['"`](?:\s*,\s*keywords:\s*\[([^\]]*)\])?\s*,?\s*\}/gs

        let match
        while ((match = resourceRegex.exec(content)) !== null) {
            const [, name, description, categoriesStr, url, keywordsStr] = match
            const categories = this.parseArrayString(categoriesStr)
            const keywords = keywordsStr ? this.parseArrayString(keywordsStr) : undefined

            resources.push({
                name: name.trim(),
                description: description.trim(),
                categories,
                url: url.trim(),
                keywords,
                _lineNumber: this.getLineNumber(content, match.index),
            })
        }

        return resources
    }

    /**
     * Parse array string like "'Category1', 'Category2'" into array
     */
    parseArrayString(str) {
        if (!str || !str.trim()) return []
        const matches = str.match(/['"`]([^'"`]+)['"`]/g)
        if (!matches) return []
        return matches.map((m) => m.replace(/['"`]/g, '').trim())
    }

    /**
     * Get line number for a position in content
     */
    getLineNumber(content, position) {
        return content.substring(0, position).split('\n').length
    }

    /**
     * Validate a single resource
     */
    validateResource(resource, filename) {
        const { name, description, categories, url, keywords, _lineNumber } = resource
        const location = `${filename}:${_lineNumber}`

        // Check required fields
        if (!name || typeof name !== 'string' || !name.trim()) {
            this.errors.push({
                type: 'missing_name',
                message: `Missing or invalid 'name' field`,
                location,
                fix: 'Add a valid name string',
            })
        }

        if (!description || typeof description !== 'string' || !description.trim()) {
            this.errors.push({
                type: 'missing_description',
                message: `Resource "${name}": Missing or invalid 'description' field`,
                location,
                fix:
                    'Add a valid description string. Use https://metatags.io to easily copy the description from the website.',
            })
        }

        // Validate categories
        if (!categories || !Array.isArray(categories) || categories.length === 0) {
            this.errors.push({
                type: 'missing_categories',
                message: `Resource "${name}": Missing or empty 'categories' array`,
                location,
                fix: `Add at least one category. Valid categories: ${VALID_CATEGORIES.slice(0, 5).join(', ')}...`,
            })
        } else {
            // Check category count
            if (categories.length > MAX_CATEGORIES) {
                this.errors.push({
                    type: 'too_many_categories',
                    message: `Resource "${name}": Has ${categories.length} categories (max ${MAX_CATEGORIES})`,
                    location,
                    fix: `Reduce to ${MAX_CATEGORIES} categories maximum. Use 'keywords' for additional discoverability.`,
                })
            }

            // Check each category is valid
            for (const category of categories) {
                if (!VALID_CATEGORIES.includes(category)) {
                    const suggestion = this.findSimilarCategory(category)
                    this.errors.push({
                        type: 'invalid_category',
                        message: `Resource "${name}": Invalid category "${category}"`,
                        location,
                        fix: suggestion
                            ? `Did you mean "${suggestion}"?`
                            : `Valid categories are: ${VALID_CATEGORIES.join(', ')}`,
                        suggestion,
                        invalidValue: category,
                    })
                }
            }
        }

        // Validate URL
        if (!url || typeof url !== 'string') {
            this.errors.push({
                type: 'missing_url',
                message: `Resource "${name}": Missing 'url' field`,
                location,
                fix: 'Add a valid URL starting with http:// or https://',
            })
        } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
            this.errors.push({
                type: 'invalid_url_protocol',
                message: `Resource "${name}": URL must start with http:// or https://`,
                location,
                fix: `Change URL to start with https://`,
                invalidValue: url,
            })
        }

        // Validate keywords if present
        if (keywords !== undefined) {
            if (!Array.isArray(keywords)) {
                this.errors.push({
                    type: 'invalid_keywords',
                    message: `Resource "${name}": 'keywords' must be an array of strings`,
                    location,
                    fix: 'Change keywords to an array format: ["keyword1", "keyword2"]',
                })
            } else {
                for (const keyword of keywords) {
                    if (typeof keyword !== 'string') {
                        this.errors.push({
                            type: 'invalid_keyword_type',
                            message: `Resource "${name}": Keyword must be a string, got ${typeof keyword}`,
                            location,
                            fix: 'Ensure all keywords are strings',
                        })
                    }
                }
            }
        }

        // Check for duplicates
        if (name) {
            const lowerName = name.toLowerCase()
            if (this.seenNames.has(lowerName)) {
                const existing = this.seenNames.get(lowerName)
                this.warnings.push({
                    type: 'duplicate_name',
                    message: `Resource "${name}": Possible duplicate name (also in ${existing.file})`,
                    location,
                    fix: 'Check if this is a duplicate entry',
                })
            } else {
                this.seenNames.set(lowerName, { file: filename, name })
            }
        }

        if (url) {
            if (this.seenUrls.has(url)) {
                const existing = this.seenUrls.get(url)
                this.errors.push({
                    type: 'duplicate_url',
                    message: `Resource "${name}": Duplicate URL (also used by "${existing.name}" in ${existing.file})`,
                    location,
                    fix: 'Remove this duplicate entry',
                })
            } else {
                this.seenUrls.set(url, { file: filename, name })
            }
        }
    }

    /**
     * Find similar category using Levenshtein distance
     */
    findSimilarCategory(input) {
        const inputLower = input.toLowerCase()
        let bestMatch = null
        let bestScore = Infinity

        for (const category of VALID_CATEGORIES) {
            const categoryLower = category.toLowerCase()

            // Exact match (case-insensitive)
            if (categoryLower === inputLower) {
                return category
            }

            // Check if input is contained or contains
            if (categoryLower.includes(inputLower) || inputLower.includes(categoryLower)) {
                return category
            }

            // Levenshtein distance
            const distance = this.levenshteinDistance(inputLower, categoryLower)
            if (distance < bestScore && distance <= 3) {
                bestScore = distance
                bestMatch = category
            }
        }

        return bestMatch
    }

    /**
     * Calculate Levenshtein distance between two strings
     */
    levenshteinDistance(a, b) {
        const matrix = []

        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i]
        }

        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j
        }

        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1]
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                }
            }
        }

        return matrix[b.length][a.length]
    }

    /**
     * Check alphabetical order of resources in a file
     */
    checkAlphabeticalOrder(resources, filename) {
        const outOfOrder = []

        for (let i = 1; i < resources.length; i++) {
            const prev = resources[i - 1].name.toLowerCase()
            const curr = resources[i].name.toLowerCase()

            if (prev > curr) {
                outOfOrder.push({
                    type: 'alphabetical_order',
                    message: `Resource "${resources[i].name}" should come before "${resources[i - 1].name}"`,
                    location: `${filename}:${resources[i]._lineNumber}`,
                    fix: `Move "${resources[i].name}" before "${resources[i - 1].name}" to maintain alphabetical order`,
                    current: resources[i].name,
                    shouldComeBefore: resources[i - 1].name,
                })
            }
        }

        return outOfOrder
    }

    /**
     * Validate a single file
     */
    validateFile(filepath) {
        const filename = path.basename(filepath)
        const content = fs.readFileSync(filepath, 'utf8')

        // Check TypeScript syntax (basic check)
        this.checkTypeScriptSyntax(content, filename)

        // Extract and validate resources
        const resources = this.extractResources(content)

        if (resources.length === 0) return

        // Validate each resource
        for (const resource of resources) {
            this.validateResource(resource, filename)
        }

        // Check alphabetical order
        const orderErrors = this.checkAlphabeticalOrder(resources, filename)
        this.errors.push(...orderErrors)

        // Check if resources are in the correct file based on name
        for (const resource of resources) {
            const expectedFile = this.getExpectedFile(resource.name)
            if (expectedFile !== filename) {
                this.errors.push({
                    type: 'wrong_file',
                    message: `Resource "${resource.name}" is in ${filename} but should be in ${expectedFile}`,
                    location: `${filename}:${resource._lineNumber}`,
                    fix: `Move this resource to ${expectedFile}`,
                })
            }
        }

        this.allResources.push(...resources)
    }

    /**
     * Get expected filename for a resource based on its name
     */
    getExpectedFile(name) {
        const firstChar = name.charAt(0).toLowerCase()
        if (firstChar >= '0' && firstChar <= '9') {
            return '0-9.ts'
        }
        if (firstChar >= 'a' && firstChar <= 'z') {
            return `${firstChar}.ts`
        }
        return '0-9.ts' // Default for special characters
    }

    /**
     * Basic TypeScript syntax checking
     */
    checkTypeScriptSyntax(content, filename) {
        // Check for common syntax issues
        const issues = []

        // Check for unclosed brackets
        const openBrackets = (content.match(/\{/g) || []).length
        const closeBrackets = (content.match(/\}/g) || []).length
        if (openBrackets !== closeBrackets) {
            issues.push('Mismatched curly braces')
        }

        const openSquare = (content.match(/\[/g) || []).length
        const closeSquare = (content.match(/\]/g) || []).length
        if (openSquare !== closeSquare) {
            issues.push('Mismatched square brackets')
        }

        // Check for unterminated strings (basic check)
        const lines = content.split('\n')
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]
            // Check for odd number of quotes (excluding escaped ones)
            const singleQuotes = (line.match(/(?<!\\)'/g) || []).length

            if (singleQuotes % 2 !== 0 && !line.includes("'") && !line.trim().endsWith(',')) {
                // Could be multiline, skip
            }
        }

        // Check for missing commas between resources
        const resourceMatches = content.match(/\}\s*\{/g)
        if (resourceMatches) {
            for (const match of resourceMatches) {
                if (!match.includes(',')) {
                    issues.push('Possible missing comma between resources')
                }
            }
        }

        for (const issue of issues) {
            this.errors.push({
                type: 'typescript_syntax',
                message: `${filename}: ${issue}`,
                location: filename,
                fix: 'Fix the TypeScript syntax error',
            })
        }
    }

    /**
     * Validate all resource files
     */
    validateAll(resourcesDir) {
        const files = fs.readdirSync(resourcesDir).filter((f) => f.endsWith('.ts'))

        for (const file of files) {
            const filepath = path.join(resourcesDir, file)
            this.validateFile(filepath)
        }

        return {
            errors: this.errors,
            warnings: this.warnings,
            totalResources: this.allResources.length,
            totalFiles: files.length,
        }
    }

    /**
     * Generate fix suggestions for GitHub Copilot
     */
    generateFixSuggestions() {
        const suggestions = []

        for (const error of this.errors) {
            if (error.type === 'invalid_category' && error.suggestion) {
                suggestions.push({
                    file: error.location.split(':')[0],
                    line: parseInt(error.location.split(':')[1]),
                    search: error.invalidValue,
                    replace: error.suggestion,
                    reason: error.message,
                })
            }
        }

        return suggestions
    }
}

/**
 * Format results for different outputs
 */
function formatResults(results, format = 'console') {
    if (format === 'json') {
        return JSON.stringify(results, null, 2)
    }

    if (format === 'github') {
        // GitHub Actions annotation format
        const lines = []

        for (const error of results.errors) {
            const [file, line] = error.location.split(':')
            lines.push(`::error file=${file},line=${line || 1}::${error.message}. Fix: ${error.fix}`)
        }

        for (const warning of results.warnings) {
            const [file, line] = warning.location.split(':')
            lines.push(`::warning file=${file},line=${line || 1}::${warning.message}. Fix: ${warning.fix}`)
        }

        return lines.join('\n')
    }

    // Console format
    const lines = []
    lines.push(`\n📊 Validation Results`)
    lines.push(`${'─'.repeat(50)}`)
    lines.push(`Total files: ${results.totalFiles}`)
    lines.push(`Total resources: ${results.totalResources}`)
    lines.push(`Errors: ${results.errors.length}`)
    lines.push(`Warnings: ${results.warnings.length}`)
    lines.push('')

    if (results.errors.length > 0) {
        lines.push(`❌ Errors:`)
        for (const error of results.errors) {
            lines.push(`  [${error.location}] ${error.message}`)
            lines.push(`    💡 Fix: ${error.fix}`)
        }
        lines.push('')
    }

    if (results.warnings.length > 0) {
        lines.push(`⚠️ Warnings:`)
        for (const warning of results.warnings) {
            lines.push(`  [${warning.location}] ${warning.message}`)
            lines.push(`    💡 Fix: ${warning.fix}`)
        }
    }

    return lines.join('\n')
}

// Main execution
if (require.main === module) {
    const resourcesDir = path.join(__dirname, '..', 'resources')
    const format = process.argv[2] || 'console' // console, json, or github

    const validator = new ResourceValidator()
    const results = validator.validateAll(resourcesDir)

    console.log(formatResults(results, format))

    // Exit with error code if there are errors
    if (results.errors.length > 0) {
        process.exit(1)
    }
}

module.exports = { ResourceValidator, formatResults, VALID_CATEGORIES }
