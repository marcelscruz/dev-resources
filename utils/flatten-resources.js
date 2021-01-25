module.exports = function (files) {
    const flattenedResources = []

    files.forEach(file => {
        const content = require(`../resources/${file}`)

        flattenedResources.push(...content)
    })

    flattenedResources.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

    return flattenedResources
}
