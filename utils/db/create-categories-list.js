const normalize = require('../../utils/normalize-strings')

module.exports = function (resourcesList) {
    const categories = []

    resourcesList.forEach((resource) => {
        resource.categories.forEach((category) => {
            categories.push(normalize.url(category))
        })
    })

    return [...new Set(categories)]
}
