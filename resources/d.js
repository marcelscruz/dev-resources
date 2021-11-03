const {
    programming,
    assets,
    jobs,
    uiDesign,
    toolsAndUtilities,
    indieHacking,
    infrastructure,
    community,
} = require('../constants/categories')
const { website, youtube, twitter, discord } = require('../constants/links')

module.exports = [
    {
        name: 'D3.js',
        categories: [programming.charts],
        description: 'D3 is a JavaScript library for visualizing data with HTML, SVG, and CSS.',
        keywords: ['d3', 'd3.js', 'visualization', 'dom', 'javascript'],
        links: {
            [website]: 'https://d3js.org/',
        },
        icon: 'https://d3js.org/favicon.png',
    },
    {
        name: 'DaFont',
        categories: [assets.fonts],
        description:
            'Archive of freely downloadable fonts. Browse by alphabetical listing, by style, by author or by popularity.',
        keywords: [
            'font',
            'download',
            'ttf',
            'freeware',
            'typefaces',
            'typography',
            'typeface',
            'fonts',
            'free',
            'true type',
            'dingbats',
        ],
        links: {
            [website]: 'https://www.dafont.com/',
        },
        icon: 'https://www.dafont.com/img/favicon.ico',
    },
    {
        name: 'daily.dev',
        categories: [community.blogsAndForums],
        description:
            'Daily.dev is the easiest way to stay updated on the latest programming news. Get the hottest dev news from the best tech blogs on any topic you can think of. Stay updated daily, and unlock more time to do fun stuff, relax, or just code.',
        links: {
            [website]: 'https://daily.dev/',
        },
        icon:
            'https://assets.website-files.com/5e0a5d9d743608d0f3ea6753/5f35091372cfa97ba7438461_daily.dev%20-%20Favicon%4030x.ico',
    },
    {
        name: 'DailyRemote',
        categories: [jobs.remoteOnly],
        description:
            'Find and apply for top remote jobs in Software Development, Design, Support, Sales, Writing, Product, and Others. Start telecommuting & working from home today!',
        links: {
            [website]: 'https://dailyremote.com/',
        },
        icon: 'https://dailyremote.com/assets/favicon/favicon-96.png',
    },
    {
        name: 'daisyUI',
        description: 'Tailwind CSS Components plugin — daisyUI tailwind component library',
        categories: [programming.uiKitsAndLibraries],
        links: {
            [website]: 'https://daisyui.com',
        },
        icon: 'https://daisyui.com/favicon.ico',
        keywords: ['daisy', 'ui', 'daisyui', 'library'],
    },
    {
        name: 'Dart Cheatsheet Codelab',
        categories: [programming.docsAndCheatsheets],
        description: "Interactively learn (or relearn) some of Dart's unique features.",
        links: {
            [website]: 'https://dart.dev/codelabs/dart-cheatsheet',
        },
        icon:
            'https://dart.dev/assets/touch-icon-ipad-d0181720760b3912858b6d40da1d5586b1e92c7c8656a485ea41005674401e6b.png',
    },
    {
        name: 'Data Viz Color Picker',
        categories: [uiDesign.color],
        description: 'A color palette generator for data visualizations.',
        links: {
            [website]: 'https://learnui.design/tools/data-color-picker.html',
        },
        icon: 'https://learnui.design/tools/favicon.ico',
    },
    {
        name: 'DataGrip',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description: 'A powerful IDE from JetBrains for SQL on macOS, Windows, and Linux.',
        links: {
            [website]: 'https://www.jetbrains.com/datagrip/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Decoded Frontend',
        description: 'Decoded Frontend is a source of advanced & pragmatic video tutorials about Angular, GraphQL and Web Development in particular. My name is Dmytro Mezhenskyi. I am an author of this channel and I have been a Frontend Developer since 2012. It means 9 Years... whoa... and I still enjoy it 😄 During my carrier I have worked with various projects which had different scale and complexity and now I realised that it is a time to share my knowledge with another developers around the globe. My channel has already helped developers to find answers on sophisticated Angular topics and I am sure you will be able to find something interesting for you as well. Subscribe to my channel, leave your feedbacks and become a better Developer 😉',
        categories: [programming.youtubeChannels],
        links: {
            [website]: 'https://www.youtube.com/c/DecodedFrontend/featured',
        },
        icon: 'https://www.youtube.com/s/desktop/b349a03a/img/favicon_96x96.png',
        keywords: ['Angular', 'GraphQL', 'Web Development', 'tutorials']
    },
    {
        name: 'Default Alive',
        categories: [indieHacking.podcasts],
        description:
            'Two founders share an unedited look at what it\'s like to bootstrap a startup through weekly updates. Chris Spags is the founder of Jetboost, a suite of no-code plugins for Webflow. Corey Haines is the founder of Swipe Files, a membership site for marketers built with no-code tools. They chronicle their journeys getting to and staying "default alive": profitable, self-sustaining, with infinite runway. – Listen to Default Alive instantly on your tablet, phone or browser - no downloads needed.',
        links: {
            [website]: 'https://podtail.com/en/podcast/default-alive/',
        },
        icon: 'https://podtail.com/favicon.ico',
    },
    {
        name: 'Delesign',
        categories: [assets.illustrations],
        description:
            "We've created a collection of free illustrations and more. Fully customizable and completely free illustrations that you can use for your business.",
        links: {
            [website]: 'https://delesign.com/free-designs/graphics.php',
        },
        icon: 'https://s3-us-west-1.amazonaws.com/files.delesign/www/images/32x32.png',
    },
    {
        name: 'DesignCourse',
        categories: [uiDesign.youtubeChannels],
        description:
            "New videos weekly from Monday to Thursday @ 10:30 AM ET! Hi, I'm Gary. I've created close to 100 courses from graphic design to advanced frontend development. I've worked with Envato Network's TutsPlus.com, DigitalTutors.com, Pluralsight.com, LinkedIn Learning & Lynda.com. I teach full stack development! Which means you will see tutorials regarding UI/UX, Frontend Dev, Backend Dev, Graphic Design and more! Interested in a sponsorship opportunity or review?  Contact me: contact@coursetro.com.",
        keywords: [
            '"web design" "logo design" "illustrator tutorials" "website design" free ui ux "user experience design" "ux design" "frontend development" "frontend developer"',
        ],
        links: {
            [youtube]: 'https://www.youtube.com/user/DesignCourse',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'DesignJoy',
        categories: [uiDesign.utilities],
        description: 'The #1 unlimited product design subscription service for agencies, startups, and entrepreneurs.',
        links: {
            [website]: 'https://www.designjoy.co/',
        },
        icon: 'https://uploads-ssl.webflow.com/5837424ae11409586f837994/5e2fb217d4837e75854462c9_Small.png',
    },
    {
        name: 'Design Modo',
        categories: [jobs.boards],
        description: 'Remote and full time jobs for web designers and developers.',
        links: {
            [website]: 'https://designmodo.com/jobs/',
        },
        icon: 'https://designmodo.com/wp-content/themes/designmodo/assets/favicon/apple-touch-icon-114x114.png',
    },
    {
        name: 'DEV',
        categories: [community.blogsAndForums],
        description:
            'A constructive and inclusive social network for software developers. With you every step of your journey.',
        keywords: ['software development', 'engineering', 'rails', 'javascript', 'ruby'],
        links: {
            [website]: 'https://dev.to/',
        },
        icon:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--t7tVouP9--/c_limit,f_png,fl_progressive,q_80,w_192/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png',
    },
    {
        name: 'Design Resources',
        categories: [uiDesign.utilities],
        description: 'A curated list of the best design resources handpicked from around the web.',
        links: {
            [website]: 'https://www.designresourc.es/',
        },
        icon: 'https://uploads-ssl.webflow.com/5e8b094d33bd3056d4901e70/5e946e20071f2f592ba85f7e_dr.png',
    },
    {
        name: 'Dev Ed',
        categories: [programming.youtubeChannels],
        description:
            'Learn web development, web design, 3d modelling, tools like figma and more without getting bored! The goes of this channel is to get you to become as creative you can be! So if you like to create video games in Unity or develop an application in node.js, stick around and have fun!',
        keywords: ['web development design javascript tutorials'],
        links: {
            [youtube]: 'https://www.youtube.com/c/DevEd/',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Developer tea',
        categories: [programming.podcasts],
        description: 'A podcast for developers designed to fit inside your tea break',
        links: {
            [website]: 'https://spec.fm/podcasts/developer-tea',
        },
        icon: 'https://spec.fm/static/meta/android-chrome-192x192.png',
    },
    {
        name: 'devChallenges',
        categories: [programming.learn, programming.codeChallenges],
        description:
            'devChallenges.io is a community and a platform for anyone who wants to become a Software Engineer by building real-life projects and solving practical tasks. devChallenges.io is built with the goal of enabling you to build an outstanding portfolio.',
        links: {
            [website]: 'https://devchallenges.io/',
            [twitter]: 'https://twitter.com/devchallengesio',
            [discord]: 'https://discord.com/invite/3R6vFeM',
        },
        icon: 'https://devchallenges.io/favicon-32x32.png',
    },
    {
        name: 'DevDocs',
        categories: [programming.docsAndCheatsheets],
        description:
            'Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app including HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++, and many more.',
        links: {
            [website]: 'https://devdocs.io',
        },
        icon: 'https://cdn.devdocs.io/images/apple-icon-76.png',
    },
    {
        name: 'Devhints',
        categories: [programming.docsAndCheatsheets],
        description: 'A ridiculous collection of web development cheatsheets · One-page guide to.',
        links: {
            [website]: 'https://devhints.io/',
        },
        icon: 'https://devhints.io/assets/favicon.png',
    },
    {
        name: 'DevNews',
        categories: [programming.podcasts],
        description:
            'DevNews is the news show for developers by developers, hosted by Saron Yitbarek, founder of CodeNewbie, and DEV senior engineers Josh Puetz and Vaidehi Joshi. Each season these experienced devs cover the latest in the world of tech, and speak with diverse guests from a variety of backgrounds to dig deep into meaty topics such as security, the pros and cons of outsourcing your authentication, and the latest bugs and hacks.',
        keywords: ['software development', 'engineering', 'rails', 'javascript', 'ruby'],
        links: {
            [website]: 'https://dev.to/devnews',
        },
        icon:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--t7tVouP9--/c_limit,f_png,fl_progressive,q_80,w_192/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png',
    },
    {
        name: 'DevSamples',
        categories: [programming.codeSnippets],
        description:
            'DevSamples is a list of code samples for you to copy and paste into your projects as needed. The primary focus is on web development, but there are samples from a variety of languages.',
        links: {
            [website]: 'http://www.devsamples.com/',
        },
        icon: 'http://www.devsamples.com/favicon.ico',
    },
    {
        name: 'DevTips',
        categories: [programming.youtubeChannels],
        description:
            "DevTips is slowly opening back up! We're excited to start working with a long-time community member, Jay of iEatWebsites, on bringing back top-tier, front-end development content with designers in mind to the subscribers. DevTips is a weekly show for YOU who want to be inspired 👍 and learn 🖖 about programming. Hosted by David and MPJ - two notorious bug generators 💖 and teachers 🤗. Exploring code together and learning programming along the way - yay! Everything you see and hear are the opinions and preferences of the individual who said them, and no one else's.",
        keywords: ['HTML CSS Javascript "Web Development" Coding Design'],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Dev Weekly',
        categories: [programming.newsletters],
        description:
            'A no nonsense newsletter delivered every Sunday with more than 50 resources ranging from mobile to web, UI/UX, Python, database, career, life, challenges and more without any ads or sponsors. It also features one creator per week!',
        keywords: [
            'web',
            'html',
            'css',
            'javascript',
            'code',
            'python',
            'data',
            'ai',
            'mobile',
            'apps',
            'flutter',
            'android',
            'ios',
            'design',
            'work',
            'culture',
            'job',
            'challenges',
            'tools',
            'software',
            'creators',
            'tips',
            'resources',
        ],
        links: { [website]: 'https://mailchi.mp/f59beeac6b9b/devupdates' },
        icon: 'https://mailchimp.com/release/plums/cxp/images/apple-touch-icon-192.ce8f3e6d.png',
    },
    {
        name: 'Divjoy',
        categories: [programming.templates],
        description:
            "The React codebase generator. Divjoy handles all the integration details. From routing to React hooks, you'll have everything you need to build something great.",
        links: {
            [website]: 'https://divjoy.com/',
        },
        icon: 'https://divjoy.com/static/images/favicon/favicon-32x32.png',
    },
    {
        name: 'DOM Events',
        categories: [programming.learn],
        description: 'Learn how the DOM Event system works through exploration.',
        links: {
            [website]: 'https://domevents.dev/',
        },
        icon: 'https://domevents.dev/apple-touch-icon.454d8b40.png',
    },
    {
        name: 'domain.garden',
        categories: [toolsAndUtilities.domains],
        description:
            'Instantly search across 1000+ new domain name extensions. Generate clever names, compare registry prices, and list popular examples per TLD.',
        links: {
            [website]: 'https://domain.garden/',
        },
        icon: 'https://domain.garden/favicon.ico',
    },
    {
        name: 'Dracula theme',
        categories: [toolsAndUtilities.general],
        description:
            'Dracula is a color scheme for code editors and terminal emulators such as Vim, Notepad++, iTerm, VSCode, Terminal.app, ZSH, and much more.',
        links: {
            [website]: 'https://draculatheme.com/',
        },
        icon: 'https://draculatheme.com/static/img/favicon.ico',
    },
    {
        name: 'DrawKit',
        categories: [assets.illustrations],
        description:
            'Free vector SVG illustrations for you to use on your next project, no attribution required! Vector illustrations, packs, icons and more.',
        links: {
            [website]: 'https://www.drawkit.io/',
        },
        icon: 'https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d3e60f773102c8158c55778_drawkit.png',
    },
    {
        name: 'DreamHost',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            "What's better than WordPress? A Website and Page Builder for WordPress. Choose a theme, add content, images and more with ZERO code!",
        links: {
            [website]: 'https://www.dreamhost.com/website-builder/',
        },
        icon:
            'https://www.dreamhost.com/assets/favicons/apple-touch-icon-76x76-18c4bd5a860942003494cecf3aa217b02285f57f5525c0e4985dcb77f0125d91.png',
    },
    {
        name: 'Dribbble',
        categories: [uiDesign.inspiration],
        description:
            'Dribbble is where designers gain inspiration, feedback, community, and jobs and is your best resource to discover and connect with designers worldwide.',
        links: {
            [website]: 'https://dribbble.com/',
        },
        icon:
            'https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png',
    },
    {
        name: 'Drupal',
        description: 'Drupal is an open source platform for building amazing digital experiences. It is made by a dedicated community. Anyone can use it, and it will always be free.',
        categories: [toolsAndUtilities.websiteBuilders],
        links: {
            [website]: 'https://www.drupal.org/',
        },
        icon: 'https://www.drupal.org/favicon.ico',
        keywords: ['website builder', 'content management system', 'CMS', 'open source'],
    },
    {
        name: 'dygraphs',
        categories: [programming.charts],
        description:
            'dygraphs is a fast, flexible open source JavaScript charting library. It allows users to explore and interpret dense data sets.',
        links: {
            [website]: 'https://dygraphs.com/',
        },
        icon: 'https://dygraphs.com/favicon.ico',
    },
    {
        name: 'DynamoDB',
        categories: [infrastructure.databases],
        description:
            'Amazon DynamoDB is a nonrelational database. This database system provides consistent latency and offers built-in security and in-memory caching. DynamoDB is a serverless database which scales automatically and backs up your data for protection.',
        links: {
            [website]: 'https://aws.amazon.com/dynamodb/',
        },
        icon: 'https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico',
    },
]
