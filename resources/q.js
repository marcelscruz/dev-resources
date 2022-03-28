const { toolsAndUtilities, infrastructure } = require('../constants/categories')
const { website, twitter, facebook, linkedin, github } = require('../constants/links')

module.exports = [
    {
        name: 'Qoddi.com',
        categories: [infrastructure.hosting, infrastructure.cloudComputing],
        description:
            'Hosting Qoddi.com is a PaaS service similar to Heroku with a developer-centric approach and a free tier for developers and micro-services.',
        links: {
            [website]: 'https://qoddi.com',
            [twitter]: 'https://twitter.com/qoddiapps',
            [facebook]: 'https://www.facebook.com/qoddiapps',
            [linkedin]: 'https://www.linkedin.com/company/qoddiapps/',
            [github]: 'https://github.com/qoddiapps',
        },
        icon: 'https://qoddi.com/assets/images/favicon.ico',
    },
    {
        name: 'Quokka',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description: 'Quokka.js: Introduction.',
        links: {
            [website]: 'https://quokkajs.com/docs/index.html',
        },
        icon: 'https://quokkajs.com/assets/img/favicon.ico?v=2',
    },
]
