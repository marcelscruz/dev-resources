const validateExternalResources = require('../validate-external-resource')

const { isPublicApis } = validateExternalResources

function createIndentation(depth) {
    return '  '.repeat(depth) || ''
}

function createLinks(nodes) {
    if (nodes.children.length === 0) {
        const { name, depth, id } = nodes

        let credit = ''

        if (isPublicApis(id)) {
            credit = ` - Powered by [Public APIs](https://github.com/public-apis/public-apis)`
        }

        return `\n<li id="${id}">${name}${credit}</li>`
        // return `\n${createIndentation(depth)}* [${name}](#${id})${credit}`
    } else {
        const { name, depth, id } = nodes

        const children = nodes.children.map(createLinks).join('')

        return `\n<details><br/><summary id="${id}">${name}</summary><br/><br/><ul>${children}</ul><br/></details>`

        // return `\n${createIndentation(depth)}* [${name}](#${id}) ${children}`
    }
}

module.exports = function (resources) {
    const links = resources.map(createLinks).join('')

    return `## Index\n${links}`
}
