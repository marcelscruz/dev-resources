const { programming, toolsAndUtilities, jobs, uiDesign, community, infrastructure } = require('../constants/categories')
const { website, youtube, twitter, facebook, github, discord } = require('../constants/links')

module.exports = [
    {
        name: 'W3Layouts',
        categories: [programming.templates],
        description: 'W3layouts is an online store to download website templates for all types of businesses.',
        links: {
            [website]: 'https://w3layouts.com/',
        },
        icon: 'https://w3lcdn.w3layouts.com/wp-content/uploads/2020/11/cropped-w3layouts-logo-512-32x32.png',
    },
    {
        name: 'W3Schools',
        categories: [programming.learn],
        description:
            'W3Schools is a training website for learning web technologies online. Content includes tutorials and references relating to HTML, CSS, JavaScript, JSON, PHP, Python, AngularJS, React.js, SQL, Bootstrap, Sass, Node.js, jQuery, XQuery, AJAX, XML, Raspberry Pi, C++, C# and Java.',
        keywords: [
            'HTML',
            'CSS',
            'JavaScript',
            'DOM',
            'jQuery',
            'PHP',
            'SQL',
            'XML',
            'Python',
            'Java',
            'Bootstrap',
            'Web',
            'W3CSS',
            'W3C',
            'tutorials',
            'programming',
            'development',
            'training',
            'learning',
            'quiz',
            'primer',
            'lessons',
            'reference',
            'examples',
            'source code',
            'colors',
            'demos',
            'tips',
            'w3c',
        ],
        links: {
            [website]: 'https://www.w3schools.com/',
        },
        icon: 'https://www.w3schools.com/favicon.ico',
    },
    {
        name: 'Wappalyzer',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Find out the technology stack of any website. Create lists of websites and contacts by the technologies they use.',
        links: {
            [website]: 'https://www.wappalyzer.com/',
        },
        icon: 'https://www.wappalyzer.com/apple-touch-icon.png',
    },
    {
        name: 'Warrant',
        categories: [infrastructure.auth],
        description:
            'Hosted enterprise-grade authorization and access control service for your apps.',
        links: {
            [website]: 'https://warrant.dev/',
            [discord]: 'https://discord.gg/QNCMKWzqET',
            [github]: 'https://github.com/warrant-dev',
            [twitter]: 'https://twitter.com/warrant_dev',
        },
        icon: 'https://warrant.dev/apple-touch-icon.png',
        keywords: ['auth', 'authorization', 'authz', 'access control'],
    },
    {
        name: 'Wave',
        categories: [toolsAndUtilities.general],
        description: 'Free invoicing & accounting software with credit card processing & payroll services.',
        links: {
            [website]: 'https://www.waveapps.com/',
        },
        icon: 'https://www.waveapps.com/assets/img/icons/favicon-32x32.png',
    },
    {
        name: 'WAVE',
        categories: [toolsAndUtilities.accessibility],
        description:
            'WAVE is a suite of evaluation tools that helps authors make their web content more accessible to individuals with disabilities. WAVE can identify many accessibility and Web Content Accessibility Guideline (WCAG) errors, but also facilitates human evaluation of web content.',
        links: {
            [website]: 'https://wave.webaim.org/',
        },
        icon: 'https://wave.webaim.org/favicon.ico',
    },
    {
        name: 'Web Design Inspiration',
        categories: [uiDesign.inspiration],
        description:
            'Visit the #1 Inspiration Gallery. Everyday, we help Webdesigners, Agencies and Entrepreneurs to be inspired for their next web design project.',
        links: {
            [website]: 'https://www.webdesign-inspiration.com/',
        },
        icon: 'https://www.webdesign-inspiration.com/favicon.ico',
    },
    {
        name: 'We Work Remotely',
        categories: [jobs.remoteOnly],
        description:
            "Find the most qualified people in the most unexpected places: Hire remote! We Work Remotely is the best place to find and list remote jobs that aren't restricted by commutes or a particular geographic area. Browse thousands of remote work jobs today.",
        links: {
            [website]: 'https://weworkremotely.com/',
        },
        icon: 'https://weworkremotely.com/favicon-96x96.png',
    },
    {
        name: 'Web Developer',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'Download the Web Developer extension for Chrome and Firefox.',
        links: {
            [website]: 'https://chrispederick.com/work/web-developer/',
        },
        icon: 'https://cdn.chrispederick.net/images/7.2/logos/256.png',
    },
    {
        name: 'Web Developer Checklist',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'Analyses any web page for violations of best practices.',
        links: {
            [website]:
                'https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en',
        },
        icon: 'https://ssl.gstatic.com/chrome/webstore/images/icon_96px.png',
    },
    {
        name: 'web.dev - Lighthouse',
        categories: [toolsAndUtilities.performance],
        description: 'See how well your website performs. Then, get tips to improve your user experience.',
        links: {
            [website]: 'https://web.dev/measure',
        },
        icon: 'https://web.dev/images/favicon-32x32.png',
    },
    {
        name: 'Webflow',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Build responsive websites in your browser, then launch with our world-class hosting or export your code. Discover the professional website platform built for your business.',
        links: {
            [website]: 'https://webflow.com/',
        },
        icon:
            'https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d5595354de4fbdd8c554dba_default_webclip.png',
    },
    {
        name: 'Webframe',
        categories: [uiDesign.inspiration],
        description:
            'A showcase of beautiful and well designed web app screens for design inspiration. Including screens from behind signup/paywalls! 😱.',
        links: {
            [website]: 'https://webframe.xyz/',
        },
        icon: 'https://webframe.xyz/favicon.ico',
    },
    {
        name: 'WebPagetest',
        categories: [toolsAndUtilities.performance],
        description:
            'Run a free website speed test from around the globe using real browsers at consumer connection speeds with detailed optimization recommendations.',
        keywords: ['WebPageTest', 'Website Speed Test', 'Page Speed'],
        links: {
            [website]: 'https://www.webpagetest.org/',
        },
        icon: 'https://www.webpagetest.org/images/favicon/favicon-32x32.png',
    },
    {
        name: 'Website Authority Checker',
        categories: [toolsAndUtilities.seo],
        description:
            'Free tool to check the "authority" of any website based on the quality and quantity of its external backlinks.',
        links: {
            [website]: 'https://ahrefs.com/website-authority-checker',
        },
        icon: 'https://cdn.ahrefs.com/favicon-32x32.png?v=2',
    },
    {
        name: 'WebStorm',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'A powerful IDE for modern JavaScript development with code completion and refactoring for JavaScript, TypeScript, and the most popular web frameworks.',
        links: {
            [website]: 'https://www.jetbrains.com/webstorm/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Weebly',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Weebly’s free website builder makes it easy to build a website, blog, or online store. Find customizable designs, domains, and eCommerce tools for any type of business using our website builder.',
        links: {
            [website]: 'https://www.weebly.com/',
        },
        icon: 'https://www.weebly.com/favicon.ico',
    },
    {
        name: 'Wes Bos',
        categories: [programming.youtubeChannels],
        description: 'HTML, CSS, JavaScript and WordPress web development tutorials!',
        keywords: ['JavaScript jQuery HTML5 CSS3 development web design css php wordpress'],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCoebwHSTvwalADTJhps0emA',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'WhatFont',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'The easiest way to identify fonts on web pages.',
        links: {
            [website]: 'https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en',
        },
        icon: 'https://ssl.gstatic.com/chrome/webstore/images/icon_96px.png',
    },
    {
        name: 'Windframe',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Rapidly Build and Prototype responsive websites using a drag and drop Tailwind CSS website builder',
        keywords: [
            'website builder',
            'tailwind css builder',
            'drag and drop builder',
        ],
        links: {
            [website]: 'https://www.devwares.com/windframe/',
        },
        icon:
            'https://windframe.devwares.com/devwaresIcon.png',
    },
    {
        name: 'Wix',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Create a free website with Wix.com. Choose a stunning template and customize anything with the Wix website builder—no coding skills needed. Create yours today!',
        links: {
            [website]: 'https://www.wix.com/',
        },
        icon: 'https://www.wix.com/favicon.ico',
    },
    {
        name: 'WordPress',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Create a free website or build a blog with ease on WordPress.com. Dozens of free, customizable, mobile-ready designs and themes. Free hosting and support.',
        links: {
            [website]: 'https://wordpress.com/',
        },
        icon: 'https://s1.wp.com/i/favicon.ico?v=1447321881',
    },
    {
        name: 'Working Nomads',
        categories: [jobs.remoteOnly],
        description:
            'Remote jobs for digital working nomads. Start your telecommuting career and work remotely from home or places around the world.',
        keywords: [
            'remote jobs',
            'telecommuting jobs',
            'work from home jobs',
            'remote',
            'telecommuting',
            'virtual',
            'working nomads',
        ],
        links: {
            [website]: 'https://www.workingnomads.co/jobs',
        },
        icon: 'https://www.workingnomads.co/static/jobs/assets/favicon.ico',
    },
    {
        name: 'Writty',
        categories: [toolsAndUtilities.writing],
        description: 'A simple writing app and text editor to help you focus on what matters.',
        keywords: ['writing app', 'text editor', 'wysiwyg'],
        links: {
            [website]: 'https://writtyapp.com/',
        },
        icon: 'https://writtyapp.com/images/favicon.png',
    },
    {
        name: 'wweb.dev',
        categories: [community.blogsAndForums],
        description:
            'Stay up to date with weekly updates, get resources for your next projects abd read articles and tutorials about web development.',
        links: {
            [website]: 'https://wweb.dev/',
            [twitter]: 'https://twitter.com/wweb_dev',
            [facebook]: 'https://www.facebook.com/wweb.dev.blog',
            [github]: 'https://github.com/wwebdev',
        },
        icon: 'https://wweb.dev/favicon.ico',
    },
]
