const fs = require('fs')
const files = fs.readdirSync('./resources')
const flattenResources = require('./flatten-resources')
const writeToFile = require('./write-to-file')

async function updateDB() {
    try {
        const flattenedResources = flattenResources(files)

        await writeToFile({
            data: `module.exports = ${JSON.stringify(flattenedResources, null, 4)}`,
            filePath: './db/resources-list.js',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateDB()
