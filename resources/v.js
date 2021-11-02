const { uiDesign, infrastructure, toolsAndUtilities, assets, jobs, programming } = require('../constants/categories')
const { website, github } = require('../constants/links')

module.exports = [
    {
        name: 'Vectr',
        categories: [uiDesign.prototyping],
        description:
            'Free vector graphics editor. A simple yet powerful web and desktop cross-platform tool for everyone.',
        links: {
            [website]: 'https://vectr.com/',
        },
        icon: 'https://vectr.com/images/temp-favicon.png',
    },
    {
        name: 'Vemto',
        categories: [programming.codeGenerators],
        description: 'Design and generate Laravel/PHP applications in minutes with this desktop tool',
        links: {
            [website]: 'https://vemto.app/',
        },
        icon: 'https://vemto.app/favicon.png',
    },
    {
        name: 'Vercel',
        categories: [infrastructure.hosting],
        description:
            'Deploy web projects with the best frontend developer experience and highest end-user performance.',
        links: {
            [website]: 'https://vercel.com/',
        },
        icon: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/76x76.png',
    },
    {
        name: 'Vim',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X.',
        keywords: ['Vim', 'Vi IMproved', 'text editor', 'home', 'documentation', 'tips', 'scripts', 'news'],
        links: {
            [website]: 'https://www.vim.org/',
        },
        icon: 'https://www.vim.org/images/vim_shortcut.ico',
    },
    {
        name: 'Vim Adventures',
        categories: [toolsAndUtilities.typing],
        description:
            'VIM Adventures is an online game based on VIM\'s keyboard shortcuts. It\'s the "Zelda meets text editing" game. So come have some fun and learn some VIM!',
        links: {
            [website]: 'https://vim-adventures.com/',
        },
        icon: 'https://vim-adventures.com/favicon.ico',
    },
    {
        name: 'Visiwig',
        categories: [assets.icons, assets.illustrations],
        description:
            'We provide visuals for busy designers. Visiwig is a place to find design inspiration, explore creative tools, and shop for timesaving graphics.',
        links: {
            [website]: 'https://www.visiwig.com/',
        },
        icon: 'https://www.visiwig.com/favicon-32x32.png',
    },
    {
        name: 'Visual Studio Code',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.  Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.',
        links: {
            [website]: 'https://code.visualstudio.com/',
        },
        icon: 'https://code.visualstudio.com/favicon.ico',
    },
    {
        name: 'VisualHunt',
        categories: [assets.images],
        description: 'Visually search the best products and ideas. Curated by experts, powered by community.',
        links: {
            [website]: 'https://visualhunt.com/',
        },
        icon: 'https://visualhunt.com/favicon.ico',
    },
    {
        name: 'Vue.js devtools',
        description: 'Browser devtools extension for debugging Vue.js applications',
        categories: [toolsAndUtilities.browsersAndExtensions],
        links: {
            [website]: 'https://devtools.vuejs.org/',
            [github]: 'https://github.com/vuejs/devtools',
        },
        icon: 'https://vuejs.org/images/icons/favicon-96x96.png',
        keywords: ['dev tools', 'Vue', 'debugging', 'extension', 'browser extension']
    },
    {
        name: 'VueJobs',
        categories: [jobs.boards],
        description:
            'Vue.js jobs is the best place to hire or get hired as Vue.js developer. Find Vue.js talent and reach to thousands of developers.',
        links: {
            [website]: 'https://vuejobs.com/',
        },
        icon: 'https://vuejobs.com/img/favicon/favicon-96x96.png',
    },
]
