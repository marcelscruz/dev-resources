const fs = require('fs')
const files = fs.readdirSync('./resources')

module.exports = function () {
    const flattenedResources = []

    files.forEach((file) => {
        const content = require(`../resources/${file}`)

        flattenedResources.push(...content)
    })

    flattenedResources.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

    return flattenedResources
}
