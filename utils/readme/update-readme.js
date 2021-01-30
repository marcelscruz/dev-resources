const resourcesList = require('../../db/resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const title = '# Dev Resources\n\n'

const description = 'The list and public API of the resources that power [Dev Resources](https://devresourc.es).\n\n'

const contributionGuide =
    'For information on contributing, please see the [contributing guide](docs/CONTRIBUTING.md).\n\n'

const usageGuide = 'For information on using the public API, please see the [API usage guide](docs/API_USAGE.md).\n\n'

async function updateReadme() {
    try {
        const resourcesTree = createTree(resourcesList)
        const index = createIndex(resourcesTree)
        const tables = createTables(resourcesTree)

        await writeToFile({
            data: `${title} ${description} ${contributionGuide} ${usageGuide} ${index} ${tables}`,
            filePath: './README.md',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateReadme()
