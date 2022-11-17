const getResourcesList = require('../get-resources-list')
const createCategoriesList = require('./create-categories-list')
const createResourcesByCategory = require('./create-resources-by-category')
const writeToFile = require('../write-to-file')

async function updateDB() {
    try {
        const resourcesList = getResourcesList()

        await writeToFile({
            data: `module.exports = ${JSON.stringify(resourcesList, null, 4)}`,
            filePath: './db/resources-list.js',
        })

        // Create resources by category
        const resourcesByCategory = createResourcesByCategory(resourcesList)

        await writeToFile({
            data: `module.exports = ${JSON.stringify(resourcesByCategory, null, 4)}`,
            filePath: './db/resources-by-category.js',
        })

        // Create categories list
        const categoriesList = createCategoriesList(resourcesList)

        await writeToFile({
            data: `module.exports = ${JSON.stringify(categoriesList, null, 4)}`,
            filePath: './db/categories-list.js',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateDB()
