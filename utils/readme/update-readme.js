const getResourcesList = require('../get-resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const resourcesList = getResourcesList()

const header = `<div align="center"><h1>Dev Resources</h1><i>A collaborative list of resources for developers</i></div>`
const links = `<div align="center">
<a href="API.md">API</a> •
<a href="CONTRIBUTING.md">Contributing Guide</a> •
<a href="https://github.com/marcelscruz/dev-resources/issues">Issues</a> •
<a href="https://github.com/marcelscruz/dev-resources/pulls">Pull Requests</a> •
<a href="LICENSE">License</a>
</div>`

const logoGcore = `<p align="center"><a href="https://gcore.com?ref=dev_resources&utm_medium=repo_readme"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/gcore-dark-mode.png" width="180px"><source media="(prefers-color-scheme: light)" srcset="./assets/gcore-light-mode.png" width="180px"><img alt="Gcore logo" src="./assets/gcore-dark-mode.png" width="180px"></picture></a></p>`
const logoZenlogin = `<p align="center"><a href="https://zenlogin.co?ref=dev_resources&utm_medium=repo_readme"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/zenlogin.svg" width="210px"><source media="(prefers-color-scheme: light)" srcset="./assets/zenlogin.svg" width="210px"><img alt="Zenlogin logo" src="./assets/zenlogin.svg" width="210px"></picture></a></p>`

// const sponsors = `<div align="center">Sponsored by</div><br/>\n\n${logoGcore}<br/>\n\n`
const sponsors = `<div align="center">Sponsored by</div><br/>\n\n${logoGcore}<br/>\n\n\n\n${logoZenlogin}\n\n`

const warning =
    '---\n>❗️ This `README.md` file and the `/db` folder are auto-generated, so please ***do not*** edit them. Changes related to resources should happen within the `/resources` folder.\n---\n\n'

const publicApisLink = `Looking for public APIs? Visit [github.com/marcelscruz/public-apis](https://github.com/marcelscruz/public-apis).\n\n`

async function updateReadme() {
    try {
        const resourcesTree = createTree(resourcesList)
        const index = createIndex(resourcesTree)
        const tables = createTables(resourcesTree)

        await writeToFile({
            data: `${header} <br/> ${links} <br/> ${sponsors} ${warning} <br/> ${publicApisLink} ${index} ${tables}`,
            filePath: './README.md',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateReadme()
