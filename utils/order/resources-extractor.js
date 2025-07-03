// Script para extraer y ordenar los recursos
const fs = require('fs')
const path = require('path')

// Get the resources directory path
const RESOURCES_DIR = path.join(process.cwd(), 'resources')

// Function to read a TypeScript resource file and extract the resources array
const extractResourcesFromFile = (filePath) => {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8')

        // Check if file has the expected pattern
        if (!fileContent.includes('export const resources')) {
            console.warn(`⚠️ No resources array found in ${path.basename(filePath)}`)
            return []
        }

        // Extract file content between the resource array brackets
        const arrayStartMatch = fileContent.match(/export\s+const\s+resources\s*:\s*Resource\[\]\s*=\s*\[/)
        const arrayEndMatch = fileContent.match(/\]\s*;?\s*$/)

        if (!arrayStartMatch || !arrayEndMatch) {
            console.warn(`⚠️ No proper resource array structure found in ${path.basename(filePath)}`)
            return []
        }

        // Get the content between the brackets
        const arrayStartPos = arrayStartMatch.index + arrayStartMatch[0].length
        const arrayEndPos = arrayEndMatch.index
        const arrayContent = fileContent.substring(arrayStartPos, arrayEndPos)

        // Split array content into individual resource objects
        // This approach is more reliable than regex for complex strings with escaped characters
        const resources = []
        let currentObject = ''
        let braceCount = 0
        let inString = false
        let stringChar = ''
        let escaped = false

        for (let i = 0; i < arrayContent.length; i++) {
            const char = arrayContent[i]
            currentObject += char

            if (escaped) {
                escaped = false
                continue
            }

            if (char === '\\') {
                escaped = true
                continue
            }

            if (!inString) {
                if (char === '{') {
                    braceCount++
                } else if (char === '}') {
                    braceCount--
                    if (braceCount === 0) {
                        // End of object
                        resources.push(currentObject)
                        currentObject = ''
                        // Skip comma and whitespace
                        while (
                            i + 1 < arrayContent.length &&
                            (arrayContent[i + 1] === ',' || /\s/.test(arrayContent[i + 1]))
                        ) {
                            i++
                        }
                    }
                } else if ((char === "'" || char === '"' || char === '`') && braceCount > 0) {
                    inString = true
                    stringChar = char
                }
            } else {
                if (char === stringChar && !escaped) {
                    inString = false
                }
            }
        }

        // Parse each resource object
        const parsedResources = resources
            .map((objStr) => {
                try {
                    // Extract name
                    const nameMatch = objStr.match(/name:\s*['"](.+?)(?<!\\)['"]/) ||
                        objStr.match(/name:\s*['"](.+?)['"]/) || ['', '']

                    // Extract description
                    const descMatch = extractStringProperty(objStr, 'description')

                    // Extract categories
                    const categoriesMatch = objStr.match(/categories:\s*\[(.*?)\]/s) || ['', '']
                    const categories = categoriesMatch[1]
                        .split(',')
                        .map((cat) => {
                            const trimmed = cat.trim()
                            if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
                                return trimmed.slice(1, -1)
                            }
                            return trimmed.replace(/['"]/g, '')
                        })
                        .filter((cat) => cat.trim())

                    // Extract url
                    const urlMatch = objStr.match(/url:\s*['"](.+?)(?<!\\)['"]/) ||
                        objStr.match(/url:\s*['"](.+?)['"]/) || ['', '']

                    // Extract keywords if present
                    const keywordsMatch = objStr.match(/keywords:\s*\[(.*?)\]/s)
                    let keywords = []
                    if (keywordsMatch && keywordsMatch[1]) {
                        keywords = keywordsMatch[1]
                            .split(',')
                            .map((key) => {
                                const trimmed = key.trim()
                                if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
                                    return trimmed.slice(1, -1)
                                }
                                return trimmed.replace(/['"]/g, '')
                            })
                            .filter((key) => key.trim())
                    }

                    return {
                        name: nameMatch[1],
                        description: descMatch,
                        categories: categories,
                        url: urlMatch[1],
                        keywords: keywords.length > 0 ? keywords : undefined,
                    }
                } catch (err) {
                    console.error(`Error parsing resource object: ${err.message}`)
                    return null
                }
            })
            .filter(Boolean)

        console.log(`✅ Found ${parsedResources.length} resources in ${path.basename(filePath)}`)
        return parsedResources
    } catch (error) {
        console.error(`Error reading file ${path.basename(filePath)}:`, error)
        return []
    }
}

// Helper function to extract string properties safely
function extractStringProperty(objStr, propName) {
    // Find the property in the object string
    const propIndex = objStr.indexOf(`${propName}:`)
    if (propIndex === -1) return undefined

    // Find the start of the string value
    let valueStart = -1
    let quoteChar = null
    for (let i = propIndex + propName.length + 1; i < objStr.length; i++) {
        const char = objStr[i]
        if (char === "'" || char === '"' || char === '`') {
            valueStart = i + 1
            quoteChar = char
            break
        }
    }

    if (valueStart === -1 || !quoteChar) return undefined

    // Find the end of the string, accounting for escaped quotes
    let valueEnd = -1
    let escaped = false
    for (let i = valueStart; i < objStr.length; i++) {
        const char = objStr[i]

        if (escaped) {
            escaped = false
        } else if (char === '\\') {
            escaped = true
        } else if (char === quoteChar) {
            valueEnd = i
            break
        }
    }

    if (valueEnd === -1) return undefined

    // Extract and return the string value
    return objStr.substring(valueStart, valueEnd)
}

// Function to sort resources alphabetically by name
const sortResources = (resources) => {
    return [...resources].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
}

// Function to write resources back to file
const writeResourcesToFile = (filePath, resources) => {
    try {
        if (resources.length === 0) {
            return
        }

        // Read the original file to keep its structure
        const originalContent = fs.readFileSync(filePath, 'utf8')

        // Format each resource as a string with proper indentation
        const resourcesAsString = resources
            .map((resource) => {
                let result = '    {\n'

                // Add name (always present)
                result += `        name: '${escapeString(resource.name)}',\n`

                // Add description if present
                if (resource.description) {
                    result += `        description:\n`
                    result += `            '${escapeString(resource.description)}',\n`
                }

                // Add categories (always present)
                result += '        categories: ['
                result += resource.categories.map((cat) => `'${escapeString(cat)}'`).join(', ')
                result += '],\n'

                // Add url (always present)
                result += `        url: '${escapeString(resource.url)}'`

                // Add keywords if present
                if (resource.keywords && resource.keywords.length > 0) {
                    result += ',\n        keywords: ['
                    result += resource.keywords.map((key) => `'${escapeString(key)}'`).join(', ')
                    result += ']'
                }

                result += '\n    }'
                return result
            })
            .join(',\n')

        // Replace the resources array in the original content
        // Find the area between export const resources: Resource[] = [ and the closing ]
        const pattern = /(export\s+const\s+resources\s*:\s*Resource\[\]\s*=\s*\[)[\s\S]*(\])\s*;?/
        const replacement = `$1\n${resourcesAsString}\n$2`

        const updatedContent = originalContent.replace(pattern, replacement)

        fs.writeFileSync(filePath, updatedContent, 'utf8')
        console.log(`✅ Updated ${path.basename(filePath)}`)
    } catch (error) {
        console.error(`Error writing to file ${path.basename(filePath)}:`, error)
    }
}

// Helper function to properly escape string values
function escapeString(str) {
    if (!str) return ''

    let result = ''
    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (char === "'") {
            // Check if it's already escaped
            if (i > 0 && str[i - 1] === '\\') {
                result += char
            } else {
                result += `\\'`
            }
        } else if (char === '"') {
            // Check if it's already escaped
            if (i > 0 && str[i - 1] === '\\') {
                result += char
            } else {
                result += '\\"'
            }
        } else if (char === '\\') {
            // Check if it's escaping a quote
            if (i < str.length - 1 && (str[i + 1] === "'" || str[i + 1] === '"')) {
                result += '\\'
            } else {
                result += '\\\\'
            }
        } else {
            result += char
        }
    }

    return result
}

// Main function to order all resources
const orderResources = () => {
    console.log('🔄 Ordering resources alphabetically...')

    // Get all resource files
    const files = fs.readdirSync(RESOURCES_DIR).filter((file) => file.endsWith('.ts'))

    let totalResourcesProcessed = 0

    // Process each file
    for (const file of files) {
        const filePath = path.join(RESOURCES_DIR, file)

        try {
            // Read and extract resources
            const resources = extractResourcesFromFile(filePath)

            if (resources.length === 0) {
                continue
            }

            totalResourcesProcessed += resources.length

            // Sort resources
            const sortedResources = sortResources(resources)

            // Write back sorted resources
            writeResourcesToFile(filePath, sortedResources)
        } catch (error) {
            console.error(`Error processing ${file}:`, error)
        }
    }

    console.log(`✨ Done! Processed ${totalResourcesProcessed} resources in ${files.length} files.`)
}

// Run the script
orderResources()
