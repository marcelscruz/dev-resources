const getResourcesList = require('../get-resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const resourcesList = getResourcesList()

const warning = `<!--🛑 👉 This README file and the /db folder are auto-generated, so please DON'T edit them. Changes related to resources should happen in the /resources folder. -->`

// const header = `<div align="center">
//     <div>
//         <p align="center"><a href="https://devresourc.es?ref=dr-pa&utm_medium=dev-resources-repo-readme"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/dev-resources.png" width="300px"><source media="(prefers-color-scheme: light)" srcset="./assets/scrapfly-light-mode.svg" width="300px"><img alt="Scrapfly logo" src="./assets/dev-resources.png" width="300px"></picture></a>
//         </p>
//         <p align="center"><a href="https://devresourc.es?ref=dr-pa&utm_medium=dev-resources-repo-readme">Dev Resources</a> — A collaborative list of resources for developers.</p>
//     </div>
// </div>`

const links = `<div align="center">
    <a href="API.md">API</a> •
    <a href="CONTRIBUTING.md">Contributing Guide</a> •
    <a href="https://github.com/marcelscruz/dev-resources/issues">Issues</a> •
    <a href="https://github.com/marcelscruz/dev-resources/pulls">Pull Requests</a> •
    <a href="LICENSE">License</a>
</div>`

const logoApyhub = `<div>
    <p align="center"><a href="https://apyhub.com?ref=dr-pa&utm_medium=dev-resources-repo-readme"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/apyhub-dark-mode.svg" width="150px"><source media="(prefers-color-scheme: light)" srcset="./assets/apyhub-light-mode.svg" width="150px"><img alt="ApyHub logo" src="./assets/apyhub-dark-mode.svg" width="150px"></picture></a></p>
    <p align="center"><a href="https://apyhub.com?ref=dr-pa&utm_medium=dev-resources-repo-readme">ApyHub</a>: A Modern API Platform to streamline API Development, Testing and Management. Take your API game to the next level with ApyHub.</p>
</div>`

const logoSerpApi = `<div>
    <p align="center"><a href="https://serpapi.com?ref=dr-pa&utm_medium=dev-resources-repo-readme"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/serpapi-dark-mode.svg" width="150px"><source media="(prefers-color-scheme: light)" srcset="./assets/serpapi-light-mode.svg" width="150px"><img alt="SerpApi logo" src="./assets/serpapi-dark-mode.svg" width="150px"></picture></a></p>
    <p align="center"><a href="https://serpapi.com?ref=dr-pa&utm_medium=dev-resources-repo-readme">SerpApi - Search API</a> makes it easy and fast to scrape Google and other search engines.</p>
</div>`

const logoRequestly = `<div>
    <p align="center"><a href="https://requestly.com?ref=dr-pa&utm_medium=dev-resources-repo-readme"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/requestly-dark-mode.png" width="160px"><source media="(prefers-color-scheme: light)" srcset="./assets/requestly-light-mode.png" width="160px"><img alt="Requestly logo" src="./assets/requestly-dark-mode.png" width="160px"></picture></a></p>
    <p align="center"><a href="https://requestly.com?ref=dr-pa&utm_medium=dev-resources-repo-readme">Requestly</a>: Build and test APIs faster. Lightweight Git-friendly API client built for modern developers.</p>
</div>`

const sponsors = `<div align="center">Sponsored by</div><br/>\n\n${logoApyhub}<br/>\n\n\n\n${logoSerpApi}<br/>\n\n\n\n${logoRequestly}<br/>\n\n\n\n`
// const sponsors = `<div align="center">Sponsored by</div>
//     <br/>
//     ${logoScrapfly}
// `

async function updateReadme() {
    try {
        const resourcesTree = createTree(resourcesList)
        const index = createIndex(resourcesTree)
        const tables = createTables(resourcesTree)

        await writeToFile({
            data: `${warning} \n\n ${sponsors} <br/><hr/><br/><br/> ${links} \n\n ${index} ${tables}`,
            filePath: './README.md',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateReadme()
