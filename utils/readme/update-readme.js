const resourcesList = require('../../db/resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

async function updateReadme() {
    try {
        const resourcesTree = createTree(resourcesList)

        const index = createIndex(resourcesTree)
        const tables = createTables(resourcesTree)

        await writeToFile({
            data: `${index} ${tables}`,
            filePath: './README.md',
        })

        const readmeFrontmatter = `---\nslug: '/'\n---\n\n`

        await writeToFile({
            data: `${readmeFrontmatter}${index} ${tables}`,
            filePath: './src/markdown-pages/README.md',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateReadme()
