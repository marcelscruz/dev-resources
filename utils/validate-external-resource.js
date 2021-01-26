const categories = require('../constants/categories')
const normalize = require('./normalize-strings')

const { toolsAndUtilities } = categories

module.exports = {
    isPublicApis: (value) => value === normalize.url(toolsAndUtilities.publicApis),
}
