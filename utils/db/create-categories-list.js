const normalize = require('../../utils/normalize-strings')

module.exports = function (resourcesList) {
    const categoriesList = []

    resourcesList.forEach((resource) => {
        const resourceCategories = resource.categories || []

        resourceCategories.forEach((category) => {
            categoriesList.push(normalize.url(category))
        })
    })

    return [...new Set(categoriesList)]
}
