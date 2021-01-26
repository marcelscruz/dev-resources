const fs = require('fs')
const files = fs.readdirSync('./resources')
const fetchPublicApis = require('../fetch-external-resources/fetch-public-apis')
const createFlatResourcesList = require('./create-flat-resources-list')
const createResourcesByCategory = require('./create-resources-by-category')
const createCategoriesList = require('./create-categories-list')
const writeToFile = require('../write-to-file')

async function updateDB() {
    try {
        // Fetch external resources
        const publicApis = await fetchPublicApis()

        // Create flat resources list
        const flattenedResources = createFlatResourcesList({
            files,
            externalResources: [...publicApis],
        })

        await writeToFile({
            data: `module.exports = ${JSON.stringify(flattenedResources, null, 4)}`,
            filePath: './db/resources-list.js',
        })

        // Create resources by category
        const resourcesByCategory = createResourcesByCategory(flattenedResources)

        await writeToFile({
            data: `module.exports = ${JSON.stringify(resourcesByCategory, null, 4)}`,
            filePath: './db/resources-by-category.js',
        })

        // Create categories list
        const categoriesList = createCategoriesList(flattenedResources)

        await writeToFile({
            data: `module.exports = ${JSON.stringify(categoriesList, null, 4)}`,
            filePath: './db/categories-list.js',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateDB()
