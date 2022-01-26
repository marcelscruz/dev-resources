const resourcesList = require('../../db/resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const url = 'https://devresourc.es/?ref=github-readme'

const logo = `<a href="${url}"><p align="center"><img width="5000" src="./public/assets/images/logo-with-bg.png" /></p></a>\n\n`

const warning =
    '---\n>❗️ This README file is auto-generated on every **push** or **merge**, so please ***do not*** edit it. Changes related to resources should happen within the `/resources` folder.\n---\n\n'

const description = `The resources list that powers [Dev Resources](${url}).\n\n`

const contributionGuide = 'For information on contributing, please see the [contributing guide](CONTRIBUTING.md).\n\n'

const discordLink = 'Join us on [Discord](https://discord.gg/SHw6TmXreR).\n\n'

const resourcesCount = `### Total resources: ${resourcesList.length}\n\n`

async function updateReadme() {
    try {
        const resourcesTree = createTree(resourcesList)
        const index = createIndex(resourcesTree)
        const tables = createTables(resourcesTree)

        await writeToFile({
            data: `${logo} ${warning} ${description} ${contributionGuide} ${discordLink} ${resourcesCount} ${index} ${tables}`,
            filePath: './README.md',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateReadme()
