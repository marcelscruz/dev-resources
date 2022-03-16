const { assets, programming, community, toolsAndUtilities, indieHacking, jobs } = require('../constants/categories')
const { website, youtube, github, twitter, linkedin } = require('../constants/links')

module.exports = [
    {
        name: 'Tabler Icons',
        categories: [assets.icons],
        description: '800+ Highly customizable & free SVG icons.',
        links: {
            [website]: 'https://tablericons.com/',
        },
        icon: 'https://tablericons.com/favicon.png',
    },
    {
        name: 'Tailor Brands',
        categories: [assets.logos],
        description:
            "Tailor Brands AI logo maker allows you to create a logo design that's a perfect match for your business. No pre-made logo templates. Unique designs only.",
        links: {
            [website]: 'https://www.tailorbrands.com/logo-maker',
        },
        icon: 'https://www.tailorbrands.com/wp-content/uploads/2016/07/cropped-icon_red-32x32.png',
    },
    {
        name: 'TailwindComponents',
        categories: [programming.uiKitsAndLibraries],
        description:
            'Tailwind CSS examples from components by the community. Tailwind chart, grids, inputs, forms, templates and much more.',
        links: {
            [website]: 'https://tailwindcomponents.com/',
        },
        icon: 'https://tailwindcomponents.com/favicon-32x32.png',
    },
    {
        name: 'Tailwind CSS',
        categories: [programming.uiKitsAndLibraries],
        description: 'Documentation for the Tailwind CSS framework.',
        links: {
            [website]: 'https://tailwindcss.com/',
        },
        icon: 'https://tailwindcss.com/favicon-32x32.png',
    },
    {
        name: 'Tailwind Toolbox',
        categories: [programming.templates],
        description:
            'Open source starter templates and components, a directory of handy building kits, generators, plugins and useful tools to kick start your Tailwind CSS project.',
        links: {
            [website]: 'https://tailwindtoolbox.com/',
        },
        icon: 'https://tailwindtoolbox.com/favicon-32x32.png',
    },
    {
        name: 'Tech Interview Pro',
        categories: [jobs.interviews],
        description:
            'Learn the secrets to getting a software engineering job at a big tech company. Using years of industry experience, I have condensed my knowledge to the material that is most important for passing the coding interview and landing your dream tech job.',
        links: {
            [website]: 'https://www.techseries.dev/',
        },
        icon:
            'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/59001/images/QuFIBNIRSwmZ1ZXkLmSQ_favicon.png?v=2',
        keywords: ['algorithms', 'data structures'],
    },
    {
        name: 'Tech Jobs For Good',
        categories: [jobs.boards],
        description:
            'Tech Jobs for Good helps connect software engineers to jobs at organizations working on social and environmental issues.',
        links: {
            [website]: 'https://techjobsforgood.com/',
            [twitter]: 'https://twitter.com/TechJobsforGood',
            [linkedin]: 'https://www.linkedin.com/company/tech-jobs-for-good/',
        },
        icon: 'https://techjobsforgood.com/static/jobs/T_favicon.ico',
    },
    {
        name: 'TechCrunch',
        categories: [community.blogsAndForums],
        description:
            'TechCrunch - Reporting on the business of technology, startups, venture capital funding, and Silicon Valley.',
        links: {
            [website]: 'https://techcrunch.com/',
        },
        icon: 'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32',
    },
    {
        name: 'Tech Blogs',
        categories: [community.blogsAndForums],
        description: 'This is a list of Awesome Tech Blogs. Add yourself.',
        links: {
            [website]: 'https://tech-blogs.dev/',
            [github]: 'https://github.com/MarkoDenic/awesome-tech-blogs',
        },
        icon: 'https://tech-blogs.dev/favicon-32x32.png',
    },
    {
        name: 'Templated',
        categories: [programming.templates],
        description:
            'A collection of 867 Creative Commons-licensed CSS, HTML5 and Responsive site templates created by Cherry, Doni, AJ, and co.',
        keywords: [
            'templates',
            'site templates',
            'website templates',
            'freebies',
            'html5',
            'css',
            'responsive',
            'creative commons',
        ],
        links: {
            [website]: 'https://templated.co/',
        },
        icon: 'https://templated.co/assets/icons/apple-touch-icon-precomposed.png',
    },
    {
        name: 'TemplateMo',
        categories: [programming.templates],
        description:
            'Download 548+ free HTML CSS website templates that included 140+ responsive Bootstrap themes from templatemo and use them for your sites.',
        links: {
            [website]: 'https://templatemo.com/',
        },
        icon: 'https://templatemo.com/favicon.ico',
    },
    {
        name: 'Tenon',
        categories: [toolsAndUtilities.accessibility],
        description: 'Accessibility as a Service.',
        keywords: ['accessibility', 'a11y', 'testing'],
        links: {
            [website]: 'https://tenon.io/',
        },
        icon: 'https://tenon.io/icons/icon-96x96.png',
    },
    {
        name: 'Test Automation University',
        categories: [programming.learn],
        description: 'Become a test automation superstar! 🌟.',
        links: {
            [website]: 'https://testautomationu.applitools.com/',
        },
        icon: 'https://testautomationu.applitools.com/TAU-Green.png',
    },
    {
        name: 'Testing JavaScript',
        categories: [programming.learn],
        description:
            'This course will teach you the fundamentals of testing your JavaScript applications using ESlint, TypeScript, Jest, and Cypress.',
        links: {
            [website]: 'https://testingjavascript.com/',
        },
        icon: 'https://testingjavascript.com/icons/icon-96x96.png?v=7f31b6d20f32956d41d48e0891d645c4',
    },
    {
        name: 'Testing Library',
        categories: [programming.testing],
        description: 'Simple and complete testing utilities that encourage good testing practices.',
        links: {
            [website]: 'https://testing-library.com/',
        },
        icon: 'https://testing-library.com/img/octopus-32x32.png',
    },
    {
        name: 'Testing Playground',
        categories: [programming.testing],
        description: 'Simple and complete DOM testing playground that encourage good testing practices.',
        links: {
            [website]: 'https://testing-playground.com/',
        },
        icon: 'https://testing-playground.com/72-production.3633b358.png',
    },
    {
        name: 'TestingWhiz',
        categories: [programming.testing],
        description:
            'Experience effective test automation of web & mobile apps with an easy & intuitive codeless end-to-end software testing tool, TestingWhiz. Download 30-days free trial.',
        links: {
            [website]: 'https://www.testing-whiz.com/',
        },
        icon: 'https://www.testing-whiz.com/favicon.ico',
    },
    {
        name: 'Themeselection',
        categories: [programming.templates],
        description:
            ' Selected high quality, modern design, professional and easy-to-use Free Admin Dashboard Template, HTML Themes and UI Kits to create your applications faster.',
        keywords: ['HTML', 'css', 'Admin template', 'bootstrap', 'Vuejs admin templates', 'UI kits', 'Freebies'],
        links: {
            [website]: 'https://themeselection.com/',
            [github]: 'https://github.com/themeselection',
            [twitter]: 'https://twitter.com/Theme_Selection',
            [youtube]: 'https://www.youtube.com/channel/UCuryo5s0CW4aP83itLjIdZg/featured',
        },
        icon: 'https://themeselection.com/wp-content/uploads/2018/07/favicon.ico',
    },
    {
        name: 'The A11Y Project',
        categories: [toolsAndUtilities.accessibility],
        description: 'The A11Y Project is a community-driven effort to make digital accessibility easier.',
        links: {
            [website]: 'https://www.a11yproject.com/',
        },
        icon: 'https://www.a11yproject.com/apple-touch-icon.png',
    },
    {
        name: 'The Art of Product',
        categories: [indieHacking.podcasts],
        description: 'Ben and Derrick chat weekly about building software companies.',
        links: {
            [website]: 'https://artofproductpodcast.com/',
        },
        icon:
            'https://assets.fireside.fm/file/fireside-images/podcasts/images/6/6fccc249-743a-4298-a664-d8d863346db9/touch_icon_ipad.png?v=2',
    },
    {
        name: 'The Changelog',
        categories: [programming.podcasts],
        description: 'News and podcasts for developers.',
        links: {
            [website]: 'https://changelog.com/',
        },
        icon: 'https://changelog.com/favicon.ico',
    },
    {
        name: 'The Coding Interview',
        categories: [jobs.interviews],
        description:
            'Everything you need to ace the coding interview all in one place. Crack the coding interview with just 5 minutes of preparation a day.',
        links: {
            [website]: 'https://www.thecodinginterview.com/',
        },
        icon: 'https://uploads-ssl.webflow.com/5f17477084d0f15f5288e7d1/5f23f0b1139fc4dfad8b714f_favicon.png',
    },
    {
        name: 'The Coding Train',
        categories: [programming.youtubeChannels],
        description:
            'All aboard! The Coding Train is on its way with creative coding video tutorials on subjects ranging from the basics of programming languages like JavaScript to algorithmic art, machine learning, simulation, generative poetry, and more. Choo choo!',
        keywords: ['java javascript processing teaching programming beginner tutorial coding challenges art'],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'The Future of Programming Languages at the Confluence of Paradigms',
        categories: [programming.youtubeChannels],
        description:
            'Talk on The Future of Programming Languages at the Confluence of Paradigms by Robert "Uncle Bob" Martin',
        links: {
            [youtube]: 'https://www.youtube.com/watch?v=ya1xDCCMh7g',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'The Hammerstone Podcast',
        categories: [indieHacking.podcasts],
        description:
            "Listen in on Sean's and Aaron's weekly conversation. No intro, no editing, no music. Proudly hosted on transistor.fm!",
        links: {
            [website]: 'https://hammerstone.dev/podcast',
        },
        icon: '',
    },
    {
        name: 'The Net Ninja',
        categories: [programming.youtubeChannels, programming.learn],
        links: {
            [website]: 'https://www.thenetninja.co.uk/',
            [youtube]: 'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg',
        },
        description:
            'Black-belt your web skills. Learn JavaScript, CSS, Node.js, React, Vue.js, Firebase, HTML & more.',
        keywords: [
            'html css javascript tutorials "web design" "web development" development "front-end development" wordpress mvc "responsive design" "beginner html" "beginner ...',
        ],
        icon: 'https://www.thenetninja.co.uk/favicon.ico',
    },
    {
        name: 'Thirus',
        categories: [programming.youtubeChannels],
        description:
            'Thirus (pronounced "thigh-rus") is an effort to bring hundreds of simple web development tips and tutorials together that you can consume regularly on your coding journey. I am Shruti Balasa - the owner of this channel. I\'m a Full Stack Web Developer, Mentor, Course Creator, Tech Speaker and now a Youtuber from Bangalore, India.',
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCDQTzZ871T7uJpx9yeMPhAw',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'This VS That',
        categories: [programming.learn],
        links: {
            [website]: 'https://thisthat.dev/',
        },
        description: 'What is the difference between ___ and ___ in the front-end development?',
        keywords: ['CSS', 'DOM', 'HTML', 'JavaScript', 'React', 'TypeScript'],
        icon: 'https://thisthat.dev/assets/favicon.png',
    },
    {
        name: 'TinyPNG',
        categories: [assets.images],
        description:
            'Make your website faster and save bandwidth. TinyPNG optimizes your PNG images by 50-80% while preserving full transparency!',
        links: {
            [website]: 'https://tinypng.com/',
        },
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
    },
    {
        name: 'TinySeed',
        categories: [indieHacking.platforms],
        description:
            'TinySeed is the first startup accelerator designed for founders who would traditionally bootstrap.',
        links: {
            [website]: 'https://tinyseed.com/',
        },
        icon:
            'https://images.squarespace-cdn.com/content/v1/5c3f602b96e76f6da92e8ded/1547762430194-TCY13GQ3WL1GEQQCNIBJ/ke17ZwdGBToddI8pDm48kDaNRrNi77yKIgWxrt8GYAFZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7WT60LcluGrsDtzPCYop9hMAtVe_QtwQD93aIXqwqJR_bmnO89YJVTj9tmrodtnPlQ/favicon.ico?format=100w',
    },
    {
        name: 'tl;dr Marketing',
        categories: [toolsAndUtilities.seo],
        description:
            'Get the latest breaking news and trends about SEO, paid media and social media without all the fluff.',
        links: {
            [website]: 'https://tldrmarketing.com/',
        },
        icon: 'https://tldrmarketing.com/wp-content/uploads/2020/05/cropped-tldr-logo-1000-32x32.png',
    },
    {
        name: 'toast.log',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            "See errors, warnings, and logs as they happen on your site — without having to open the browser’s console. Find bugs you didn't know were there via notifications in our unique toast format.",
        links: {
            [website]: 'https://toastlog.com/',
        },
        icon: 'https://toastlog.com/img/favicon/favicon-32x32.png',
    },
    {
        name: 'Tooplate',
        categories: [programming.templates],
        description:
            'Download free HTML CSS website templates from Tooplate and use them for any purpose. Our templates are easy to modify and use for any website.',
        links: {
            [website]: 'https://www.tooplate.com/',
        },
        icon: 'https://www.tooplate.com/favicon.ico',
    },
    {
        name: 'Toptal',
        categories: [jobs.freelancing],
        description:
            'Toptal enables start-ups, businesses, and organizations to hire freelancers from a growing network of top talent in the world. Find quality talent to work full-time, part-time, or hourly who will seamlessly integrate into your team.',
        links: {
            [website]: 'https://www.toptal.com/',
        },
        icon: 'https://frontier-assets.toptal.com/686b47667da72620ad6f4ad7ff314764.png',
    },
    {
        name: 'Traversy Media',
        categories: [programming.youtubeChannels],
        description:
            'Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and much more.',
        keywords: [
            '"Programming Tutorials" "Web Development Tutorials" "Web Development Videos" "Web Design Tutorials" "Learn Web Design" "Learn Programming"',
        ],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Transform Tools',
        categories: [toolsAndUtilities.general],
        description: 'A polyglot web converter.',
        keywords: [
            'Big Query',
            'Flow',
            'Go Bson',
            'Go',
            'GraphQL',
            'HTML',
            'JSDoc',
            'JSON Schema',
            'JSON',
            'Kotlin',
            'MobX-State-Tree Model',
            'Mongoose Schema',
            'MySQL',
            'React Native',
            'React PropTypes',
            'Rust Serde',
            'SVG',
            'Sarcastic',
            'Scala Case Class',
            'TailwindCSS',
            'TypeScript',
            'YAML',
            'io-ts',
        ],
        links: {
            [github]: 'https://github.com/ritz078/transform',
            [website]: 'https://transform.tools',
        },
    },
    {
        name: 'Treehouse',
        categories: [programming.learn],
        description:
            'High-quality, affordable video courses for coding and design. Build a website, learn a new coding language, and more.',
        links: {
            [website]: 'https://teamtreehouse.com/',
        },
        icon:
            'https://static.teamtreehouse.com/assets/apple-touch-icon-76x76-precomposed-7283cd247847d1f21be0e79c52e3524c89adabf69cfc331046319f4ab19be058.png',
    },
    {
        name: 'TypingClub',
        categories: [toolsAndUtilities.typing],
        description:
            "Learn touch typing online using TypingClub's free typing courses. It includes 650 typing games, typing tests and videos.",
        keywords: ['typing', 'typing tutorial', 'free touch typing tutorial', 'touch typing', 'typing game'],
        links: {
            [website]: 'https://www.typingclub.com/',
        },
        icon: 'https://static.typingclub.com/m/corp2/img/favicon.png',
    },
]
