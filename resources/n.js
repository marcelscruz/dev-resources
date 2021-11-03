const { programming, infrastructure, toolsAndUtilities, assets, jobs, uiDesign } = require('../constants/categories')
const { website } = require('../constants/links')

module.exports = [
    {
        name: 'n3-charts',
        categories: [programming.charts],
        description: 'Awesome charts for Angular.',
        links: {
            [website]: 'https://n3-charts.github.io/line-chart/#/home',
        },
        icon: 'https://n3-charts.github.io/line-chart/assets/favicons/favicon-96x96.png',
    },
    {
        name: 'Netlify',
        categories: [infrastructure.hosting],
        description:
            'Deploy modern static websites with Netlify. Get CDN, Continuous deployment, 1-click HTTPS, and all the services you need. Get started for free.',
        links: {
            [website]: 'https://www.netlify.com/',
        },
        icon: 'https://www.netlify.com/v3/static/favicon/favicon-32x32.png',
    },
    {
        name: 'Next.js',
        categories: [programming.javascript.react],
        description:
            'Production grade React applications that scale. The world’s leading companies use Next.js by Vercel to build static and dynamic websites and web applications.',
        links: {
            [website]: 'https://nextjs.org/',
        },
        icon: 'https://nextjs.org/static/favicon/favicon-32x32.png',
    },
    {
        name: 'NextUI',
        description: 'Beautiful, fast, modern React UI Library',
        categories: [programming.uiKitsAndLibraries],
        links: {
            [website]: 'https://nextui.org',
        },
        icon: 'https://nextui.org/favicon.ico',
        keywords: ['next', 'ui', 'nextui', 'library'],
    },
    {
        name: 'Nomad List',
        categories: [jobs.boards, jobs.remoteOnly],
        description: 'Best places to live for a digital nomad',
        links: {
            [website]: 'https://nomadlist.com/',
        },
        icon: 'https://nomadlist.com/assets/logo.svg',
    },
    {
        name: 'Nord',
        description: 'A arctic, north-bluish color palette',
        categories: [toolsAndUtilities.general, uiDesign.color],
        links: {
            [website]: 'https://www.nordtheme.com/',
        },
        icon: 'https://www.nordtheme.com/icons/icon-96x96.png?v=970545fb8e9518a3616ec74d00cfebc4',
        keywords: [
            'nord',
            'arctic',
            'north',
            'bluish',
            'clean',
            'minimal',
            'flat',
            'ui',
            'syntax',
            'website',
            'documentation',
            'react',
            'arcticicestudio',
        ],
    },
    {
        name: 'Notepad++',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'Notepad++ is a text and source code editor for use with Microsoft Windows. It supports tabbed editing, which allows working with multiple open files in a single window.',
        links: {
            [website]: 'https://notepad-plus-plus.org/',
        },
        icon: 'https://notepad-plus-plus.org/favicon.ico',
    },
    {
        name: 'Noun Project',
        categories: [assets.icons],
        description:
            'Noun Project features the most diverse collection of icons and stock photos ever. Download SVG and PNG. Browse over 3 million art-quality icons and photos.',
        links: {
            [website]: 'https://thenounproject.com/',
        },
        icon: 'https://static.production.thenounproject.com/img/favicons/favicon-32x32.015f779a87e7.png',
    },
    {
        name: 'Novorésumé',
        categories: [jobs.resumeBuilders],
        description:
            'Make a perfect resume in 2021 and get your dream job using the free resume builder. Select a template. Personalize it. Get more interviews.',
        keywords: ['professional resume builder'],
        links: {
            [website]: 'https://novoresume.com/',
        },
        icon: 'https://novoresume.com/images/favi.png',
    },
]
