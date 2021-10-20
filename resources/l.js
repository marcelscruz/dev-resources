const {
    programming,
    toolsAndUtilities,
    uiDesign,
    indieHacking,
    jobs,
    assets,
    community,
    infrastructure,
} = require('../constants/categories')
const { website, youtube, gumroad, github, twitter } = require('../constants/links')

module.exports = [
    {
        name: 'Ladybug',
        categories: [programming.podcasts],
        description: 'We’re debugging the tech industry. Every Monday.',
        links: {
            [website]: 'https://www.ladybug.dev/',
        },
        icon:
            'https://images.squarespace-cdn.com/content/v1/5eb5862de7b09b2f4ce9d8b0/1591444751314-BDTPIAHNC6OL9JUPI791/ke17ZwdGBToddI8pDm48kPiDXGvsflYyBJyQo1azq4aoCXeSvxnTEQmG4uwOsdIceAoHiyRoc52GMN5_2H8WpwThmSRcI1py6W7RkCODkNiWzV0pE_ENkG9GYVFdgY5cMgR9s4Gc--HvYZU6AQIxCw/favicon.ico',
    },
    {
        name: 'LambdaTest',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Perform manual or automated cross browser testing on 2000+ browsers online. Deploy and scale faster with the most powerful cross browser testing tool online.',
        keywords: [
            'cross browser testing free',
            'cross browser testing',
            'cross browser testing tools',
            'crossbrowser testing',
            'cross browser testing online',
            'browser testing tools',
            'online browser testing tools',
        ],
        links: {
            [website]: 'https://www.lambdatest.com/',
        },
        icon: 'https://www.lambdatest.com/favicon.ico',
    },
    {
        name: 'Land-book',
        categories: [uiDesign.inspiration],
        description:
            'Design gallery with the best and most carefully collected websites. We help creatives find inspiration & motivation to do rad stuff.',
        links: {
            [website]: 'https://land-book.com/',
        },
        icon: 'https://land-book.com/images/favicon.png',
    },
    {
        name: 'Landing Page Hot Tips',
        categories: [indieHacking.books],
        description:
            'The Landing Page Hot Tips Ebook features 100 digestible lessons to implement into your Landing Pages. Each tip features a few paragraphs, visual references and related resources. Additional features include: PDF Ebook (180-pages), Rich Media Ebook (adapts to any device), Category filter (eg. UX tips), Component filter (eg. Testimonials), Audiobook (54mins) and interactive launch checklists.',
        links: {
            [gumroad]: 'https://gumroad.com/a/124908659',
        },
        icon: 'https://gumroad.com/favicon.ico',
    },
    {
        name: 'Lapa Ninja',
        categories: [uiDesign.inspiration],
        description:
            'The best landing page design inspiration from around the web. Lapa Ninja is created to help designers find inspiration, learn and improve design skills. The contents are selected from the best designs, and daily updated.',
        keywords: [
            'landing page example',
            'landing page design inspiration',
            'landing page design 2020',
            'landing page design example',
            'the best landing page design',
            'landing page template',
            'free landing page design',
            'learn design',
        ],
        links: {
            [website]: 'https://www.lapa.ninja/',
        },
        icon: 'https://www.lapa.ninja/favicon-96x96.png',
    },
    {
        name: 'Larajobs',
        categories: [jobs.boards],
        description: 'Since 2014, the #1 Laravel job board connecting the best jobs with top talent.',
        links: {
            [website]: 'https://larajobs.com/',
        },
        icon: 'https://larajobs.com/favicon-32x32.png',
    },
    {
        name: 'Layoutit Grid',
        categories: [programming.codeGenerators],
        description:
            'Quickly design web layouts, and get HTML and CSS code. Learn CSS Grid visually and build web layouts with our interactive CSS Grid Generator.',
        links: {
            [website]: 'https://grid.layoutit.com/',
            [github]: 'https://github.com/Leniolabs/layoutit-grid',
        },
        icon: 'https://grid.layoutit.com/img/icons/icon-128x128.png',
    },
    {
        name: 'Learn CSS',
        categories: [programming.learn],
        description: 'An evergreen CSS course and reference to level up your web styling expertise.',
        links: {
            [website]: 'https://web.dev/learn/css/',
        },
        icon: 'https://web.dev/images/favicon-32x32.png',
    },
    {
        name: 'Learn Enough to Be Dangerous',
        categories: [programming.learn],
        description:
            'Learn Enough to Be Dangerous is designed to unleash your technical genius by teaching you technical sophistication.',
        links: {
            [website]: 'https://www.learnenough.com/',
            [youtube]: 'https://www.youtube.com/c/LearnEnough',
            [twitter]: 'https://twitter.com/learnenough',
        },
        icon: 'https://www.learnenough.com/le/apple-touch-icon-precomposed.png',
    },
    {
        name: 'Learn JavaScript',
        description:
            'Learn JavaScript in an interactive environment. Read short lessons, take notes, and complete challenges directly in your browser.',
        categories: [programming.learn, programming.codeChallenges],
        links: {
            [website]: 'https://learnjavascript.online',
        },
        icon: 'https://learnjavascript.online/assets/favicons/favicon-32x32.png',
        keywords: ['learn javascript', 'learn javascript online', 'interactive course'],
    },
    {
        name: 'Learn Programmatic SEO',
        categories: [toolsAndUtilities.seo],
        description:
            'Learn Programmatic SEO, a methodical approach to finding keywords, understanding user intent and creating hundreds of landing pages. No prior SEO knowledge required.',
        links: {
            [website]: 'https://www.preetamnath.com/programmatic-seo',
        },
        icon: 'https://uploads-ssl.webflow.com/5e0849b50d37a13ecd286934/5e085e49ad6badd7d7b3439f_favicon-256.png',
    },
    {
        name: 'Learn UI Design',
        categories: [uiDesign.learn],
        description:
            'Learn UI Design is a full-length online course on user interface and web design: color, typography, layout, design process, and more. Includes downloadable resources, homework, and a student community.',
        links: {
            [website]: 'https://learnui.design/',
        },
        icon: 'https://learnui.design/favicon.ico',
    },
    {
        name: 'Learn UX Design',
        categories: [uiDesign.learn],
        description:
            'Learn UX Design is a full-length online video course on user experience design covering interaction design, user research, usability testing, and more. Includes downloadable resources, homework, and a student community.',
        links: {
            [website]: 'https://learnui.design/courses/learn-ux-design.html',
        },
        icon: 'https://learnui.design/teachable/img/luxd-favicon.png',
    },
    {
        name: 'Learn X in Y minutes',
        categories: [programming.learn],
        description: 'Take a whirlwind tour of your next favorite language. Community-driven!',
        links: {
            [website]: 'https://learnxinyminutes.com/',
        },
        icon: 'https://learnxinyminutes.com/favicon.ico',
    },
    {
        name: 'LearnCode.academy',
        categories: [programming.youtubeChannels],
        description:
            '100% FREE Web Development tutorials, web site design tutorials and more. Including, but not limited to: HTML, CSS, JavaScript, CSS Layouts, Responsive Design, React.js, Node.js, Angular.js, Docker, Dev Ops, Server Administration, Deployment Strategies.',
        keywords: ['"web development" "web design" tutorials web development tutorial learn html css javascript'],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'LeetCode',
        categories: [programming.codeChallenges],
        description:
            'Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.',
        links: {
            [website]: 'https://leetcode.com/',
        },
        icon: 'https://leetcode.com/favicon-96x96.png',
    },
    {
        name: "Let's Enhance",
        categories: [toolsAndUtilities.imageAndVideoEditing],
        description:
            'Simple machine learning software to enlarge images with no quality loss, enhance colors and photo resolution, automatically retouch product photos. Free trial.',
        links: {
            [website]: 'https://letsenhance.io/',
        },
        icon: 'https://letsenhance.io/static/favicon/icon-96.png',
    },
    {
        name: 'LevelUpTuts',
        categories: [programming.youtubeChannels],
        description:
            'TLDR; 840+ free video tutorials created, recorded, edited, published and maintained by Scott Tolinski. The Story: Level Up Tutorials was created in March of 2012 by Scott Tolinski & Ben Schaaf while working together at Q LTD in Ann Arbor, MI. In February of 2012, Scott suffered a concussion after an injury while breakdancing. Stuck inside and unable to be active, Scott & Ben plotted to try and ease the pain of poor or outdated documentation and training on web projects. Although Ben enjoyed creating tutorials, due to time constraints he was unable to continue and Scott took on the project by himself. The Philosophy: Building websites is frustrating, or at least it can be. Level Up Tutorials sets how to help fix a major problem in learning technologies. The lack of in-depth, basic tutorials that teach more than just what to type when. Videos created for Level Up Tutorials are aimed to be accessible and easy to follow while maintaining high production values.',
        keywords: [
            'meteor angularjs angular drupal wordpress expression engine sass compass css cms drupal7 tutorials education web development websites html html5 css3 jquery ...',
        ],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Librestock',
        categories: [assets.images],
        description:
            'We scan and index the best free photos from the top stock sites. All photos are free for personal and commercial. No attribution required. CC0.',
        links: {
            [website]: 'https://librestock.com/',
        },
        icon: 'https://librestock.com/static/images/favicon-96x96.png',
    },
    {
        name: 'Like I Am Five',
        categories: [programming.learn],
        description: 'Learn to code through real-life projects in less than 4 hours.',
        links: {
            [website]: 'https://www.likeiamfive.com/',
        },
        icon: 'https://uploads-ssl.webflow.com/5f663366aa4dbb5f5ba60eb6/600f0002c4e610106b7a2dc8_Favicon.png',
    },
    {
        name: 'Line Icon Pack',
        categories: [assets.icons],
        description:
            '320+ Line Icon Pack - Custom stroke edition is an icon-based system for your design tool. This is the version with editable strokes to fits more complex your needs.',
        links: {
            [website]: 'https://www.petrbilek.com/products/line-icon-pack',
        },
        icon: 'https://uploads-ssl.webflow.com/5f436c086896715b56896fe4/5f469cf033aa724e20dc01dd_fav-256.svg',
    },
    {
        name: 'LineIcons',
        categories: [assets.icons],
        description:
            '2000+ Essential Line Icons, A Complete Yet Most Simplified Free Line Icon Pack of the Web - Available in WebFont, SVG, PNG, React, PNG, and PDF Files.',
        links: {
            [website]: 'https://lineicons.com/',
        },
        icon: 'https://user-images.githubusercontent.com/76911582/137953217-de9272df-bdbb-4c5f-9307-f5fb58839cf7.png',
    },
    {
        name: 'LinkedIn Learning',
        categories: [programming.learn],
        description:
            'Learn business, creative, and technology skills to achieve your personal and professional goals. Join LinkedIn Learning today to get access to thousands of courses.',
        links: {
            [website]: 'https://www.linkedin.com/learning',
        },
        icon: 'https://static-exp1.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico',
    },
    {
        name: 'Linode',
        categories: [infrastructure.cloudComputing],
        description:
            "Simplify your infrastructure with Linode's cloud computing and hosting solutions and develop, deploy, and scale faster and easier.",
        links: {
            [website]: 'https://www.linode.com/',
        },
        icon: 'https://www.linode.com/favicon.ico',
    },
    {
        name: 'Lobsters',
        categories: [community.blogsAndForums],
        description: 'Lobsters is a computing-focused community centered around link aggregation and discussion.',
        links: {
            [website]: 'https://lobste.rs/',
        },
        icon: 'https://lobste.rs/apple-touch-icon-144.png',
    },
    {
        name: 'Logology',
        categories: [assets.logos],
        description:
            'No random generation and no symbols from a free database. Everything was crafted from the ground-up!',
        links: {
            [website]: 'https://www.logology.co/',
        },
        icon: 'https://www.logology.co/images/favicon-32x32.png',
    },
    {
        name: 'LogoTaco',
        categories: [assets.logos],
        description:
            "Create or make your own logo design from our resource of free downloads and templates for businesses, companies, MVP's and startups. No online login required.",
        links: {
            [website]: 'https://www.logotaco.com/',
        },
        icon:
            'https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_32,h_32/https://www.logotaco.com/wp-content/uploads/2019/05/favicon_100.png',
    },
    {
        name: 'LogRocket',
        categories: [programming.testing],
        description:
            'LogRocket helps you understand problems affecting your users, so that you can get back to building great software.',
        links: {
            [website]: 'https://logrocket.com/',
        },
        icon: 'https://logrocket-assets.io/img/favicon/favicon-96x96.png',
    },
    {
        name: 'Looka',
        categories: [assets.logos],
        description: 'Make a logo and build a brand you love with Looka.',
        links: {
            [website]: 'https://looka.com',
        },
        icon: 'https://cdn.logojoy.com/wp-content/uploads/20190607113635/cropped-favicon-32x32.png',
    },
    {
        name: 'Lost Type Co-op',
        categories: [assets.fonts],
        description: 'Lost Type is a collaborative digital type foundry.',
        links: {
            [website]: 'http://losttype.com/',
        },
        icon: 'http://losttype.com/favicon.ico',
    },
    {
        name: 'Lukasz Adam',
        categories: [assets.illustrations],
        description:
            'Free Illustrations and Icons for everyone. Use them for anything you like. Free for commercial and personal use.',
        links: {
            [website]: 'https://lukaszadam.com/illustrations',
        },
        icon: 'https://lukaszadam.com/favicon.ico',
    },
]
