const fs = require('fs')
const path = require('path')
const { ResourceValidator, VALID_CATEGORIES } = require('./validate-resources')

/**
 * Generate fix suggestions in diff format for common issues
 */
class FixSuggestionGenerator {
    constructor() {
        this.suggestions = []
    }

    /**
     * Read a resource file and extract resource objects with their exact positions
     */
    parseResourceFile(filepath) {
        const content = fs.readFileSync(filepath, 'utf8')
        const lines = content.split('\n')
        const resources = []

        // Find resources array start
        let inResourcesArray = false
        let braceDepth = 0
        let currentResource = null

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]

            if (line.includes('export const resources')) {
                inResourcesArray = true
                continue
            }

            if (!inResourcesArray) continue

            // Track brace depth to find resource boundaries
            const openBraces = (line.match(/\{/g) || []).length
            const closeBraces = (line.match(/\}/g) || []).length

            if (braceDepth === 1 && openBraces > closeBraces) {
                // Starting a new resource object
                currentResource = { lines: [], startLine: i + 1 }
            }

            braceDepth += openBraces - closeBraces

            if (currentResource) {
                currentResource.lines.push(line)

                // Extract properties
                const nameMatch = line.match(/name:\s*['"`]([^'"`]+)['"`]/)
                if (nameMatch) currentResource.name = nameMatch[1]

                const urlMatch = line.match(/url:\s*['"`]([^'"`]+)['"`]/)
                if (urlMatch) currentResource.url = urlMatch[1]

                const categoriesMatch = line.match(/categories:\s*\[([^\]]*)\]/)
                if (categoriesMatch) {
                    currentResource.categories = this.parseCategories(categoriesMatch[1])
                    currentResource.categoriesLine = i + 1
                    currentResource.originalCategoriesStr = categoriesMatch[0]
                }
            }

            if (braceDepth === 1 && closeBraces > 0 && currentResource) {
                currentResource.endLine = i + 1
                resources.push(currentResource)
                currentResource = null
            }
        }

        return { content, lines, resources }
    }

    /**
     * Parse categories from string
     */
    parseCategories(str) {
        if (!str || !str.trim()) return []
        const matches = str.match(/['"`]([^'"`]+)['"`]/g)
        if (!matches) return []
        return matches.map((m) => m.replace(/['"`]/g, '').trim())
    }

    /**
     * Find the best matching valid category
     */
    findBestCategory(invalidCategory) {
        const inputLower = invalidCategory.toLowerCase()

        // Exact match (case-insensitive)
        for (const cat of VALID_CATEGORIES) {
            if (cat.toLowerCase() === inputLower) {
                return cat
            }
        }

        // Partial match
        for (const cat of VALID_CATEGORIES) {
            if (cat.toLowerCase().includes(inputLower) || inputLower.includes(cat.toLowerCase())) {
                return cat
            }
        }

        // Levenshtein distance
        let bestMatch = null
        let bestScore = Infinity

        for (const cat of VALID_CATEGORIES) {
            const distance = this.levenshteinDistance(inputLower, cat.toLowerCase())
            if (distance < bestScore && distance <= 4) {
                bestScore = distance
                bestMatch = cat
            }
        }

        return bestMatch
    }

    /**
     * Calculate Levenshtein distance
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
     * Generate diff-style fix suggestions
     */
    generateFixes(resourcesDir) {
        const validator = new ResourceValidator()
        const results = validator.validateAll(resourcesDir)

        const fixes = []

        for (const error of results.errors) {
            const [filename] = error.location.split(':')

            if (error.type === 'invalid_category') {
                const suggestion = this.findBestCategory(error.invalidValue)
                if (suggestion) {
                    fixes.push({
                        file: filename,
                        type: 'category_fix',
                        description: `Fix invalid category "${error.invalidValue}" → "${suggestion}"`,
                        search: `'${error.invalidValue}'`,
                        replace: `'${suggestion}'`,
                    })
                }
            }

            if (error.type === 'invalid_url_protocol') {
                const fixedUrl = error.invalidValue.startsWith('http')
                    ? error.invalidValue
                    : `https://${error.invalidValue}`
                fixes.push({
                    file: filename,
                    type: 'url_fix',
                    description: `Fix URL protocol`,
                    search: error.invalidValue,
                    replace: fixedUrl,
                })
            }

            if (error.type === 'too_many_categories') {
                fixes.push({
                    file: filename,
                    type: 'info',
                    description: error.message,
                    suggestion: 'Reduce to 3 categories maximum and use keywords for additional discoverability.',
                })
            }

            if (error.type === 'alphabetical_order') {
                fixes.push({
                    file: filename,
                    type: 'order_fix',
                    description: error.message,
                    suggestion: `Move "${error.current}" before "${error.shouldComeBefore}"`,
                })
            }

            if (error.type === 'wrong_file') {
                fixes.push({
                    file: filename,
                    type: 'move_file',
                    description: error.message,
                    suggestion: error.fix,
                })
            }
        }

        return fixes
    }

    /**
     * Format fixes as diff output
     */
    formatAsDiff(fixes) {
        const lines = []

        // Group fixes by file
        const byFile = {}
        for (const fix of fixes) {
            if (!byFile[fix.file]) byFile[fix.file] = []
            byFile[fix.file].push(fix)
        }

        for (const [file, fileFixes] of Object.entries(byFile)) {
            lines.push(`# ${file}`)

            for (const fix of fileFixes) {
                lines.push(`# ${fix.description}`)

                if (fix.search && fix.replace) {
                    lines.push(`- ${fix.search}`)
                    lines.push(`+ ${fix.replace}`)
                } else if (fix.suggestion) {
                    lines.push(`# Suggestion: ${fix.suggestion}`)
                }

                lines.push('')
            }
        }

        return lines.join('\n')
    }

    /**
     * Generate a markdown table of fixes
     */
    formatAsMarkdown(fixes) {
        if (fixes.length === 0) {
            return 'No automatic fixes available.'
        }

        const lines = ['| File | Issue | Fix |', '|------|-------|-----|']

        for (const fix of fixes) {
            const fixText = fix.replace
                ? `\`${fix.search}\` → \`${fix.replace}\``
                : fix.suggestion || 'Manual fix required'
            lines.push(`| ${fix.file} | ${fix.description} | ${fixText} |`)
        }

        return lines.join('\n')
    }
}

// Main execution
if (require.main === module) {
    const resourcesDir = path.join(__dirname, '..', 'resources')
    const format = process.argv[2] || 'diff' // diff or markdown

    const generator = new FixSuggestionGenerator()
    const fixes = generator.generateFixes(resourcesDir)

    if (format === 'markdown') {
        console.log(generator.formatAsMarkdown(fixes))
    } else {
        console.log(generator.formatAsDiff(fixes))
    }
}

module.exports = { FixSuggestionGenerator }
