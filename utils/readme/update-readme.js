const getResourcesList = require('../get-resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const resourcesList = getResourcesList()

const url = 'https://devresourc.es/?ref=github-readme'

const description = `<div align="center">The resources that power <a href="${url}" target="_blank" rel="noopener">Dev Resources</a></div>\n\n`

const logoDR = `<a><p align="center">[<img src="./assets/logo.png">](${url})</p></a>\n\n`

const logoGcore = `<p align="center"><a href="https://gcore.com?ref=dev_resources&utm_content=dev_resources_repo"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/gcore-dark-mode.png" width="180px"><source media="(prefers-color-scheme: light)" srcset="./assets/gcore-light-mode.png" width="180px"><img alt="Gcore logo" src="./assets/gcore-dark-mode.png" width="180px"></picture></a></p>`
const logoZenlogin = `<p align="center"><a href="https://zenlogin.co?ref=dev_resources&utm_content=dev_resources_repo"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/zenlogin.svg" width="210px"><source media="(prefers-color-scheme: light)" srcset="./assets/zenlogin.svg" width="210px"><img alt="Zenlogin logo" src="./assets/zenlogin.svg" width="210px"></picture></a></p>`

// const sponsors = `<div align="center">Sponsored by</div><br/>\n\n${logoGcore}<br/>\n\n`
const sponsors = `<div align="center">Sponsored by</div><br/>\n\n${logoGcore}<br/>\n\n\n\n${logoZenlogin}\n\n`

const warning =
    '---\n>❗️ This `README.md` file and the `/db` folder are auto-generated, so please ***do not*** edit them. Changes related to resources should happen within the `/resources` folder.\n---\n\n'

const contributionGuide = 'To add a resource, check the [contributing guide](CONTRIBUTING.md).\n\n'

const publicApisLink = `Looking for public APIs? Visit [github.com/marcelscruz/public-apis](https://github.com/marcelscruz/public-apis).\n\n`

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
