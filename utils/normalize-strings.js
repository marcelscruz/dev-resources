// Removes all "combining diacritical marks", i.e. 'résumé' > 'resume'
const deburr = require('lodash.deburr')

module.exports = {
    slug: (string) => {
        return deburr(string)
            .trim()
            .toLowerCase()
            .replace(/&/g, '-')
            .replace(/[^A-Z0-9/]+/gi, '-')
            .replace(/\s/g, '-')
    },
    url: (string) => {
        return deburr(string)
            .trim()
            .toLowerCase()
            .replace(/&/g, '-')
            .replace(/\//g, '-')
            .replace(/[^A-Z0-9/]+/gi, '-')
            .replace(/\s/g, '-')
    },
}
