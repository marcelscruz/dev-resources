const fs = require('fs')
const files = fs.readdirSync('./resources')

module.exports = function () {
    const flattenedResources = []

    files.forEach((file) => {
        const { resources } = require(`../resources/${file}`)

        flattenedResources.push(...resources)
    })

    flattenedResources.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

    return flattenedResources
}
