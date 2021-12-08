const normalize = require('../../utils/normalize-strings')

module.exports = function (resourcesList) {
    const resourcesByCategory = {}

    resourcesList.forEach((resource) => {
        const resourceCategories = resource.categories || []

        resourceCategories.forEach((category) => {
            const normalizedCategoryName = normalize.toCategorySlug(category)

            if (resourcesByCategory[normalizedCategoryName]) {
                resourcesByCategory[normalizedCategoryName].push(resource)
            } else {
                resourcesByCategory[normalizedCategoryName] = [resource]
            }
        })
    })

    return resourcesByCategory
}
