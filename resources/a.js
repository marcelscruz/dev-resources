const {
    toolsAndUtilities,
    programming,
    uiDesign,
    indieHacking,
    jobs,
    infrastructure,
    assets,
    community,
} = require('../constants/categories')
const { website, youtube, github, twitter, facebook, linkedin, discord, instagram } = require('../constants/links')

module.exports = [
    {
        name: 'A11Y Style Guide',
        categories: [toolsAndUtilities.accessibility],
        description: 'Style guide and pattern library promoting accessible components and WCAG compliance criteria.',
        links: {
            [website]: 'https://a11y-style-guide.com/style-guide/',
        },
        icon: 'https://a11y-style-guide.com/favicons/favicon-96x96.png',
    },
    {
        name: 'A11ygator',
        categories: [toolsAndUtilities.accessibility],
        description:
            'An application, a Twitter bot and a browser extension that bites websites to taste their accessibility.',
        links: {
            [website]: 'https://a11ygator.chialab.io/',
        },
        icon: 'https://a11ygator.chialab.io/favicon.png',
    },
    {
        name: 'A11yWeekly',
        categories: [programming.newsletters],
        description: 'A weekly dose of web accessibility to help you bring it into your every day work.',
        links: {
            [website]: 'https://a11yweekly.com/',
        },
        icon: 'https://a11yweekly.com/favicon.ico',
    },
    {
        name: 'Accessibility Engineer',
        categories: [toolsAndUtilities.accessibility],
        description:
            'Accessibility Engineer · Web Checklist · Native App Checklist. Accessibility Acceptance Criteria. Web Accessibility Checklist · Native Accessibility Checklist.',
        links: {
            [website]: 'https://a11yengineer.com/',
        },
        icon: 'https://a11yengineer.com/assets/images/favicons/favicon-32x32.png',
    },
    {
        name: 'Accessibility Resources',
        categories: [toolsAndUtilities.accessibility],
        description: 'A growing list of accessibility tools and resources.',
        links: {
            [website]: 'https://a11yresources.webflow.io/',
        },
        icon: 'https://uploads-ssl.webflow.com/5f47cec00744f533cf1b42cb/5f48bf20e685fcb903e66d96_touchicon.png',
    },
    {
        name: 'accessibilityjs',
        categories: [toolsAndUtilities.accessibility],
        description:
            'Client side accessibility error scanner. Contribute to github/accessibilityjs development by creating an account on GitHub.',
        links: {
            [website]: 'https://github.com/github/accessibilityjs',
        },
        icon: 'https://github.githubassets.com/favicons/favicon-dark.svg',
    },
    {
        name: 'Accessible Color Generator',
        categories: [toolsAndUtilities.accessibility],
        description:
            'A tool for creating color variations on a base color to meet WCAG AA or AAA color contrast ratio guidelines.',
        links: {
            [website]: 'https://learnui.design/tools/accessible-color-generator.html',
        },
        icon: 'https://learnui.design/tools/favicon.ico',
    },
    {
        name: 'AChecker',
        categories: [toolsAndUtilities.accessibility],
        description:
            'AChecker is a Web accessibility evalution tool designed to help Web content developers and Web application developers ensure their Web content is accessible to everyone regardless to the technology they may be using, or their abilities or disabilities.',
        keywords: [
            'achecker',
            'free',
            'open source',
            'accessibility checker',
            'accessibility reviewer',
            'accessibility evaluator',
            'accessibility evaluation',
            'WCAG evaluation',
            '508 evaluation',
            'BITV evaluation',
            'evaluate accessibility',
            'test accessibility',
            'review accessibility',
            'ATRC',
            'WCAG 2',
            'STANCA',
            'BITV',
            'Section 508.',
        ],
        links: {
            [website]: 'https://achecker.ca/checker/index.php',
        },
        icon: 'https://achecker.ca/images/favicon.ico',
    },
    {
        name: 'Adobe Color',
        categories: [uiDesign.color],
        description:
            'Create color palettes with the color wheel or image, browse thousands of color combinations from the Adobe Color community.',
        links: {
            [website]: 'https://color.adobe.com/create/color-wheel',
        },
        icon: 'https://color.adobe.com/create/favicon.ico',
    },
    {
        name: 'Adobe XD',
        categories: [uiDesign.prototyping],
        description:
            'Adobe XD is a fast & powerful UI/UX design solution for websites, apps & more. Design, wireframe, animate, prototype, collaborate & share  — all in one place.',
        links: {
            [website]: 'https://www.adobe.com/products/xd.html',
        },
        icon: 'https://www.adobe.com/content/dam/cc/Adobe_favicon.ico',
    },
    {
        name: 'Adrian Twarog',
        categories: [programming.youtubeChannels],
        description:
            "I'm Adrian from Australia, a designer and developer who makes websites and apps using platforms like React Native. I'm hoping to share some of the things I've learnt over the years about my career and hobbies for coding, user interface and experience! Some of the things we will cover will include: - Development for React, React Native, Javascript, HTML, CSS, etc - Small changes to improve UI & UX, like the use of colour, positioning and size - Large changes like websites or apps, like entire re-designs - Techniques on creating style-guides - Reviews of existing businesses online presence and tips on improving them. #coding #programming #ui #ux #webdevelopment #development #react #reactnative #design #userexperience #userinterface.",
        keywords: [
            'HTML CSS JS UI UX WordPress "React Native" "User Interface Design" Website JavaScript "Graphics design"',
        ],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCvM5YYWwfLwpcQgbRr68JLQ',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Ahrefs',
        categories: [toolsAndUtilities.seo],
        description:
            "You don't have to be an SEO pro to rank higher and get more traffic. Join Ahrefs – we're a powerful but easy to learn SEO toolset with a passionate community.",
        links: {
            [website]: 'https://ahrefs.com/',
        },
        icon: 'https://static.ahrefs.com/favicon-32x32.png?v=2',
    },
    {
        name: 'Airtable',
        categories: [indieHacking.utilities, infrastructure.databases, infrastructure.serverless],
        description:
            'Airtable is a low-code platform for building collaborative apps. Customize your workflow, collaborate, and achieve ambitious outcomes. Get started for free.',
        links: {
            [website]: 'https://airtable.com/',
        },
        icon: 'https://airtable.com/images/favicon/baymax/favicon-32x32.png',
    },
    {
        name: 'ally.js',
        categories: [toolsAndUtilities.accessibility],
        description:
            'JavaScript library to help modern web applications with accessibility concerns by making accessibility simpler.',
        links: {
            [website]: 'https://allyjs.io/',
        },
        icon: 'https://allyjs.io/favicon.ico',
    },
    {
        name: 'AngelList',
        categories: [jobs.boards],
        description:
            'Apply privately to 130,000+ remote jobs and startup jobs near you with one application. See salary and equity upfront.',
        links: {
            [website]: 'https://angel.co/',
        },
        icon: 'https://angel.co/images/icons/iOS/UpdatedFavicon_72x72.png',
    },
    {
        name: 'Angular DevTools',
        description: 'Angular DevTools extends Chrome DevTools adding Angular specific debugging and profiling capabilities. You can use Angular DevTools to understand the structure of your application and preview the state of the directive and the component instances. To get insights into the execution of the application, you can use the profiler tab, which shows you the individual change detection cycles, what triggered them, and how much time Angular spent in them.',
        categories: [toolsAndUtilities.browsersAndExtensions],
        links: {
            [website]: 'https://angular.io/guide/devtools',
        },
        icon: 'https://angular.io/assets/images/favicons/favicon-96x96.png',
        keywords: ['dev tools', 'angular', 'profiler', 'profiling'],
    },
    {
        name: 'Animista',
        categories: [uiDesign.utilities],
        description:
            'Animista is a place where you can play with a collection of ready to use CSS animations, tweak them and download only those you will actually use.',
        links: {
            [website]: 'https://animista.net/',
        },
        icon: 'https://animista.net/favicon.ico',
    },
    {
        name: 'Apigee',
        categories: [toolsAndUtilities.apiBuilding],
        description:
            'Apigee, part of Google Cloud, helps leading companies design, secure, and scale application programming interfaces (APIs). Try Apigee Edge for free.',
        links: {
            [website]: 'https://cloud.google.com/apigee',
        },
        icon:
            'https://www.gstatic.com/devrel-devsite/prod/vbd4700e58d826f0eab371eadc20e0e343567df356800794a790eebf2ac059db2/cloud/images/favicons/onecloud/super_cloud.png',
    },
    {
        name: 'AppCode',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'An intelligent IDE for iOS/macOS development focused on code quality, efficient code navigation, smart code completion, on-the-fly code analysis with quick-fixes and superior code refactorings.',
        links: {
            [website]: 'https://www.jetbrains.com/objc/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'AppMockUp',
        categories: [uiDesign.prototyping],
        description:
            "Use AppMockUp, the world's most powerful screenshot builder to create the most compelling screenshots for your app.",
        links: {
            [website]: 'https://app-mockup.com/',
        },
        icon: 'https://app-mockup.com/icons/icon-96x96.png?v=59619132456a4be05090b0bf15d7fa12',
    },
    {
        name: 'Appwrite',
        categories: [toolsAndUtilities.apiBuilding, toolsAndUtilities.general],
        description:
            'Appwrite provides web and mobile developers with a set of easy-to-use and integrate REST APIs to manage their core backend needs.',
        links: {
            [website]: 'https://appwrite.io/',
            [github]: 'https://github.com/appwrite/appwrite',
            [twitter]: 'https://twitter.com/appwrite_io',
            [facebook]: 'https://www.facebook.com/appwrite.io',
            [linkedin]: 'https://www.linkedin.com/company/appwrite',
            [discord]: 'https://appwrite.io/discord',
        },
        icon: 'https://appwrite.io/images/favicon.png',
    },
    {
        name: 'Artify',
        categories: [assets.illustrations, assets.logos],
        description:
            'Artify is an online and easy-to-use design editor that features thousands of customizable illustrations and template packs.',
        links: {
            [website]: 'https://www.artify.co/',
            [twitter]: 'https://twitter.com/ArtifyCrew',
            [instagram]: 'https://www.instagram.com/ArtifyCrew/',
            [facebook]: 'https://www.facebook.com/ArtifyCrew',
        },
        icon: 'https://www.artify.co/images/landing/favicon.png',
    },
    {
        name: 'Atom',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'At GitHub, we’re building the text editor we’ve always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can’t wait to see what you build with it.',
        links: {
            [website]: 'https://atom.io/',
        },
        icon: 'https://atom.io/favicon.ico',
    },
    {
        name: 'Authentic Jobs',
        categories: [jobs.boards],
        description: 'The leading job board for designers, developers, and creative pros.',
        links: {
            [website]: 'https://authenticjobs.com/',
        },
        icon: 'https://authenticjobs.com/wp-content/uploads/2020/04/cropped-aj-site-favicon-32x32.png',
    },
    {
        name: 'AWS',
        categories: [infrastructure.hosting, infrastructure.cloudComputing],
        description:
            'Amazon Web Services offers reliable, scalable, and  inexpensive cloud computing services. Free to join, pay only for what you use.',
        links: {
            [website]: 'https://aws.amazon.com/',
        },
        icon: 'https://a0.awsstatic.com/libra-css/images/site/touch-icon-ipad-144-smile.png',
    },
    {
        name: 'Awesome a11y',
        categories: [toolsAndUtilities.accessibility],
        description:
            ':wheelchair: A curate list about A11Y. Contribute to brunopulis/awesome-a11y development by creating an account on GitHub.',
        links: {
            [website]: 'https://github.com/brunopulis/awesome-a11y',
        },
        icon: 'https://github.githubassets.com/favicons/favicon-dark.svg',
    },
    {
        name: 'Awesome Courses',
        categories: [programming.learn],
        description: 'List of awesome university courses for learning Computer Science.',
        links: {
            [github]: 'https://github.com/prakhar1989/awesome-courses',
        },
        icon: 'https://github.githubassets.com/apple-touch-icon-114x114.png',
    },
    {
        name: 'Awesome for Beginners',
        categories: [community.hacktoberfest],
        description:
            'A list of awesome beginners-friendly projects. Contribute to MunGell/awesome-for-beginners development by creating an account on GitHub.',
        links: {
            [github]: 'https://github.com/mungell/awesome-for-beginners',
        },
        icon: 'https://github.githubassets.com/apple-touch-icon-114x114.png',
    },
    {
        name: 'Awwwards',
        categories: [uiDesign.inspiration],
        description:
            'Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world.',
        keywords: ['Website Awards', 'Web Design Inspiration', 'Webdesign Trends'],
        links: {
            [website]: 'https://www.awwwards.com/',
        },
        icon: 'https://www.awwwards.com/apple-touch-icon.png',
    },
    {
        name: 'Azure',
        categories: [infrastructure.hosting],
        description:
            'Invent with purpose, realise cost savings and make your organisation more efficient with Microsoft Azure’s open and flexible cloud computing platform.',
        keywords: ['Azure', 'Windows Azure', 'Cloud Service', 'Cloud Computing Companies'],
        links: {
            [website]: 'https://azure.microsoft.com/',
        },
        icon:
            'https://azurecomcdn.azureedge.net/cvt-1e062bfe62b371303d7ba3612723f5e334cd5f56fd4e3ea4c0f6e8138bf366b5/images/icon/apple-touch/72x72.png',
    },
]
