const fs = require('fs')
const path = require('path')
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

// Sponsors are DATA, not code: the dr-pa ops pipeline (sync-sponsor-perks)
// writes sponsors.json + the assets/ logo files; this template only renders
// them. Edit sponsors there, not here.
const sponsorsData = (() => {
    try {
        const list = JSON.parse(fs.readFileSync(path.join(__dirname, 'sponsors.json'), 'utf8'))
        return Array.isArray(list) ? list : []
    } catch {
        return []
    }
})()

// `lockup` sponsors uploaded an app icon rather than a horizontal wordmark, so
// the mark carries no name — the name is drawn beside it instead. GitHub strips
// inline style, so the whole layout rides attributes its sanitizer keeps:
// `absmiddle` is real vertical-align middle (plain `middle` is
// -webkit-baseline-middle, which pins the mark's middle to the text baseline
// and drops it 6px) and `hspace` is the gap. The line stays a <p>: a heading is
// the only surviving way to enlarge the name (style/font/big are all stripped),
// and it listed the sponsor at the top of GitHub's README outline panel.
// The name is PLAIN TEXT outside the anchor, never a link: inside it rendered in
// link blue, unlike every wordmark sponsor's mark. The logo keeps the click, and
// the caption line below already links the same name. No whitespace between the
// mark and the name either — the gap is hspace alone, so a space would double it.
const sponsorBlocks = sponsorsData.map((s) => {
    const picture = `<picture><source media="(prefers-color-scheme: dark)" srcset="./${s.logoDark}" width="${
        s.width
    }px"><source media="(prefers-color-scheme: light)" srcset="./${s.logoLight}" width="${s.width}px"><img alt="${
        s.name
    } logo" src="./${s.logoDark}" width="${s.width}px"${s.lockup ? ' align="absmiddle" hspace="8"' : ''}></picture>`
    return `<div>
    <p align="center"><a href="${s.link}">${picture}</a>${s.lockup ? `<b>${s.name}</b>` : ''}</p>
    <p align="center"><a href="${s.link}">${s.name}</a>${s.blurb ? ': ' + s.blurb : ''}</p>
</div>`
})

const sponsors = sponsorBlocks.length
    ? `<div align="center">Sponsored by</div><br/>\n\n${sponsorBlocks.join('<br/>\n\n\n\n')}<br/>\n\n\n\n`
    : ''

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
