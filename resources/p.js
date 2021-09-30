const {
    toolsAndUtilities,
    uiDesign,
    programming,
    jobs,
    assets,
    indieHacking,
    infrastructure,
    community,
} = require('../constants/categories')
const { website, twitter, youtube, linkedin, facebook } = require('../constants/links')

module.exports = [
    {
        name: 'PageSpeed Insights',
        categories: [toolsAndUtilities.performance],
        description:
            'PageSpeed Insights analyzes the content of a web page, then generates suggestions to make that page faster.',
        links: {
            [website]: 'https://developers.google.com/speed/pagespeed/insights/',
        },
        icon: 'https://developers.google.com/speed/pagespeed/insights/favicon.ico',
    },
    {
        name: 'Palette List',
        categories: [uiDesign.color],
        description: 'Palette List is a dynamic palette generator.',
        keywords: ['palette', 'colors', 'designer tools', 'developer tools', 'hex', 'rgb'],
        links: {
            [website]: 'https://www.palettelist.com/',
        },
        icon: 'https://www.palettelist.com/favicon.ico',
    },
    {
        name: 'Paw',
        categories: [toolsAndUtilities.apiBuilding],
        description:
            'Paw is a full-featured HTTP client that lets you test and describe the APIs you build or consume. It has a beautiful native macOS interface to compose requests, inspect server responses, generate client code and export API definitions.',
        links: {
            [website]: 'https://paw.cloud/',
        },
        icon: 'https://cdn-static.paw.cloud/img/favicons/favicon-96x96-f769fad588.png',
    },
    {
        name: 'pCloudy',
        categories: [programming.testing],
        description:
            'Continuous testing platform that helps to speed up the app testing by enabling end to end continuous testing for enterprises.',
        links: {
            [website]: 'https://www.pcloudy.com/',
            [twitter]: 'https://twitter.com/pcloudy_ssts',
            [youtube]: 'https://www.youtube.com/c/pcloudy',
            [linkedin]: 'https://www.linkedin.com/company/pcloudy-com/',
            [facebook]: 'https://www.facebook.com/pcloudydotcom',
        },
        icon: 'https://www.pcloudy.com/favicon.ico',
    },
    {
        name: 'PeoplePerHour',
        categories: [jobs.freelancing],
        description:
            'Get any project done on PeoplePerHour - the #1 freelancing community. Post a project for free to find professional freelancers and find freelance jobs in minutes!',
        links: {
            [website]: 'https://www.peopleperhour.com/',
        },
        icon: 'https://www.peopleperhour.com/img/pph-mobile-banner.png',
    },
    {
        name: 'Pexels',
        categories: [assets.videos, assets.images],
        description: "Finding the perfect photo or video shouldn't take forever.",
        keywords: ['free stock videos', 'pexels', 'videos', 'design resource', 'footage', 'hd'],
        links: {
            [website]: 'https://www.pexels.com/',
        },
        icon:
            'https://www.pexels.com/assets/icons/pexels-icon-644533b609157fd990b1a6675626d63077ae1fb81e819c83f81dc2242877d413.png',
    },
    {
        name: 'PhpStorm',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'PhpStorm is a perfect PHP IDE for working with Symfony, Laravel, Drupal, WordPress, Laminas, Magento, Joomla!, CakePHP, Yii, and other frameworks.',
        links: {
            [website]: 'https://www.jetbrains.com/phpstorm/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Pingdom',
        categories: [toolsAndUtilities.performance],
        description: 'Full Page Test Analysis.',
        links: {
            [website]: 'https://tools.pingdom.com/',
        },
        icon: 'https://tools.pingdom.com/favicon.ico',
    },
    {
        name: 'Pixabay',
        categories: [assets.videos, assets.images, assets.illustrations],
        description:
            'Pixabay.com is a website for sharing photos, illustrations, vector graphics, film footage and music.',
        links: {
            [website]: 'https://pixabay.com/',
        },
        icon: 'https://pixabay.com/favicon-32x32.png',
    },
    {
        name: 'Pixel Love',
        categories: [assets.icons],
        description: 'Download 15,000 icons in 6 distictive styles made for professionals.',
        keywords: ['icons', 'line icons', 'vector icons', 'iOS icons', 'Android icons'],
        links: {
            [website]: 'https://www.pixellove.com/',
        },
        icon: 'https://www.pixellove.com/assets/favicons/favicon.ico',
    },
    {
        name: 'Plausible',
        categories: [toolsAndUtilities.analytics],
        description:
            'Plausible is a lightweight and open-source web analytics tool. Your website data is 100% yours and the privacy of your visitors is respected.',
        links: {
            [website]: 'https://plausible.io/',
        },
        icon: 'https://plausible.io/assets/images/icon/favicon.png',
    },
    {
        name: 'Plottable',
        categories: [programming.charts],
        description: 'Flexible, interactive, performant charts for the web made easy.',
        links: {
            [website]: 'http://plottablejs.org/',
        },
        icon: 'http://plottablejs.org/favicon.ico',
    },
    {
        name: 'Pluralsight',
        categories: [programming.learn],
        description:
            'Build your IT toolkit with the skills you need to excel in your job, including security best practices, server infrastructure and virtualization. Explore our IT courses now.',
        links: {
            [website]: 'https://www.pluralsight.com/',
        },
        icon: 'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/favicons/favicon-96x96.png',
    },
    {
        name: 'Polypane',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'A browser for web developers and designers with all the tools you need to build responsive, accessible and fast sites five times faster.',
        links: {
            [website]: 'https://polypane.app/',
        },
        icon: 'https://polypane.app/icons/icon-96x96.png?v=5df5528946772487a6ab462ff2125f26',
    },
    {
        name: 'PostgreSQL',
        categories: [infrastructure.databases],
        description:
            'PostgreSQL is an enterprise-class open source database management system. It supports both SQL for relational and JSON for non-relational queries.',
        links: {
            [website]: 'https://www.postgresql.org/',
        },
        icon: 'https://www.postgresql.org/favicon.ico',
    },
    {
        name: 'Postman',
        categories: [toolsAndUtilities.apiBuilding],
        description:
            'Postman makes API development easy. Our platform offers the tools to simplify each step of the API building process and streamlines collaboration so you can create better APIs faster.',
        links: {
            [website]: 'https://www.postman.com/',
        },
        icon: 'https://www.postman.com/web-assets/icons/icon-96x96.png?v=13d51aa1bbfaacb557bf41b85783e441',
    },
    {
        name: 'Prime',
        categories: [programming.uiKitsAndLibraries],
        description: 'Ultimate UI Framework.',
        links: {
            [website]: 'https://www.primefaces.org/',
        },
        icon: 'https://www.primefaces.org/wp-content/uploads/fbrfg/favicon-32x32.png',
    },
    {
        name: 'Product Hunt',
        categories: [indieHacking.platforms],
        description:
            "Product Hunt is a curation of the best new products, every day. Discover the latest mobile apps, websites, and technology products that everyone's talking about.",
        links: {
            [website]: 'https://www.producthunt.com/',
        },
        icon: 'https://ph-static.imgix.net/ph-ios-icon.png?auto=format&auto=compress',
    },
    {
        name: 'Programiz',
        categories: [programming.learn],
        description:
            'Learn to code in Python, C/C++, Java, and other popular programming languages with our easy to follow tutorials, examples, online compiler and references.',
        links: {
            [website]: 'https://www.programiz.com/',
        },
        icon: 'https://www.programiz.com/sites/all/themes/programiz/assets/favicon.png',
    },
    {
        name: 'Programming podcast',
        categories: [programming.podcasts],
        description:
            'The "Programming" podcast with Minko Gechev is a weekly show that aims to make us better software engineers! With each new episode, you\'ll get exposed to a new idea in a brief and accessible way',
        links: {
            [website]: 'https://podcast.mgechev.com/',
        },
        icon: 'https://podcast.mgechev.com/favicon.ico',
    },
    {
        name: 'Project Euler',
        categories: [programming.codeChallenges],
        description: 'A website dedicated to the fascinating world of mathematics and programming.',
        keywords: ['programming', 'mathematics', 'problems', 'puzzles'],
        links: {
            [website]: 'https://projecteuler.net/',
        },
        icon: 'https://projecteuler.net/favicon.ico',
    },
    {
        name: 'ProjectLearn',
        categories: [programming.learn],
        description:
            'A project-based learning approach in web development, mobile development, game development, machine learning and artificial intelligence. Learn code the right way!',
        keywords: [
            'project',
            'tutorial',
            'learn code by doing',
            'project based learning',
            'learn code free',
            'web development',
            'app development',
            'game development',
            'machine learning',
            'artificial intelligence',
        ],
        links: {
            [website]: 'https://projectlearn.io/',
        },
        icon: 'https://projectlearn.io/projectlearn.png',
    },
    {
        name: 'Proxies API',
        categories: [toolsAndUtilities.webScraping],
        description:
            'Want to send custom headers? Want to run sticky sessions with a single IP? Want to scrape AJAX based content? We have you covered. You can customise almost all this in a single line of code, no matter the language you are using or the setup. Proxies API was created for developers by developers with the goal of making it dead easy to get started with zero coding overhead.',
        links: {
            [website]: 'www.proxiesapi.com',
        },
        icon: 'https://www.proxiesapi.com/assets/favicon.ico',
    },
    {
        name: 'Pttrns',
        categories: [uiDesign.inspiration],
        description: 'Check out the finest collection of design patterns, resources, mobile apps and inspiration.',
        keywords: [
            'apps',
            'ios',
            'ui',
            'design',
            'visual design',
            'patterns',
            'pttrns',
            'iphone',
            'retina',
            'screenshots',
            'inspiration',
            'mobile',
            'iphone',
            'ipad',
            'android',
            'lumia',
            'apple watch',
            'internet of things',
            'smartwatch',
            'iot',
            'resources',
            'framerjs',
            'swift',
            'sketch',
            'photoshop',
            'xcode',
            'resources',
            'articles',
        ],
        links: {
            [website]: 'https://pttrns.com/',
        },
        icon: 'https://s3.amazonaws.com/pttrns-2-0-static/assets/img/favicons/favicon-96x96.png',
    },
    {
        name: 'Pull Request Roulette',
        categories: [community.hacktoberfest],
        description:
            'Web app to match up developers, with public pull requests (PRs) on Github, with people willing to comment on their PRs.',
        links: {
            [website]: 'http://www.pullrequestroulette.com/',
        },
        icon:
            'http://www.pullrequestroulette.com/assets/favicon-c7222dcd8c2c148cbd4ee961fdb75431a0ff1399b2245da43057ee1d15a187b0.gif',
    },
    {
        name: 'Puppeteer',
        categories: [programming.testing],
        description:
            'Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.',
        links: {
            [website]: 'https://pptr.dev/',
        },
        icon: 'https://pptr.dev/favicons/favicon-32x32.png',
    },
    {
        name: 'Pxfuel',
        categories: [assets.images],
        description:
            'Millions of public domain stock photos released under creative common zero lincense, all are free for commercial use.',
        keywords: [
            'Royalty free',
            'public domain',
            'CC0',
            'stock photos',
            'commercial use',
            'free download',
            'unlimited download',
            'free photos',
            'HD photos',
            '1080P',
            '2K',
            '4k',
            '5K',
        ],
        links: {
            [website]: 'https://www.pxfuel.com/',
        },
        icon: 'https://www.pxfuel.com/public/css/favicon.ico?20191026',
    },
    {
        name: 'PyCharm',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'The Python & Django IDE with intelligent code completion, on-the-fly error checking, quick-fixes, and much more...',
        links: {
            [website]: 'https://www.jetbrains.com/pycharm/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Python Developer Jobs',
        categories: [jobs.boards],
        description:
            'Find specific Python Developer Jobs, including Remote Jobs. You are looking for Python Developers? Submit your position for free.',
        links: {
            [website]: 'https://pythonjob.xyz/',
        },
        icon: 'https://pythonjob.xyz/img/icons/favicon-32x32.png',
    },
]
