const fs = require('fs')
const path = require('path')
const { ResourceValidator } = require('./validate-resources')

/**
 * Automatically fix safe issues in resource files
 */
class AutoFixer {
    constructor() {
        this.fixesApplied = []
        this.filesModified = new Set()
    }

    /**
     * Fix invalid category names with clear suggestions
     */
    fixInvalidCategories(filepath, invalidCategory, suggestedCategory) {
        const content = fs.readFileSync(filepath, 'utf8')
        const lines = content.split('\n')
        let modified = false

        // Replace invalid category with suggested one
        // Match: 'InvalidCategory' or "InvalidCategory"
        const regex = new RegExp(`(['"\`])${invalidCategory.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\1`, 'g')

        for (let i = 0; i < lines.length; i++) {
            if (regex.test(lines[i])) {
                const originalLine = lines[i]
                lines[i] = lines[i].replace(regex, `$1${suggestedCategory}$1`)
                if (lines[i] !== originalLine) {
                    modified = true
                    this.fixesApplied.push({
                        file: path.basename(filepath),
                        line: i + 1,
                        type: 'category_fix',
                        change: `${invalidCategory} → ${suggestedCategory}`,
                    })
                }
            }
        }

        if (modified) {
            fs.writeFileSync(filepath, lines.join('\n'), 'utf8')
            this.filesModified.add(filepath)
            return true
        }
        return false
    }

    /**
     * Fix URL protocol issues
     */
    fixUrlProtocol(filepath, invalidUrl, fixedUrl) {
        const content = fs.readFileSync(filepath, 'utf8')
        const lines = content.split('\n')
        let modified = false

        // Escape special regex characters in URL
        const escapedUrl = invalidUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const regex = new RegExp(`url:\\s*['"\`]${escapedUrl}['"\`]`, 'g')

        for (let i = 0; i < lines.length; i++) {
            if (regex.test(lines[i])) {
                const originalLine = lines[i]
                lines[i] = lines[i].replace(new RegExp(`(['"\`])${escapedUrl}\\1`), `$1${fixedUrl}$1`)
                if (lines[i] !== originalLine) {
                    modified = true
                    this.fixesApplied.push({
                        file: path.basename(filepath),
                        line: i + 1,
                        type: 'url_fix',
                        change: `${invalidUrl} → ${fixedUrl}`,
                    })
                }
            }
        }

        if (modified) {
            fs.writeFileSync(filepath, lines.join('\n'), 'utf8')
            this.filesModified.add(filepath)
            return true
        }
        return false
    }

    /**
     * Fix missing commas between resource objects
     */
    fixMissingCommas(filepath) {
        const content = fs.readFileSync(filepath, 'utf8')
        const lines = content.split('\n')
        let modified = false
        const fixes = []

        // Look for patterns where a closing brace is followed by an opening brace without a comma
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]
            const nextLine = i + 1 < lines.length ? lines[i + 1] : ''

            // Pattern 1: "}" on current line, "{" on next line, no comma
            if (line.trim().endsWith('}') && nextLine.trim().startsWith('{')) {
                const trimmed = line.trim()
                if (!trimmed.endsWith('},') && !trimmed.endsWith('},')) {
                    lines[i] = line.replace(/\}\s*$/, '},')
                    modified = true
                    fixes.push(i + 1)
                }
            }

            // Pattern 2: "} {" on same line
            if (/\}\s*\{/.test(line) && !/},\s*\{/.test(line)) {
                lines[i] = line.replace(/\}\s*\{/, '},\n    {')
                modified = true
                fixes.push(i + 1)
            }
        }

        if (modified) {
            fs.writeFileSync(filepath, lines.join('\n'), 'utf8')
            this.filesModified.add(filepath)
            this.fixesApplied.push({
                file: path.basename(filepath),
                line: fixes[0],
                type: 'missing_comma',
                change: `Added missing comma(s) between resources (${fixes.length} fix(es))`,
            })
            return true
        }
        return false
    }

    /**
     * Fix alphabetical ordering of resources
     */
    fixAlphabeticalOrder(filepath) {
        const content = fs.readFileSync(filepath, 'utf8')

        // Use ResourceValidator to extract resources
        const validator = new ResourceValidator()
        const resources = validator.extractResources(content)

        if (resources.length < 2) return false

        // Check if already sorted
        let needsSorting = false
        for (let i = 1; i < resources.length; i++) {
            const prev = resources[i - 1].name.toLowerCase()
            const curr = resources[i].name.toLowerCase()
            if (prev > curr) {
                needsSorting = true
                break
            }
        }

        if (!needsSorting) return false

        // Extract resource objects using brace tracking, matching only those found by validator regex
        const lines = content.split('\n')
        const resourceObjects = []
        let inResourcesArray = false
        let braceDepth = 0
        let currentResource = []
        let arrayBracketDepth = 0

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]

            if (line.includes('export const resources')) {
                inResourcesArray = true
                const openBrackets = (line.match(/\[/g) || []).length
                arrayBracketDepth = openBrackets
                continue
            }

            if (!inResourcesArray) continue

            const openBraces = (line.match(/\{/g) || []).length
            const closeBraces = (line.match(/\}/g) || []).length
            const openBrackets = (line.match(/\[/g) || []).length
            const closeBrackets = (line.match(/\]/g) || []).length

            arrayBracketDepth += openBrackets - closeBrackets

            if (braceDepth === 0 && openBraces > 0 && arrayBracketDepth > 0) {
                currentResource = [line]
            } else if (currentResource.length > 0) {
                currentResource.push(line)
            }

            braceDepth += openBraces - closeBraces

            if (braceDepth === 0 && currentResource.length > 0 && arrayBracketDepth > 0) {
                const resourceText = currentResource.join('\n')
                const name = this.extractResourceName(resourceText)
                
                // Check if this resource matches the validator's regex pattern
                // Only include resources that the validator would recognize
                // Use a new regex instance each time to avoid global state issues
                const validatorRegex = /\{\s*name:\s*['"`]([^'"`]+)['"`]\s*,\s*description:\s*['"`]([^'"`]+)['"`]\s*,\s*categories:\s*\[([^\]]*)\]\s*,\s*url:\s*['"`]([^'"`]+)['"`](?:\s*,\s*keywords:\s*\[([^\]]*)\])?\s*,?\s*\}/s
                if (name && validatorRegex.test(resourceText)) {
                    resourceObjects.push({
                        text: resourceText,
                        name: name.toLowerCase(),
                        originalIndex: resourceObjects.length,
                    })
                }
                currentResource = []
            }

            if (arrayBracketDepth <= 0) {
                break
            }
        }

        if (resourceObjects.length !== resources.length) {
            // Extraction mismatch, skip auto-fix
            return false
        }

        // Sort resource objects by name (using same comparison as validator: simple string comparison)
        resourceObjects.sort((a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
        })

        // Check if order actually changed
        let orderChanged = false
        for (let i = 0; i < resourceObjects.length; i++) {
            if (resourceObjects[i].originalIndex !== i) {
                orderChanged = true
                break
            }
        }

        if (!orderChanged) return false

        // Rebuild file with sorted resources
        const resourcesStartIndex = lines.findIndex((line) => line.includes('export const resources'))
        const beforeResources = lines.slice(0, resourcesStartIndex + 1).join('\n')

        // Find where resources array ends (track square brackets for the array)
        let arrayEndIndex = lines.length // Default to end of file if not found
        let arrayDepth = 1 // Start at 1 because we're already inside the opening [
        for (let i = resourcesStartIndex + 1; i < lines.length; i++) {
            const openBrackets = (lines[i].match(/\[/g) || []).length
            const closeBrackets = (lines[i].match(/\]/g) || []).length
            arrayDepth += openBrackets - closeBrackets
            if (arrayDepth <= 0) {
                arrayEndIndex = i + 1 // Include the line with the closing bracket
                break
            }
        }

        const afterResources = lines.slice(arrayEndIndex).join('\n')

        // Reconstruct sorted resources
        const sortedResourcesText = resourceObjects
            .map((resource, index) => {
                let text = resource.text.trim()
                // Ensure comma after each resource except the last
                if (index < resourceObjects.length - 1 && !text.endsWith(',')) {
                    text += ','
                }
                return text
            })
            .join('\n    ')

        // Build final content - ensure we have a closing bracket
        let newContent = beforeResources + '\n    ' + sortedResourcesText
        if (afterResources.trim()) {
            newContent += '\n' + afterResources
        } else {
            // No afterResources means we need to add the closing bracket
            newContent += '\n]'
        }

        fs.writeFileSync(filepath, newContent, 'utf8')
        this.filesModified.add(filepath)
        this.fixesApplied.push({
            file: path.basename(filepath),
            line: resourcesStartIndex + 1,
            type: 'alphabetical_order',
            change: `Reordered ${resourceObjects.length} resources alphabetically`,
        })

        return true
    }

    /**
     * Extract resource name from resource object text
     */
    extractResourceName(resourceText) {
        const nameMatch = resourceText.match(/name:\s*['"`]([^'"`]+)['"`]/)
        return nameMatch ? nameMatch[1] : ''
    }

    /**
     * Apply all safe fixes
     */
    applyFixes(resourcesDir) {
        const validator = new ResourceValidator()
        const results = validator.validateAll(resourcesDir)

        let totalFixes = 0

        // Get all resource files
        const allFiles = fs.readdirSync(resourcesDir).filter((f) => f.endsWith('.ts'))

        // Get list of files that have specific errors
        const filesWithErrors = new Set()
        for (const error of results.errors) {
            const [filename] = error.location.split(':')
            if (filename.endsWith('.ts')) {
                filesWithErrors.add(filename)
            }
        }

        // Fix each file
        for (const filename of allFiles) {
            const filepath = path.join(resourcesDir, filename)
            let fileModified = false

            // Always check for missing commas (syntax errors)
            if (this.fixMissingCommas(filepath)) {
                totalFixes++
                fileModified = true
            }

            // Fix invalid categories (only if we have a clear suggestion)
            for (const error of results.errors) {
                if (error.location.startsWith(filename) && error.type === 'invalid_category' && error.suggestion) {
                    if (this.fixInvalidCategories(filepath, error.invalidValue, error.suggestion)) {
                        totalFixes++
                        fileModified = true
                    }
                }

                // Fix URL protocol issues
                if (
                    error.location.startsWith(filename) &&
                    error.type === 'invalid_url_protocol' &&
                    error.invalidValue
                ) {
                    const fixedUrl = error.invalidValue.startsWith('http')
                        ? error.invalidValue
                        : `https://${error.invalidValue}`
                    if (this.fixUrlProtocol(filepath, error.invalidValue, fixedUrl)) {
                        totalFixes++
                        fileModified = true
                    }
                }
            }

            // Always check for alphabetical order issues (do this last after other fixes)
            // Re-read file if it was modified
            if (fileModified) {
                // File was modified, re-validate to get updated line numbers
                const updatedValidator = new ResourceValidator()
                updatedValidator.validateFile(filepath)
            }

            // Always check alphabetical order, not just when error is reported
            // (in case validation didn't catch it or we want to fix it proactively)
            if (this.fixAlphabeticalOrder(filepath)) {
                totalFixes++
            }
        }

        return {
            totalFixes,
            fixesApplied: this.fixesApplied,
            filesModified: Array.from(this.filesModified).map((f) => path.basename(f)),
        }
    }
}

// Main execution
if (require.main === module) {
    const resourcesDir = path.join(__dirname, '..', 'resources')
    const autoFixer = new AutoFixer()
    const result = autoFixer.applyFixes(resourcesDir)

    console.log(JSON.stringify(result, null, 2))

    if (result.totalFixes > 0) {
        console.error(`Applied ${result.totalFixes} automatic fix(es)`)
        process.exit(0) // Exit with success since fixes were applied
    } else {
        console.log('No automatic fixes to apply')
        process.exit(0)
    }
}

module.exports = { AutoFixer }
