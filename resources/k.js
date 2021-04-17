const { programming, toolsAndUtilities, community } = require('../constants/categories')
const { website, youtube, twitch, twitter, codepen, discord, github } = require('../constants/links')

module.exports = [
    {
        name: 'Kent C. Dodds',
        categories: [programming.youtubeChannels],
        description: "Hi, I'm Kent C. Dodds. I help people make the world better through quality software.",
        keywords: ['JavaScript Programming'],
        links: {
            [youtube]: 'https://www.youtube.com/user/kentdoddsfamily',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Kevin Powell',
        categories: [programming.youtubeChannels, community.personalWebsites],
        description:
            "Helping you learn how to make the web, and make it look good while you're at it. With videos every Tuesday and Thursday, I'll be bringing you How Tos and Tutorials, as well as simple tips and tricks, with a big focus on helping people see how wonderful CSS is!",
        links: {
            [website]: 'https://www.kevinpowell.co/',
            [youtube]: 'https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw',
            [twitch]: 'https://twitch.com/kevinpowellcss',
            [twitter]: 'https://twitter.com/kevinJPowell',
            [codepen]: 'https://codepen.io/kevinpowell/',
            [discord]: 'https://discord.gg/GaBdxcE',
            [github]: 'https://github.com/kevin-powell',
        },
        icon: 'https://www.kevinpowell.co/favicon.ico',
    },
    {
        name: 'Keybr',
        categories: [toolsAndUtilities.typing],
        description: 'Teaching the world to type at the speed of thought! Typing lessons that work.',
        links: {
            [website]: 'https://www.keybr.com/',
        },
        icon: 'https://www.keybr.com/assets/934c99d37fc250c3.png',
    },
    {
        name: 'keyframers',
        categories: [programming.youtubeChannels],
        description:
            'An animated, collaborative coding live stream by David Khourshid (@davidkpiano) & Stephen Shaw (@shshaw). We bring imaginative user interfaces to life every Monday @ 17:00 EST/21:00 GMT at https://twitch.tv/keyframers Support us at https://patreon.com/keyframers Find developer shirts, stickers & more at https://keyframe.rs/merch https://keyframe.rs.',
        keywords: ['code "live stream" css html javascript animation'],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCtmYk7H-NNYLEe_LgBRYomA',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Khan Academy',
        categories: [programming.learn],
        description:
            'Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more. Khan Academy is a nonprofit with the mission of providing a free, world-class education for anyone, anywhere.',
        links: {
            [website]: 'https://www.khanacademy.org/',
        },
        icon: 'https://cdn.kastatic.org/images/apple-touch-icon-72x72-precomposed.new.png',
    },
    {
        name: 'Kindmetrics',
        categories: [toolsAndUtilities.analytics],
        description:
            'Kindmetrics is a strictly privacy-focused website analytics tool to help you find referrers and measure good content quickly. A more excellent way to dig into your visitors without the visitors giving their data to big enterprises.',
        links: {
            [website]: 'https://kindmetrics.io/',
        },
        icon: 'https://kindmetrics.io/assets/images/favicon-96x96.png',
    },
    {
        name: 'Kite',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'Code faster with Kite’s AI-powered autocomplete plugin for over 16 programming languages and 16 IDEs, featuring Multi-Line Completions. Works 100% locally.',
        links: {
            [website]: 'https://www.kite.com/',
        },
        icon: 'https://www.kite.com/wp-content/themes/kite/favicon.ico',
    },
    {
        name: 'Kometa UI Kit',
        categories: [programming.uiKitsAndLibraries],
        description:
            'A marketplace of fully responsive, multi-purpose UI kits, built with Tailwind CSS, for start-ups and products of any kind.',
        links: {
            [website]: 'https://kitwind.io/products/kometa',
        },
        icon: 'https://kitwind.io/icons/icon-96x96.png',
    },
]
