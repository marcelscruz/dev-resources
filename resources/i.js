const { assets, toolsAndUtilities, jobs, indieHacking, programming } = require('../constants/categories')
const {
    website,
    spotify,
    applePodcasts,
    googlePodcasts,
    youtube,
    facebook,
    slack,
    indieHackers,
    twitter,
} = require('../constants/links')

module.exports = [
    {
        name: 'Icon Horse',
        categories: [assets.icons],
        description:
            'Free, easy to use, highest resolution possible favicons for any web site – including fallbacks if none are found.',
        keywords: ['favicons', 'logo icons', 'web icons', 'logos', 'site logos'],
        links: {
            [website]: 'https://icon.horse',
            [twitter]: 'https://twitter.com/iconhorse',
        },
        icon: 'https://icon.horse/icon/icon.horse',
    },
    {
        name: 'iconmonstr',
        categories: [assets.icons],
        description: 'Free simple icons for your next project.',
        links: {
            [website]: 'https://iconmonstr.com',
        },
        icon: 'https://cdns.iconmonstr.com/wp-content/themes/iconmonstr/assets/ico/2.0.0/favicon.ico',
    },
    {
        name: 'Icons8',
        categories: [assets.icons, assets.illustrations, assets.images, assets.audio],
        description:
            'Download design elements for free: icons, photos, vector illustrations, and music for your videos.',
        links: {
            [website]: 'https://icons8.com',
        },
        icon: 'https://logos-download.com/wp-content/uploads/2020/06/Icons8_Logo.png',
    },
    {
        name: 'Iconscout',
        categories: [assets.icons],
        description:
            'Pixel-perfect vector icons and Icon Fonts available in Line, Monochrome, and Solid style for your next project.',
        links: {
            [website]: 'https://iconscout.com/unicons',
        },
        icon: 'https://iconscout.com/favicon-96x96.png',
    },
    {
        name: 'Iconshock',
        categories: [assets.icons],
        description:
            'Free icons and premium icon packs.  Flat icons, Material icons, Glyph icons, iOS icons, Font icons, and more design styles. Vector files, including PNG and SVG icons. Ready for apps, web or social media projects.',
        keywords: [
            'web icons',
            'web icon set',
            'web icon',
            'professional icons',
            'software  web icons',
            'web icons vista',
            'xp web icons',
            'windows vista icons',
            'windows icons',
            'vector icons',
            'vector web icons',
            'application icons',
            'java web icons',
            'video icons',
            'business icons',
            'multimedia icons',
            'accounting icons',
            'web icon packs',
            'web icone',
        ],
        links: {
            [website]: 'https://www.iconshock.com/',
        },
        icon: 'https://www.iconshock.com/img/favicon.ico',
    },
    {
        name: 'IconSweets',
        categories: [assets.icons],
        description:
            'IconSweets is a huge set containing over 1,000 custom designed icons. IconSweets 2 will quench your icon thirst for all your iPhone, iPad & Android apps or new web projects.',
        links: {
            [website]: 'https://www.designbombs.com/iconsweets2/',
        },
        icon: 'https://www.designbombs.com/iconsweets2/favicon-96x96.png',
    },
    {
        name: 'Icônes',
        categories: [assets.icons],
        description: 'Icon Explorer with Instant searching, powered by Iconify',
        links: {
            [website]: 'https://icones.netlify.app/',
        },
        icon: 'https://icones.netlify.app/favicon.svg',
    },
    {
        name: 'Image Optimizer',
        categories: [assets.images],
        description: 'Compress and resize photos.',
        links: {
            [website]: 'http://www.imageoptimizer.net/',
        },
        icon: 'data:image/x-icon;,',
    },
    {
        name: 'Inclusive Components',
        categories: [toolsAndUtilities.accessibility],
        description:
            'A blog trying to be a pattern library. All about designing inclusive web interfaces, piece by piece.',
        links: {
            [website]: 'https://inclusive-components.design/',
        },
        icon: 'https://inclusive-components.design/favicon.ico',
    },
    {
        name: 'Indeed',
        categories: [jobs.resumeBuilders],
        description: 'Build and upload your resume to Indeed and let your next job find you.',
        links: {
            [website]: 'https://www.indeed.com/create-resume',
        },
        icon: 'https://www.indeed.com/profile/gatsby-assets/icons/icon-96x96.png?v=d69338e3b43810840b9a84d69dbaa30e',
    },
    {
        name: 'Indie Bits',
        categories: [indieHacking.podcasts],
        description:
            "Short, bite-sized conversations (15 mins) with indie hackers that have started small, profitable and bootstrapped businesses. You'll learn how they come up with ideas, what they do to validate, find those first customers and make a sustainable income.",
        links: {
            [website]: 'https://indiebites.co/',
            [spotify]: 'https://open.spotify.com/show/1MY9XdVViRwfaO8giM4fXO',
            [applePodcasts]: 'https://podcasts.apple.com/gb/podcast/indie-bites/id1530577069',
            [googlePodcasts]: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy50cmFuc2lzdG9yLmZtL2luZGllLWJpdGVz',
        },
        icon: 'https://s3.amazonaws.com/super-notion/images/26707ca1-dc44-44e8-90ce-9e6220840f71.png',
    },
    {
        name: 'Indie Drops',
        categories: [indieHacking.utilities],
        description: 'Secure unbelivably good deals on early-stage products before they take off.',
        links: {
            [website]: 'http://indiedrops.com/',
        },
        icon: 'http://indiedrops.com/apple-touch-icon.png',
    },
    {
        name: 'Indie Hackers',
        categories: [indieHacking.platforms, indieHacking.podcasts],
        description:
            'Connect with developers who are sharing the strategies and revenue numbers behind their companies and side projects.',
        links: {
            [website]: 'https://www.indiehackers.com/',
        },
        icon: 'https://www.indiehackers.com/images/favicons/favicon--32x32.png',
    },
    {
        name: 'Indie Worldwide',
        categories: [indieHacking.platforms],
        description: 'The worldwide virtual meetup of indie hackers, founders, and makers.',
        links: {
            [website]: 'https://indieworldwide.co/',
            [youtube]: 'https://www.youtube.com/channel/UCMps9pFrqetqXMCEZqkiQ-g/',
            [facebook]: 'https://www.facebook.com/groups/indie.worldwide/',
            [slack]:
                'https://join.slack.com/t/indieworldwide/shared_invite/enQtNzYzNTUwMjc2ODgyLTBjNTRiMmMwYWQ2MmQ5OGYyNTk2OWIwN2Q1OTcyOGJjM2M3MzEwYjc5OThjNTlmMWZhNTU0NDAyYjRkNDQ0Zjk',
            [indieHackers]: 'https://www.indiehackers.com/product/worldwide',
        },
        icon: 'https://indieworldwide.co/icons/icon-96x96.png',
    },
    {
        name: 'Insomnia',
        categories: [toolsAndUtilities.apiBuilding],
        description: 'Design & Debug APIs like a human, not a robot.',
        links: {
            [website]: 'https://insomnia.rest/',
        },
        icon: 'https://insomnia.rest/icons/icon-96x96.png?v=b68a1a35ee1565b759a2d4edb26074be',
    },
    {
        name: 'IntelliJ IDEA',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description: 'A Capable and Ergonomic Java IDE for Enterprise Java, Scala, Kotlin and much more...',
        links: {
            [website]: 'https://www.jetbrains.com/idea/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Interfacer',
        categories: [assets.illustrations],
        description: 'Interfacer is a collection of 300+ free design resources found on the Web.',
        keywords: [
            'design resources',
            'web design',
            'freedesignresources',
            'free design resources',
            'fonts',
            'free illustration',
            'freebies',
            'freebie illustration',
            'UI kits',
            'design kit',
            'Illustrations',
            'free fonts',
            'free Illustrations',
            'free mockups',
            'free icons',
            'Interfacer',
            'Interfacer list',
            'Interfacer design resource',
            'Interfacer resources',
            'Interfacer design resources',
        ],
        links: {
            [website]: 'https://interfacer.xyz/',
        },
        icon: 'https://interfacer.xyz/assets/site_assets/interfacelogo-icon.png',
    },
    {
        name: 'IntersectionObserver Examples',
        description: 'Practical, real world React examples of Intersection Observer',
        categories: [
            programming.codeSnippets,
            programming.docsAndCheatsheets,
            programming.javascript.react,
            programming.learn,
        ],
        keywords: [
            'IntersectionObserver',
            'IntersectionObserver API',
            'IntersectionObserver examples',
            'React',
            'React IntersectionObserver',
        ],
        links: {
            [website]: 'https://intersectionobserver.io',
        },
        icon: 'https://intersectionobserver.io/favicon.png',
    },
    {
        name: 'iOS Dev Jobs',
        categories: [jobs.boards],
        description:
            'Browse the very best iOS development jobs available, or sign up and get a weekly digest delivered by email every Monday.',
        links: {
            [website]: 'https://iosdevjobs.com/',
        },
        icon: 'https://iosdevjobs.com/wp-content/uploads/2019/01/cropped-favicon-32x32.png',
    },
    {
        name: 'IRA Design',
        categories: [assets.illustrations],
        description: 'Open-source illustrations that fits perfectly for any project you desire.',
        keywords: [
            'illustration',
            'app',
            'website illustration',
            'app illustration',
            'design component',
            'custom illustration',
            'illustration component',
            'color gradient',
            'gradients',
            'gallery',
            'best illustrations',
            'colorful illustrations',
        ],
        links: {
            [website]: 'https://iradesign.io/gallery/illustrations',
        },
        icon: 'https://iradesign.io/assets/img/favicon.png',
    },
    {
        name: 'Isometriclove',
        description: 'Cute isometric objects for your design.',
        categories: [assets.illustrations],
        links: {
            [website]: 'https://isometriclove.com/',
        },
        icon: 'https://isometriclove.com/favicon.ico',
    },
]
