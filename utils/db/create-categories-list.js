const normalize = require('../../utils/normalize-strings')

module.exports = function (resourcesList) {
    const categoriesList = []

    resourcesList.forEach((resource) => {
        const resourceCategories = resource.categories || []

        resourceCategories.forEach((category) => {
            categoriesList.push(normalize.url(category))
        })
    })

    categoriesList.sort((a, b) => (a > b ? 1 : -1))

    return [...new Set(categoriesList)]
}
