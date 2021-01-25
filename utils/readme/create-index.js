function createIndentation(depth) {
    return '  '.repeat(depth) || ''
}

function createLinks(nodes) {
    if (nodes.children.length === 0) {
        const { name, depth, id } = nodes

        return `\n${createIndentation(depth)}* [${name}](#${id})`
    } else {
        const { name, depth, id } = nodes

        const children = nodes.children.map(createLinks).join('')

        return `\n${createIndentation(depth)}* [${name}](#${id}) ${children}`
    }
}

module.exports = function (resources) {
    const links = resources.map(createLinks).join('')

    return `## Index\n${links}`
}
