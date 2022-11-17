const getResourcesList = require('../get-resources-list')
const createCategoriesList = require('./create-categories-list')
const createResourcesByCategory = require('./create-resources-by-category')
const writeToFile = require('../write-to-file')

async function updateDB() {
    try {
        const resourcesList = getResourcesList()

        await writeToFile({
            data: `{"data": ${JSON.stringify(resourcesList, null, 4)}}`,
            filePath: './db/resources-list.json',
        })

        // Create resources by category
        const resourcesByCategory = createResourcesByCategory(resourcesList)

        await writeToFile({
            data: `{"data": ${JSON.stringify(resourcesByCategory, null, 4)}}`,
            filePath: './db/resources-by-category.json',
        })

        // Create categories list
        const categoriesList = createCategoriesList(resourcesList)

        await writeToFile({
            data: `{"data": ${JSON.stringify(categoriesList, null, 4)}}`,
            filePath: './db/categories-list.json',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateDB()
