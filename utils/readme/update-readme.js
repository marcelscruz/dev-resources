const getResourcesList = require('../get-resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const resourcesList = getResourcesList()

const warning = `<!--🛑 👉 This README file and the /db folder are auto-generated, so please DON'T edit them. Changes related to resources should happen in the /resources folder. -->`

// const header = `<div align="center">
//     <div>
//         <p align="center"><a href="https://devresourc.es?ref=dev_resources&utm_medium=repo_readme"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/dev-resources.png" width="300px"><source media="(prefers-color-scheme: light)" srcset="./assets/scrapfly-light-mode.svg" width="300px"><img alt="Scrapfly logo" src="./assets/dev-resources.png" width="300px"></picture></a>
//         </p>
//         <p align="center"><a href="https://devresourc.es?ref=dev_resources&utm_medium=repo_readme">Dev Resources</a> — A collaborative list of resources for developers.</p>
//     </div>
// </div>`

const links = `<div align="center">
    <a href="API.md">API</a> •
    <a href="CONTRIBUTING.md">Contributing Guide</a> •
    <a href="https://github.com/marcelscruz/dev-resources/issues">Issues</a> •
    <a href="https://github.com/marcelscruz/dev-resources/pulls">Pull Requests</a> •
    <a href="LICENSE">License</a>
</div>`

const logoShipped = `<div>
    <p align="center"><a href="https://shipped.club?ref=dev_resources&utm_medium=repo_readme"><picture><img alt="Shipped.club logo" src="./assets/shipped.svg" width="220px"></picture></a></p>
    <p align="center"><a href="https://shipped.club?ref=dev_resources&utm_medium=repo_readme">Shipped.club</a> — The #1 Next.js SaaS Kit for busy founders. Build and ship your startup in days, not months, and make money online.</p>
</div>`

const logoScrapfly = `<div>
    <p align="center"><a href="https://scrapfly.io?ref=dev_resources&utm_medium=repo_readme"><picture><source media="(prefers-color-scheme: dark)" srcset="./assets/scrapfly-dark-mode.svg"         width="150px"><source media="(prefers-color-scheme: light)" srcset="./assets/scrapfly-light-mode.svg" width="150px"><img alt="Scrapfly logo" src="./assets/scrapfly-dark-mode.svg" width="150px"></picture></a></p>
    <p align="center"><a href="https://scrapfly.io?ref=dev_resources&utm_medium=repo_readme">Scrapfly</a> offers a top-tier Web Scraping API that simplifies scraping by handling real browser rendering, rotating proxies, and various fingerprints to overcome major anti-bot measures.</p>
</div>`

// const sponsors = `<div align="center">Sponsored by</div><br/>\n\n${logoScrapfly}<br/>\n\n`
// const sponsors = `<div align="center">Sponsored by</div><br/>\n\n${logoScrapfly}<br/>\n\n\n\n${logoZenlogin}\n\n`
const sponsors = `<div align="center">Sponsored by</div> 
    <br/>
    ${logoShipped}
    <br/>
    <hr/>
    <br/>
    ${logoScrapfly}
`

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
