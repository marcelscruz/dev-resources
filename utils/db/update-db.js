const getResourcesList = require('../get-resources-list')
const createCategoriesList = require('./create-categories-list')
const createResourcesByCategory = require('./create-resources-by-category')
const writeToFile = require('../write-to-file')

const formatJson = (data) => {
    return `{"data": ${JSON.stringify(data, null, 4)}}`
}

async function updateDB() {
    try {
        const resourcesList = getResourcesList()

        await writeToFile({
            data: formatJson(resourcesList),
            filePath: './db/resources-list.json',
        })

        // Create resources by category
        const resourcesByCategory = createResourcesByCategory(resourcesList)

        await writeToFile({
            data: formatJson(resourcesByCategory),
            filePath: './db/resources-by-category.json',
        })

        // Create categories list
        const categoriesList = createCategoriesList(resourcesList)

        await writeToFile({
            data: formatJson(categoriesList),
            filePath: './db/categories-list.json',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateDB()
