const categories = require('../constants/categories')
const links = require('../constants/links')

const { assets, infrastructure, programming } = categories
const { main, npm } = links

module.exports = [
    {
        name: 'B Icons, Fonts and React',
        links: {
            [main]: 'https://1forge.com/forex-data-api/api-documentation',
            [npm]: 'https://test.com',
        },
        categories: [assets.icons, assets.fonts, programming.javascript.react],
    },
    {
        name: 'B Icons and Hosting',
        links: {
            [main]: 'https://1forge.com/forex-data-api/api-documentation',
            [npm]: 'https://test.com',
        },
        categories: [assets.icons, infrastructure.hosting],
    },
]
