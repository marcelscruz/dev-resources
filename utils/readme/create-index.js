const validateExternalResources = require('../validate-external-resource')

const { isPublicApis } = validateExternalResources

function createLinks(nodes) {
    if (nodes.children.length === 0) {
        const { name, id } = nodes

        let credit = ''

        if (isPublicApis(id)) {
            credit = ` - Powered by [Public APIs](https://github.com/public-apis/public-apis)`
        }

        return `<li id="${id}">${name}${credit}</li>`
    } else {
        const { name, id } = nodes

        const children = nodes.children.map(createLinks).join('')

        return `<details><summary id="${id}">${name}</summary><ul>${children}</ul></details>`
    }
}

module.exports = function (resources) {
    const links = resources.map(createLinks).join('')

    return `## Index\n${links}`
}
