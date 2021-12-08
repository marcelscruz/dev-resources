const normalize = require('../../utils/normalize-strings')

module.exports = function (resourcesList) {
    const categoriesList = []

    resourcesList.forEach((resource) => {
        const resourceCategories = resource.categories || []

        resourceCategories.forEach((category) => {
            const isCategoryAdded = categoriesList.find((c) => c.name === category)

            if (!isCategoryAdded) {
                categoriesList.push({ name: category, slug: normalize.toCategorySlug(category) })
            }
        })
    })

    categoriesList.sort((a, b) => (a.slug > b.slug ? 1 : -1))

    return [...new Set(categoriesList)]
}
