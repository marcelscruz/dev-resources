const {
    community,
    indieHacking,
    programming,
    assets,
    uiDesign,
    toolsAndUtilities,
    jobs,
    infrastructure,
} = require('../constants/categories')
const { website, twitter, youtube, instagram, linkedin, github, codepen, facebook } = require('../constants/links')

module.exports = [
    {
        name: 'Madza Quizzes',
        categories: [jobs.interviews],
        description:
            'A great resource with 500 free interview questions',
        links: {
            [website]: 'https://quizzes.madza.dev/',
        },
        icon: 'https://quizzes.madza.dev/favicon.ico',
    },
    {
        name: 'Mailchimp',
        categories: [indieHacking.utilities],
        description:
            'Mailchimp helps small businesses do big things, with the right tools and guidance every step of the way.',
        links: {
            [website]: 'https://mailchimp.com/',
        },
        icon: 'https://mailchimp.com/release/plums/cxp/images/apple-touch-icon-192.ce8f3e6d.png',
    },
    {
        name: 'Majestic',
        categories: [programming.testing],
        description:
            '⚡ Zero config GUI for Jest. Contribute to Raathigesh/majestic development by creating an account on GitHub.',
        links: {
            [website]: 'https://github.com/Raathigesh/majestic',
        },
        icon: 'https://github.githubassets.com/favicons/favicon-dark.svg',
    },
    {
        name: "MAKE: Bootstrapper's Handbook",
        categories: [indieHacking.books],
        description: 'Learn to bootstrap profitable startups the indie way — $14.99.',
        links: {
            [website]: 'https://makebook.io/',
        },
        icon: 'https://makebook.io/favicon-32x32.png?2',
    },
    {
        name: 'ManyPixels',
        categories: [assets.illustrations],
        description:
            'Each week, discover royalty-free illustrations to power up your projects. Use them in a commercial or non-commercial way.',
        links: {
            [website]: 'https://www.manypixels.co/gallery/',
        },
        icon: 'https://www.manypixels.co/gallery/icons/icon-96x96.png?v=1e107cc4927fb83a24c4d7a99f010d8d',
    },
    {
        name: 'Marko Denic',
        categories: [community.personalWebsites],
        description: 'Web Developer, Public speaker, IT trainer and consultant.',
        links: {
            [website]: 'https://markodenic.com/',
            [twitter]: 'https://twitter.com/denicmarko',
            [youtube]: 'https://www.youtube.com/channel/UCRgyPAKycnp_kkpny_uZBcQ',
            [instagram]: 'https://www.instagram.com/markodenic1/',
            [linkedin]: 'https://www.linkedin.com/in/marko-denic-full-stack-developer/',
            [github]: 'https://github.com/markodenic',
            [codepen]: 'https://codepen.io/denic',
        },
        icon: 'https://markodenic.com/wp-content/themes/blog/favicon/favicon-32x32.png',
    },
    {
        name: 'Mastery Games',
        categories: [programming.learn],
        description:
            'Learn frontend development through play, repetition, and sleep. Each game builds up your skills from the ground up using the educational process of scaffolding. You learn one new concept at a time, and leverage spaced repetition to solidify each concept.',
        links: {
            [website]: 'https://mastery.games/',
        },
        icon: 'https://mastery.games/favicon.ico?v=2.3',
    },
    {
        name: 'Material Design',
        categories: [programming.uiKitsAndLibraries],
        description:
            'Build beautiful, usable products faster. Material Design is an adaptable system—backed by open-source code—that helps teams build high quality digital experiences.',
        links: {
            [website]: 'https://material.io/',
        },
        icon: 'https://material.io/static/assets/favicon.ico',
    },
    {
        name: 'Material Design',
        categories: [assets.icons],
        description: 'Get Material Icons.',
        links: {
            [website]: 'https://material.io/resources/icons',
        },
        icon: 'https://material.io/favicon.ico',
    },
    {
        name: 'Material Design Palette',
        categories: [uiDesign.color],
        description: 'Choose your favorite colors and get your Material Design palette generated and downloadable.',
        links: {
            [website]: 'https://www.materialpalette.com/',
        },
        icon:
            'https://www.materialpalette.com/assets/favicon-0f3eb1b9f6d525e848b1dca6db1cabd2a3e9e843749cb9ad72222b80ab9fdf19.ico',
    },
    {
        name: 'Material-UI',
        categories: [programming.uiKitsAndLibraries],
        description:
            'React components for faster and easier web development. Build your own design system, or start with Material Design.',
        links: {
            [website]: 'https://material-ui.com/',
        },
        icon: 'https://material-ui.com/static/icons/180x180.png',
    },
    {
        name: 'Materialize',
        categories: [programming.uiKitsAndLibraries],
        description: 'Materialize is a modern responsive CSS framework based on Material Design by Google.',
        links: {
            [website]: 'https://materializecss.com/',
        },
        icon: 'https://materializecss.com/images/favicon/favicon-32x32.png',
    },
    {
        name: 'Matomo',
        categories: [toolsAndUtilities.analytics],
        description:
            "Matomo's the Google Analytics alternative that protects your data and your customer's privacy. A powerful web analytics platform with 100% data ownership.",
        links: {
            [website]: 'https://matomo.org/',
        },
        icon:
            'https://img.matomo.org/spai/q_lossless+ret_img/https://static.matomo.org/wp-content/uploads/2018/11/cropped-DefaultIcon-32x32.png',
    },
    {
        name: 'MDN Web Docs',
        categories: [programming.docsAndCheatsheets],
        description:
            'The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps. It also has some developer-oriented documentation for Mozilla products, such as Firefox Developer Tools.',
        links: {
            [website]: 'https://developer.mozilla.org/en-US/',
        },
        icon: 'https://developer.mozilla.org/static/img/favicon72.cc65d1d762a0.png',
    },
    {
        name: 'Medium',
        categories: [community.blogsAndForums],
        description:
            'Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.',
        links: {
            [website]: 'http://medium.com/',
        },
        icon: 'https://miro.medium.com/fit/c/76/76/1*sHhtYhaCe2Uc3IU0IgKwIQ.png',
    },
    {
        name: 'Metaverse Jobs',
        categories: [jobs.boards],
        description:
            'Search for metaverse jobs in augmented reality, virtual reality, NFT, crypto, gaming, and more.',
        links: {
            [website]: 'https://www.themetaversejobs.com/',
        },
        icon: 'https://global-uploads.webflow.com/6138f6cb1bda9ece7529a20b/6150c7d3934a945f2b4d11e7_Copy%20of%20The%20Metaverse%20Jobs.png',
    },
    {
        name: 'Metazord',
        categories: [toolsAndUtilities.seo],
        description:
            'Get a complete information and preview of your site meta tags',
        links: {
            [website]: 'https://www.metazord.io/',
        },
        icon: 'https://www.metazord.io/favicon-32x32.png',
    },
    {
        name: 'Metrical',
        categories: [toolsAndUtilities.analytics],
        description:
            "Metrical is web analytics tool that is easy to use, privacy oriented and where you don't have to have a marketing degree to know how to use it.",
        links: {
            [website]: 'https://metrical.xyz/',
        },
        icon: 'https://metrical.xyz/icons/icon-96x96.png?v=783621c4a822f77387baf5d580f65aeb',
    },
    {
        name: 'MicroAcquire',
        categories: [indieHacking.utilities],
        description:
            'MicroAcquire helps startups find buyers. Simple as that. We’ll help you start conversations that lead to an acquisition in just 30 days – for free.',
        links: {
            [website]: 'https://microacquire.com/',
            [twitter]: 'https://twitter.com/microacquire',
            [linkedin]: 'https://www.linkedin.com/company/microacquire/about',
            [facebook]: 'https://facebook.com/microacquire',
        },
        icon: 'https://microacquire.com/assets/img/favicon-32x32.png',
    },
    {
        name: 'Microsoft SQL Server',
        categories: [infrastructure.databases],
        description:
            'Get the flexibility you need to use integrated solutions, apps, and innovations in technology with your data—wherever it lives — in the cloud, on-premises, or at the edge.',
        links: {
            [website]: 'https://www.microsoft.com/en-us/sql-server',
        },
        icon: 'https://www.microsoft.com/favicon.ico',
    },
    {
        name: 'MIT OpenCourseWare',
        categories: [programming.youtubeChannels],
        description:
            'Whether you’re a student, a teacher, or simply a curious person that wants to learn, MIT OpenCourseWare (OCW) offers a wealth of insight and inspiration. There are videos, and a whole lot more!',
        keywords: ['MIT OpenCourseWare Free Courses Computer Science Academics Univesity Courses'],
        links: {
            [website]: 'https://ocw.mit.edu',
            [youtube]: 'https://www.youtube.com/user/mit',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Mobbin',
        categories: [uiDesign.inspiration],
        description:
            'Check out the hand-picked collection of latest mobile design patterns from apps that reflect the best in design.',
        keywords: [
            'apps',
            'mobbin',
            'ios',
            'ios ui inspiration',
            'ios11',
            'iphone',
            'iphone X',
            'ui',
            'design',
            'retina',
            'screenshots',
            'inspiration',
            'mobile',
            'ipad',
            'android',
            'apple watch',
            'visual design',
            'patterns',
            'resources',
            'framerjs',
            'swift',
            'sketch',
            'framer',
            'invision',
            'photoshop',
            'xcode',
            'resources',
        ],
        links: {
            [website]: 'https://mobbin.design/',
        },
        icon: 'https://mobbin.design/favicon-152.png',
    },
    {
        name: 'Mobirise',
        categories: [programming.templates],
        description:
            'Drag and drop website builder. Create awesome responsive websites. Easy & fast - No coding! 2500+ Templates. Free for commercial use.',
        links: {
            [website]: 'https://mobirise.com/',
        },
        icon: 'https://mobirise.com/assets5/images/logo.png',
    },
    {
        name: 'Mocha',
        categories: [programming.testing],
        description: ' Simple, flexible, fun JavaScript test framework for Node.js and the browser.',
        links: {
            [website]: 'https://mochajs.org/',
        },
        icon: 'https://mochajs.org/static/favicon.copy.f17f048f84.ico',
    },
    {
        name: 'Modern Web',
        categories: [programming.podcasts],
        description:
            'We host podcasts and events in Raleigh and the Bay Area on various topics across the web platform. Learn from others building modern web applications.',
        links: {
            [website]: 'https://www.thisdot.co/modern-web',
        },
        icon: 'https://uploads-ssl.webflow.com/5a9e6c4d3dd0520001f5b761/5ab8c9dfe92abfbae46d72b8_256%20original.png',
    },
    {
        name: 'MongoDB',
        categories: [infrastructure.databases],
        description:
            'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
        links: {
            [website]: 'https://www.mongodb.com/',
        },
        icon: 'https://www.mongodb.com/assets/images/global/favicon.ico',
    },
    {
        name: 'Monkeytype',
        description: 'A minimalistic, customisable typing website. Test yourself in various modes, track your progress and improve your typing speed.',
        categories: [toolsAndUtilities.typing],
        links: {
            [website]: 'https://monkeytype.com/',
        },
        icon: 'https://monkeytype.com/images/favicon/apple-touch-icon-120x120.png',
        keywords: ['typing speed test', 'typing speedtest', 'typing test', 'speetest', 'speed test', 'typing', 'test', 'typing-test', 'typing test', 'monkey-type', 'monkeytype', 'monkey type', 'monkey-types', 'minimalist typing website', 'minimalist typing test', 'minimalistic typing website', 'words per minute'],
    },
    {
        name: 'Moqups',
        categories: [uiDesign.prototyping],
        description:
            'Moqups is a streamlined and intuitive web app that helps you create and collaborate on wireframes, mockups, diagrams and prototypes — for any type of project.',
        links: {
            [website]: 'https://moqups.com/',
        },
        icon: 'https://moqups.com/favicon.png',
    },
    {
        name: 'morris.js',
        categories: [programming.charts],
        description:
            "Morris.js is the library that powers the graphs on http://howmanyleft.co.uk/. It's a very simple API for drawing line, bar, area and donut charts.",
        links: {
            [website]: 'https://morrisjs.github.io/morris.js/',
        },
        icon: 'https://morrisjs.github.io/morris.js/favicon.ico',
    },
    {
        name: 'Mouad Essalim',
        categories: [community.personalWebsites],
        description:
            'Site Personnel de Mouad Essalim ! - WorkSpace - Publication de mes application réalisé avec Python, Compilation avec Cx_Freeze et Pyinstaller',
        links: {
            [website]: 'https://mouadessalim.xyz/',
        },
        icon: 'https://mouadessalim.xyz/wp-content/uploads/fbrfg/favicon-32x32.png',
    },
    {
        name: 'MyPerfectResume',
        categories: [jobs.resumeBuilders],
        description:
            "Create a perfect resume in just minutes and land the job you deserve. It's fast and easy. Pick a template, customize and download it. Try it now.",
        links: {
            [website]: 'https://www.myperfectresume.com/',
        },
        icon: 'https://www.myperfectresume.com/wp-content/uploads/2018/07/touch-icon-ipad.png',
    },
    {
        name: 'MySQL',
        categories: [infrastructure.databases],
        description: 'MySQL Database Service is a fully managed database service to deploy cloud-native applications.',
        links: {
            [website]: 'https://www.mysql.com/',
        },
        icon: 'https://labs.mysql.com/common/themes/sakila/favicon.ico',
    },
]
