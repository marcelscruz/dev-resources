const { toolsAndUtilities } = require('../constants/categories')
const categories = require('../constants/categories')
const links = require('../constants/links')

const { assets, infrastructure, programming } = categories
const { website, twitter, spotify, npm, linkedin, facebook, applePodcasts } = links

module.exports = [
    {
        name: '1001 Fonts',
        categories: [assets.fonts],
        description:
            '24,262 free fonts in 13,112 families · Free licenses for commercial use · Direct font downloads · Mac · Windows · Linux.',
        url: 'https://www.1001fonts.com/',
        icon: 'https://themes.static.1001fonts.net/netefx/img/1001fonts-avatar-32x32.png',
    },
    {
        name: '18F Accessibility Guide',
        categories: [toolsAndUtilities.accessibility],
        description: 'A simple checklist for determining if your site is accessible.',
        url: 'https://accessibility.18f.gov/checklist/',
        icon: 'https://accessibility.18f.gov/checklist/favicon.ico',
    },
    {
        name: '30 seconds of code',
        description: 'Browse 1078 short code snippets for all your development needs on 30 seconds of code.',
        url: 'https://www.30secondsofcode.org/',
        icon: 'https://www.30secondsofcode.org/icons/icon-96x96.png?v=bd273ecf29b2666f8d7669cf855707df',
    },
    {
        name: '99designs',
        description:
            'The global creative platform for custom graphic design: logos, websites and more. Hire a talented designer or start a design contest. 500k+ happy customers have used 99designs to grow their business.',
        keywords: ['crowdsource', 'graphic design', 'design'],
        url: 'https://99designs.com/',
        icon: 'https://99designs.com/touch-icon-ipad.png',
    },
]
