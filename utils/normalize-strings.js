// Removes all "combining diacritical marks", i.e. 'résumé' > 'resume'
const deburr = require('lodash.deburr')

module.exports = {
    toCategorySlug: (string) => {
        return deburr(string)
            .trim()
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^A-Z0-9/]+/gi, '-')
            .replace(/\s/g, '-')
    },
}
