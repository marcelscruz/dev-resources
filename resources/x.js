const { readingAndWriting, programming } = require('../constants/categories')
const { website } = require('../constants/links')

module.exports = [
    {
        name: 'XDA-Developers',
        categories: [readingAndWriting.platforms],
        description:
            'XDA Developers is a mobile software development community launched on 20 December 2002. Although discussion primarily revolves around Android, members also talk about many other operating systems and mobile development topics.',
        links: {
            [website]: 'https://www.xda-developers.com/',
        },
        icon: 'https://www.xda-developers.com/favicon-32x32.png',
    },
    {
        name: 'Xray',
        categories: [programming.testing],
        description:
            'The #1 Manual & Automated Testing App for Jira. Plan, Execute and Track your Quality Assurance with Requirements Traceability.',
        links: {
            [website]: 'https://www.getxray.app/',
        },
        icon: 'https://www.getxray.app/wp-content/themes/xpandit/dist/images/favicons/android-chrome-512x512.png',
    },
    {
        name: 'XServer',
        categories: [programming.databases],
        description: 'XServer - JSON-based backend for Mobile apps, Websites and Unity games.',
        keywords: [
            'iOS',
            'Android',
            'JavaScript',
            'apps',
            'backend',
            'mobile',
            'website',
            'baas',
            'parse',
            'firebase',
            'database',
            'json',
            'php',
            'javascript',
            'jquery',
        ],
        links: {
            [website]: 'https://xserver.app/',
        },
        icon: 'https://xserver.app/assets/img/favicon.png',
    },
    {
        name: 'XState Guide',
        categories: [programming.codeSnippets],
        description: 'Minimal code examples of XState concepts.',
        links: {
            [website]: 'https://bradwoods.io/guides/xstate',
        },
        icon: 'https://bradwoods.io/icons-ac8e8fb7acba0bf710955dec094dc16c/apple-touch-icon-76x76.png',
    },
]
