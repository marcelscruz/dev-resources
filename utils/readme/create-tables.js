const normalize = require('../normalize-strings')
const truncate = require('../truncate')
const links = require('../../constants/links')

const { website } = links

const backToIndex = `\n**[⬆ Back to Index](#index)**`

// Outer anchor is used by the "🔗" icon beside each heading
// Inner anchor is used by the "Index" items
function createAnchor({ name, id }) {
    const normalizedName = normalize.toCategorySlug(name)

    if (normalizedName === id) {
        return `<a name="${id}">${name}</a>`
    } else {
        return `<a name="${normalizedName}"><a name="${id}">${name}</a></a>`
    }
}

function createLinks(links = {}) {
    return Object.entries(links)
        .sort((a, b) => {
            const nameA = a[0].toLowerCase()
            const nameB = b[0].toLowerCase()
            const lowerCaseWebsite = website.toLowerCase()

            if (nameA === nameB) return 0
            if (nameA === lowerCaseWebsite) return -1
            if (nameB === lowerCaseWebsite) return 1

            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0
        })
        .map(([name, url]) => `[${name}](${url})`)
}

function createRow(nodes) {
    if (nodes.children.length === 0) {
        const { name, data, id } = nodes
        const anchor = createAnchor({ name, id })

        if (name === 'Public APIs') {
            return `\n\n### ${anchor}\nThis section is powered by [Public APIs](https://github.com/public-apis/public-apis).`
        }

        const tableHeadings = `| &nbsp;&nbsp;&nbsp;&nbsp; | Name | Description | Links | Keywords |\n|---|---|---|---|---|`

        const heading = `\n\n### ${anchor}\n${tableHeadings}\n`
        let table = ``

        data.forEach((resource) => {
            const { name, description = '', links: resourceLinks, icon, keywords = [] } = resource

            const favicon = icon ? `<img src="${icon}" width="16" />` : '&nbsp;'
            const truncatedDescription = truncate({
                text: description,
                limit: 200,
            })
            const truncatedKeywords = truncate({
                text: keywords.join(', '),
            })
            const links = createLinks(resourceLinks).join('<br />')

            table += ` ${favicon} | ${name} | ${truncatedDescription} | ${links} | ${truncatedKeywords} |\n`
        })

        return `${heading}${table}${backToIndex}`
    } else {
        const { name, id } = nodes
        const anchor = createAnchor({ name, id })

        const table = nodes.children.map(createRow).join('')

        return `\n## ${anchor} ${table}`
    }
}

module.exports = function (resources) {
    const tables = resources.map(createRow).join('')

    return `\n\n${tables}`
}
