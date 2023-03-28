function createLinks(nodes) {
    if (nodes.children.length === 0) {
        const { name, id } = nodes

        return `<li><a href="#${id}">${name}</a></li>`
    } else {
        const { name, id } = nodes

        const children = nodes.children.map(createLinks).join('')

        return `<details><summary id="${id}">${name}</summary>${children}</details>`
    }
}

module.exports = function (resources) {
    const links = resources.map(createLinks).join('')

    return `## Index\n${links}`
}
