const getResourcesList = require('../get-resources-list')
const createCategoriesList = require('./create-categories-list')
const writeToFile = require('../write-to-file')

const formatJson = (data) => {
    return `{\n"count": ${data.length},\n"data": ${JSON.stringify(data, null, 4)}}`
}

async function updateDB() {
    try {
        const resourcesList = getResourcesList()

        await writeToFile({
            data: formatJson(resourcesList),
            filePath: './db/resources.json',
        })

        // Create categories list
        const categoriesList = createCategoriesList(resourcesList)

        await writeToFile({
            data: formatJson(categoriesList),
            filePath: './db/categories.json',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateDB()
