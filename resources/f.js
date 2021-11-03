const {
    toolsAndUtilities,
    assets,
    uiDesign,
    infrastructure,
    programming,
    jobs,
    community,
} = require('../constants/categories')
const { website, youtube, facebook, twitter, linkedin, github } = require('../constants/links')

module.exports = [
    {
        name: 'Fake Img',
        categories: [toolsAndUtilities.imageAndVideoEditing],
        description:
            'A little tool that generates placeholder images with an URL. Choose the size, the colors, even the text. ',
        links: {
            [website]: 'https://fakeimg.pl/',
        },
        icon: 'https://fakeimg.pl/favicon.ico',
    },
    {
        name: 'Fathom',
        categories: [toolsAndUtilities.analytics],
        description:
            'Fathom Analytics is simple, GDPR + CCPA + PECR compliant website analytics tool, no cookie notice required. No tracking or storing personal data of your users.',
        links: {
            [website]: 'https://usefathom.com/',
        },
        icon: 'https://usefathom.com/assets/favicon.svg?v=3',
    },
    {
        name: 'Feather',
        categories: [assets.icons],
        description:
            'Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.',
        links: {
            [website]: 'https://feathericons.com/',
        },
        icon: 'https://feathericons.com/favicon-32x32.png',
    },
    {
        name: 'Figma',
        categories: [uiDesign.prototyping],
        description:
            'Build better products as a team. Design, prototype, and gather feedback all in one place with Figma.',
        keywords: [
            'design',
            'design tools',
            'ux',
            'ui',
            'user experience design',
            'collaboration',
            'design editor',
            'constraints',
            'vectors',
            'vector editor',
            'svg',
            'user interface design',
        ],
        links: {
            [website]: 'https://www.figma.com/',
        },
        icon: 'https://static.figma.com/app/icon/1/touch-76.png',
    },
    {
        name: 'FigmaCrush',
        categories: [uiDesign.inspiration],
        description:
            'FigmaCrush is a curated collection of Figma resources: UI kits, icons, website templates and all sorts of freebies created and shared by the Figma community.',
        links: {
            [website]: 'https://www.figmacrush.com/',
        },
        icon: 'https://www.figmacrush.com/wp-content/uploads/2019/09/favicon_FM.ico',
    },
    {
        name: 'Firebase',
        categories: [infrastructure.hosting, infrastructure.databases, infrastructure.serverless, infrastructure.auth],
        description:
            'Firebase is Google’s mobile platform that helps you quickly develop high-quality apps and grow your business.',
        links: {
            [website]: 'https://firebase.google.com/',
        },
        icon:
            'https://www.gstatic.com/devrel-devsite/prod/v45f61267e22826169cf5d5f452882f7812c8cfb5f8b103a48c0d88727908b295/firebase/images/touchicon-180.png',
    },
    {
        name: 'Firestore',
        categories: [infrastructure.databases],
        description:
            'Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud products, including Cloud Functions.',
        links: {
            [website]: 'https://firebase.google.com/docs/firestore',
        },
        icon:
            'https://www.gstatic.com/devrel-devsite/prod/v45f61267e22826169cf5d5f452882f7812c8cfb5f8b103a48c0d88727908b295/firebase/images/touchicon-180.png',
    },
    {
        name: 'Firefox',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'Faster page loading, less memory usage and packed with features, the new Firefox is here.',
        links: {
            [website]: 'https://www.mozilla.org/en-US/firefox/new/',
        },
        icon: 'https://www.mozilla.org/media/img/favicons/firefox/browser/favicon-196x196.59e3822720be.png',
    },
    {
        name: 'Firefox Developer',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Firefox Developer Edition is the blazing fast browser that offers cutting edge developer tools and latest features like CSS Grid support and framework debugging.',
        links: {
            [website]: 'https://www.mozilla.org/en-US/firefox/developer/',
        },
        icon: 'https://www.mozilla.org/media/img/favicons/firefox/browser/developer/favicon-196x196.b8d17dd1dda2.png',
    },
    {
        name: 'Firefox Nightly',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Get a sneak peek at our next generation web browser, and help us make it the best browser it can be',
        links: {
            [website]: 'https://www.mozilla.org/en-US/firefox/69.0a1/releasenotes/',
        },
        icon: 'https://www.mozilla.org/media/img/favicons/firefox/browser/nightly/favicon-196x196.f6d874cabab4.png',
    },
    {
        name: 'Fireship',
        description: 'High-intensity ⚡ code tutorials to help you build & ship your app faster. Subscribe for new videos every week covering intermediate to advanced lessons about JavaScript, Flutter, Firebase, and modern app development. The original home of #100SecondsOfCode and #CodeThisNotThat. Created by Jeff Delaney.',
        categories: [programming.youtubeChannels],
        links: {
            [website]: 'https://www.youtube.com/c/Fireship/featured',
        },
        icon: 'https://www.youtube.com/s/desktop/b349a03a/img/favicon_96x96.png',
        keywords: ['#CodeThisNotThat', '#100SecondsOfCode', 'javaScript', 'flutter', 'firebase', 'coding tutorials', 'Jeff Delaney', 'development', 'angular', 'git', 'nextJS', 'developer productivity', 'top N lists']
    },
    {
        name: 'First Timers Only',
        categories: [community.hacktoberfest],
        description: 'Find the best opportunities to create a pull request for the first time.',
        links: {
            [website]: 'https://www.firsttimersonly.com/',
        },
        icon: '',
    },
    {
        name: 'Fiverr',
        categories: [jobs.freelancing],
        description: 'One marketplace, millions of professional services. Browse. Buy. Done.',
        links: {
            [website]: 'https://www.fiverr.com/',
        },
        icon:
            'https://assetsv2.fiverrcdn.com/assets/v2_globals/apple-touch-icon-76x76-e74f7616f5a5f00eb18aa6426eeac69c.png',
    },
    {
        name: 'FlashDrive.io',
        categories: [infrastructure.hosting],
        description:
            'HostingFlashDrive.io is a PaaS service similar to Heroku with a developer-centric approach and a free tier for developers and micro-services.',
        links: {
            [website]: 'https://flashdrive.io',
            [twitter]: 'https://twitter.com/flashdriveio',
            [facebook]: 'https://www.facebook.com/flashdriveio',
            [linkedin]: 'https://www.linkedin.com/company/flashdrive/',
            [github]: 'https://github.com/flashdriveio',
        },
        icon: 'https://flashdrive.io/assets/images/favicon.ico',
    },
    {
        name: 'Flaticon',
        categories: [assets.icons],
        description: 'Download all icons in SVG, PSD, PNG, EPS format or as webfonts.',
        links: {
            [website]: 'https://www.flaticon.com',
        },
        icon: 'https://media.flaticon.com/dist/min/img/apple-icon-76x76-precomposed.png',
    },
    {
        name: 'Flexbox Adventure',
        categories: [programming.learn],
        description:
            'Flexbox layout has a lot of properties and nuances that are hard to remember, learn it in the fun and interesting way that works – a CSS RPG game!',
        links: {
            [website]: 'https://codingfantasy.com/games/flexboxadventure',
        },
        icon: 'https://codingfantasy.com/favicon.ico',
    },
    {
        name: 'Flexbox Defense',
        categories: [programming.learn],
        description:
            'Your job is to stop the incoming enemies from getting past your defenses. Unlike other tower defense games, you must position your towers using CSS!',
        links: {
            [website]: 'http://www.flexboxdefense.com/',
        },
        icon: 'http://www.flexboxdefense.com/images/favicon.ico',
    },
    {
        name: 'Flexbox Froggy',
        categories: [programming.learn],
        description: 'A game for learning CSS flexbox.',
        links: {
            [website]: 'http://flexboxfroggy.com/',
        },
        icon: 'http://flexboxfroggy.com/favicon.ico',
    },
    {
        name: 'FlexJobs',
        categories: [jobs.remoteOnly],
        description:
            'The #1 job site to find hand-screened, remote work from home & flexible jobs since 2007. Find a better way to work in 50+ career categories today!',
        keywords: [
            'remote jobs',
            'remote work',
            'telecommuting jobs',
            'telecommute jobs',
            'part-time jobs',
            'freelance jobs',
            'flexible jobs',
            'flexible schedule jobs',
        ],
        links: {
            [website]: 'https://www.flexjobs.com/',
        },
        icon: 'https://www.flexjobs.com/favicon-32x32.png',
    },
    {
        name: 'Fluid UI',
        categories: [uiDesign.prototyping],
        description:
            'Free lifetime account. Simple to learn, quick to master. Design interactive prototypes for Android, iOS, web and desktop in minutes.',
        links: {
            [website]: 'https://www.fluidui.com/',
        },
        icon: 'https://www.fluidui.com/favicon-96x96.png',
    },
    {
        name: 'Flutter Jobs',
        categories: [jobs.boards],
        description:
            'A job board dedicated to Flutter, the mobile cross platform SDK. We have jobs in Africa, the Americas, Asia, Europe, Oceania, and remote.',
        links: {
            [website]: 'https://flutterjobs.info/',
        },
        icon: 'https://flutterjobs.info/favicon.png',
    },
    {
        name: 'Font Awesome',
        categories: [assets.icons],
        description:
            'The world’s most popular and easiest to use icon set just got an upgrade. More icons. More styles. More Options.',
        keywords: [
            'icons',
            'vector icons',
            'svg icons',
            'free icons',
            'icon font',
            'webfont',
            'desktop icons',
            'svg',
            'font awesome',
            'font awesome free',
            'font awesome pro',
        ],
        links: {
            [website]: 'https://fontawesome.com',
        },
        icon: 'https://fontawesome.com/images/favicon/icon.svg',
    },
    {
        name: 'Font Space',
        categories: [assets.fonts],
        description:
            'Free downloads of legally licensed fonts that are perfect for your design projects. The best place in the universe to search for amazing fonts.',
        links: {
            [website]: 'https://www.fontspace.com/',
        },
        icon: 'https://www.fontspace.com/favicon-32x32.png?v=00Bdv4Q5g6',
    },
    {
        name: 'Font Squirrel',
        categories: [assets.fonts],
        description: 'Handpicked free fonts for graphic designers with commercial-use licenses.',
        keywords: [
            'free fonts',
            'handwriting fonts',
            'calligraphy free fonts',
            'designer fonts',
            'serif  fonts',
            'sans serif  fonts',
            'grunge  fonts',
            'script fonts',
            'typewriter fonts',
        ],
        links: {
            [website]: 'https://www.fontsquirrel.com/',
        },
        icon: 'https://www.fontsquirrel.com/favicon-32x32.png?v=2',
    },
    {
        name: 'Fontjoy',
        categories: [assets.fonts],
        description:
            'Fontjoy helps designers choose the best font combinations. Mix and match different fonts for the perfect pairing.',
        links: {
            [website]: 'https://fontjoy.com/',
        },
        icon: 'https://fontjoy.com/favicon32.gif',
    },
    {
        name: 'FontPair',
        categories: [assets.fonts],
        description: 'FontPair is a typography tool that inspires the creative community to design better.',
        keywords: [
            'FontPair',
            'Font Pair',
            'Google Fonts',
            'Google Font combinations',
            'Google Font pairs',
            'beautiful Google Fonts',
            'typography',
            'fonts',
            'typefaces',
        ],
        links: {
            [website]: 'https://fontpair.co/',
        },
        icon: 'https://uploads-ssl.webflow.com/5df11841b7e5a489e7c67859/6161da7091c49496c05aeff4_fontpair-logo-primary-dark.svg',
    },
    {
        name: 'Fonts In Use',
        categories: [assets.fonts],
        description: 'A searchable archive of typographic design, indexed by typeface, format, and topic.',
        links: {
            [website]: 'https://fontsinuse.com/',
        },
        icon: 'https://assets.fontsinuse.com/images/icons/apple-touch-icon-76x76.png',
    },
    {
        name: 'Fonts2u',
        categories: [assets.fonts],
        description: 'Fonts2u offers a large collection of free fonts. Download free fonts for Windows and Macintosh.',
        keywords: [
            'free fonts',
            'download fonts',
            'fonts',
            'free',
            'font',
            'typefaces',
            'typography',
            'typeface',
            'true type',
            'truetype fonts',
            'opentype',
            'opentype fonts',
            'windows',
            'windows fonts',
            'macintosh',
            'mac fonts',
            'macintosh fonts',
        ],
        links: {
            [website]: 'https://fonts2u.com/',
        },
        icon: 'https://ycdn.space/f7/apple-touch-icon.png',
    },
    {
        name: 'FontSpark',
        categories: [assets.fonts],
        description: 'Helping designers discover the perfect font for their next design project.',
        links: {
            [website]: 'https://fontspark.app/',
        },
        icon: 'https://fontspark.app/favicon.ico',
    },
    {
        name: 'Free Illustrations',
        categories: [assets.illustrations],
        description:
            'Collection of high-resolution vector or illustrations background images for modern websites and landing pages. Updated every week with new illustrations with different topics. You can contact us to suggest new topics for illustration background images as per your need.',
        links: {
            [website]: 'https://freellustrations.com',
        },
        icon: 'https://freellustrustrations.s3.us-east-2.amazonaws.com/static/favicon.png',
    },
    {
        name: 'Free JavaScript Resources',
        categories: [programming.learn],
        description: 'Learn JavaScript for free',
        links: {
            [website]: 'https://www.java5cript.com/',
        },
        icon: 'https://www.java5cript.com/favicon.ico',
    },
    {
        name: 'freeCodeCamp',
        categories: [programming.learn],
        description:
            'Learn to code at home. Build projects. Earn certifications. Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including Google, Apple, Amazon, and Microsoft.',
        keywords: [
            'javascript',
            'js',
            'website',
            'web',
            'development',
            'free',
            'code',
            'camp',
            'course',
            'courses',
            'html',
            'css',
            'react',
            'redux',
            'api',
            'front',
            'back',
            'end',
            'learn',
            'tutorial',
            'programming',
        ],
        links: {
            [website]: 'https://www.freecodecamp.org/',
        },
        icon: 'https://www.freecodecamp.org/icons/icon-96x96.png?v=6cba562cbd10e31af925a976f3db73f7',
    },
    {
        name: 'FreeHTML5',
        categories: [programming.templates],
        description:
            'Free website templates, free HTML5 templates using Bootstrap framework. High quality free website templates for all.',
        links: {
            [website]: 'https://freehtml5.co/',
        },
        icon: 'https://freehtml5.co/wp-content/uploads/2019/03/favicon-32x32.png',
    },
    {
        name: 'Freeicons',
        categories: [assets.icons],
        description:
            "Freeicons is  a free platform for download vector icons in SVG, PNG, EPS, AI and PSD format. Here You'll Find Wide Selection Of Icons In A Variety Of Different Styles, Sizes, Formats And Themes. All Of These Icon Sets Are Completely Free For Personal and Commercial Use Under Our Iconshock License. Enjoy!",
        keywords: [
            'vector icons',
            'download free icons',
            'free icons',
            'free vector icons',
            'free icons for commercial use',
            'free svg icons',
            'free eps and ai icons',
            'free psd icons',
            'windows 8 icons',
            'metro icons',
            'iphone tab bar icons',
            'android icons',
            'material icons',
            'monochrome icons',
            'icon pack',
            'windows 10 icons',
            'pack',
            'icons for iOS 11',
            'iPhone icons',
            'iPad icons',
            'material icons',
            'office style icons',
        ],
        links: {
            [website]: 'https://freeicons.io/',
        },
        icon: 'https://freeicons.io/asset/images/favicon.png',
    },
    {
        name: 'Freelancer',
        categories: [jobs.freelancing],
        description:
            "Find & hire top freelancers, web developers & designers inexpensively. World's largest marketplace of 48m. Receive quotes in seconds. Post your job online now.",
        links: {
            [website]: 'https://www.freelancer.com/',
        },
        icon: 'https://www.f-cdn.com/assets/main/en/app-icons/apple-touch-icon.png',
    },
    {
        name: 'FreePhotos.cc',
        categories: [assets.images],
        description:
            'Find free beautiful stock photos with Creative Commons (CC) licensing. Download royalty free images and use them on your website or print!',
        links: {
            [website]: 'https://freephotos.cc/en',
        },
        icon: 'https://freephotos.cc/favicon.ico',
    },
    {
        name: 'Front End Happy Hour',
        categories: [programming.podcasts],
        description:
            'A podcast featuring a panel of Software Engineers from Netflix, Twitch, & Atlassian talking over drinks about all things Front End development.',
        links: {
            [website]: 'https://frontendhappyhour.com/',
        },
        icon: 'https://frontendhappyhour.com/favicon.ico',
    },
    {
        name: 'Frontend Focus',
        categories: [programming.newsletters],
        description:
            'A once–weekly roundup of the best front-end news, articles and tutorials. HTML, CSS, WebGL, Canvas, browser tech, and more.',
        links: {
            [website]: 'https://frontendfoc.us/',
        },
        icon: 'https://frontendfoc.us/favicon.png',
    },
    {
        name: 'Frontend Happy Hour',
        keywords: ['frontend', 'web', 'web development'],
        categories: [programming.podcasts],
        description:
            'A podcast featuring a panel of Software Engineers from Netflix, Twitch, & Atlassian talking over drinks about all things Front End development.',
        links: {
            [website]: 'https://frontendhappyhour.com/',
        },
        icon: 'https://frontendhappyhour.com/favicon.ico',
    },
    {
        name: 'Frontend Masters',
        categories: [programming.learn],
        description: 'Advance your skills with in-depth, modern JavaScript and front-end engineering courses.',
        links: {
            [website]: 'https://frontendmasters.com/',
        },
        icon: 'https://frontendmasters.com/favicon-32x32.png',
    },
    {
        name: 'Frontend Mentor',
        categories: [programming.learn, programming.codeChallenges],
        description:
            'Improve your front-end skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.',
        links: {
            [website]: 'https://www.frontendmentor.io/',
        },
        icon: 'https://www.frontendmentor.io/static/favicon/favicon-32x32.png',
        keywords: ['frontend', 'html', 'css', 'flexbox', 'grid', 'rwd', 'mobile-first', 'javascript'],
    },
    {
        name: 'Frontend Practice',
        categories: [programming.learn],
        description: 'A collection of real websites for developers to recreate to improve and test their skills.',
        links: {
            [website]: 'https://www.frontendpractice.com/',
        },
        icon: 'https://www.frontendpractice.com/icons/icon-96x96.png',
    },
    {
        name: 'Frontend Tips',
        description: 'Tiny tips, tricks & best practices for front-end development',
        categories: [programming.learn],
        keywords: ['Front-end tips', 'Front-end tricks', 'Best front-end practices'],
        links: {
            [website]: 'https://getfrontend.tips/',
        },
        icon: 'https://getfrontend.tips/img/favicon.png',
    },
    {
        name: 'Frontend Toolkit',
        categories: [toolsAndUtilities.general],
        description:
            'Frontend Toolkit is a customizable dashboard for your recurring Frontend tasks. Base64 encoder/decoder, SVG optimizations, SVG to JSX and many more!',
        links: {
            [website]: 'https://www.fetoolkit.io/',
        },
        icon: 'https://www.fetoolkit.io/assets/favicon-32x32.png',
    },
    {
        name: 'Frontendor',
        categories: [programming.templates],
        description:
            'Reusable HTML templates and blocks to help you build beautiful and professional landing pages quickly and easily by COPY-PASTE.',
        links: {
            [website]: 'https://frontendor.com/',
        },
        icon: 'https://frontendor.com/preview/images/favicon/favicon-32x32.png',
    },
    {
        name: 'Full Stack Radio',
        categories: [programming.podcasts],
        description: 'A podcast for developers interested in building great software products. Hosted by Adam Wathan.',
        keywords: ['technology', 'software', 'web', 'development', 'product', 'startup'],
        links: {
            [website]: 'https://fullstackradio.com/',
        },
        icon: 'https://fullstackradio.com/favicon-32x32.png',
    },
    {
        name: 'Fun Fun Function',
        categories: [programming.youtubeChannels],
        description:
            "I’m Mattias Petter Johansson, mpj for short. I’ve been a full-time programmer for about ten years. Among others, I've worked for Absolut Vodka, Blackberry and Spotify.   Videos are released on MONDAYS at 08:00 GMT. For the love of 🗿, watch them! ❤️ Support the show on Patreon: https://patreon.com/funfunfunction: ⛱ Pledge $2/month and get access to the Fun Fun Forum where I and other inspiring patrons hang out and talk about everything more or less related to programming. Become a SUPER PATRON 🦹‍♀️🦸‍♂️ for $9/month and get access to the Forum AND random LOOT (like stickers and private live streams) Check out the sister channel DevTips: https://www.youtube.com/user/DevTipsForDesigners.",
        keywords: [
            'javascript "web development" programming software development technology computer science engineering developer creativity productivity',
        ],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'FusionCharts',
        categories: [programming.charts],
        description:
            'JavaScript charts for web and mobile apps. 95+ chart types, 1400+ maps and 20+ business dashboards with pre-built themes for any business use-case. Build fast, responsive and highly customizable data visualizations trusted by over 28,000 customers and 750,000 developers worldwide...',
        links: {
            [website]: 'https://www.fusioncharts.com/',
        },
        icon: 'https://www.fusioncharts.com/public/favicon/favicon-32x32.png',
    },
]
