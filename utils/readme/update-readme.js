const getResourcesList = require('../get-resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const resourcesList = getResourcesList()

const url = 'https://devresourc.es/?ref=github-readme'

const description = `<div align="center">The resources that power <a href="${url}" target="_blank" rel="noopener">Dev Resources</a></div>\n\n`

const logoDR = `<a><p align="center">[<img src="./assets/logo.png">](${url})</p></a>\n\n`

const logoClerk = `<a href="https://clerk.dev?utm_source=public_apis&utm_content=dev_resources_repo"><p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/clerk-dark-mode.png" width="180px"><source media="(prefers-color-scheme: light)" srcset="./assets/clerk-light-mode.png" width="180px"><img alt="Clerk logo" src="./assets/clerk-dark-mode.png" width="180px"></picture></p></a>`

const logoGcore = `<a href="https://gcore.com?utm_source=public_apis&utm_content=dev_resources_repo"><p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/gcore-dark-mode.png" width="130px"><source media="(prefers-color-scheme: light)" srcset="./assets/gcore-light-mode.png" width="130px"><img alt="Gcore logo" src="./assets/gcore-dark-mode.png" width="130px"></picture></p></a>`

const sponsors = `<div align="center">Sponsored by</div>\n\n${logoClerk}\n\n\n\n${logoGcore}\n\n`

const warning =
    '---\n>❗️ This `README.md` file and the `/db` folder are auto-generated, so please ***do not*** edit them. Changes related to resources should happen within the `/resources` folder.\n---\n\n'

const contributionGuide = 'To add a resource, check the [contributing guide](CONTRIBUTING.md).\n\n'

const publicApisLink = `Looking for public APIs? Visit [github.com/public-apis-dev/public-apis](https://github.com/public-apis-dev/public-apis).\n\n`

const resourcesCount = `### Total resources: ${resourcesList.length}\n\n`

async function updateReadme() {
    try {
        const resourcesTree = createTree(resourcesList)
        const index = createIndex(resourcesTree)
        const tables = createTables(resourcesTree)

        await writeToFile({
            data: `${description} ${logoDR} ${sponsors} ${warning} ${contributionGuide}${publicApisLink} ${resourcesCount} ${index} ${tables}`,
            filePath: './README.md',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateReadme()
