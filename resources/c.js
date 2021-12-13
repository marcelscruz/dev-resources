const {
    jobs,
    uiDesign,
    assets,
    infrastructure,
    programming,
    toolsAndUtilities,
    indieHacking,
    community,
} = require('../constants/categories')
const {
    website,
    youtube,
    github,
    twitter,
    discord,
    instagram,
    productHunt,
    facebook,
    gumroad,
} = require('../constants/links')

module.exports = [
    {
        name: 'CakeResume',
        categories: [jobs.resumeBuilders],
        description:
            'Build an impressive resume and land that dream job. View online or download the PDF for FREE! CakeResume provides more than 50 resume templates and 1,000+ resume samples to help you make a professional resume in 10 minutes.',
        links: {
            [website]: 'https://www.cakeresume.com/',
        },
        icon: 'https://www.cakeresume.com/favicons/favicon-96x96.png',
    },
    {
        name: 'Canva',
        categories: [uiDesign.color, assets.fonts, programming.templates],
        description:
            'Canva is a graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content. ',
        links: {
            [website]: 'https://www.canva.com/',
        },
        icon: 'https://www.canva.com/favicon.ico',
    },
    {
        name: 'CanvasJs',
        categories: [programming.charts],
        description:
            'HTML5 JavaScript Charts built on top of HTML5 Canvas Element. Renders across devices & is 10x faster than JavaScript Charting libraries based on SVG.',
        links: {
            [website]: 'https://canvasjs.com/',
        },
        icon: 'https://canvasjs.com/wp-content/uploads/images/favicon/canvasjs-favicon-16x16.png?v=1.1',
    },
    {
        name: 'Carbon',
        categories: [programming.codeSnippets],
        description: 'Carbon is the easiest way to create and share beautiful images of your source code.',
        links: {
            [website]: 'https://carbon.now.sh',
        },
        icon: 'https://carbon.now.sh/static/brand/apple-touch-icon.png',
    },
    {
        name: 'Cassandra',
        categories: [infrastructure.databases],
        description:
            'Cassandra is a free tool which is designed to manage a large amount of data across a wide range of servers. The tool offers support for replicating across multiple datacenters.',
        links: {
            [website]: 'http://cassandra.apache.org/',
        },
        icon: 'https://cassandra.apache.org/favicon.ico',
    },
    {
        name: 'Chakra',
        categories: [programming.uiKitsAndLibraries],
        description: 'Simple, Modular and Accessible UI Components for your React Applications.',
        links: {
            [website]: 'https://chakra-ui.com/',
        },
        icon: 'https://chakra-ui.com/favicon.png',
    },
    {
        name: 'Chart.js',
        categories: [programming.charts],
        description:
            'Simple, clean and engaging HTML5 based JavaScript charts. Chart.js is an easy way to include animated, interactive graphs on your website for free.',
        links: {
            [website]: 'https://www.chartjs.org/',
        },
        icon: 'https://www.chartjs.org/favicon.ico',
    },
    {
        name: 'Chartist',
        categories: [programming.charts],
        description: 'Create responsive, scalable and good looking charts with chartist.js.',
        links: {
            [website]: 'https://gionkunz.github.io/chartist-js/',
        },
        icon: 'https://gionkunz.github.io/chartist-js/favicon.ico',
    },
    {
        name: 'Cheatography',
        categories: [programming.docsAndCheatsheets],
        description: 'Find thousands of incredible, original programming cheat sheets, all free to download.',
        links: {
            [website]: 'https://cheatography.com/',
        },
        icon: 'https://cheatography.com/images/cheatography-iphone.png',
    },
    {
        name: 'Cheat Sheet Maker',
        categories: [programming.docsAndCheatsheets],
        description: 'Create and share cheat sheets to study and work with cheat sheet maker.',
        links: {
            [website]: 'https://cheatsheetmaker.com/',
        },
    },
    {
        name: 'Check My Links',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'Check My Links is a link checker that crawls through your webpage and looks for broken links.',
        links: {
            [website]:
                'https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf?hl=en',
        },
        icon: 'https://ssl.gstatic.com/chrome/webstore/images/icon_96px.png',
    },
    {
        name: 'Checka11y.css',
        categories: [toolsAndUtilities.accessibility],
        description: 'A CSS stylesheet to quickly highlight a11y concerns. - jackdomleo7/Checka11y.css.',
        links: {
            [website]: 'https://github.com/jackdomleo7/Checka11y.css',
        },
        icon: 'https://github.githubassets.com/favicons/favicon-dark.svg',
    },
    {
        name: 'Checklist Design',
        categories: [toolsAndUtilities.general],
        description:
            'Checklist Design is a curated list of checklists ranging from website pages, to UI components, all the way to branding assets.',
        links: {
            [website]: 'https://www.checklist.design/',
        },
        icon:
            'https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/5f33ce7fe8e7463f6c74c26f_checklist-web-image.png',
    },
    {
        name: 'Choc UI',
        categories: [programming.uiKitsAndLibraries],
        description:
            'Choc UI is a set of accessible and reusable components that are commonly used in web applications.',
        links: {
            [website]: 'https://choc-ui.tech/',
            [twitter]: 'https://twitter.com/choc_ui',
            [discord]: 'https://discord.gg/XcD8bNv7Ne',
            [github]: 'https://github.com/anubra266/choc-ui',
        },
        icon: 'https://choc-ui.tech/favicon-32x32.png',
    },
    {
        name: 'Chrome',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Get more done with the new Google Chrome. A more simple, secure, and faster web browser than ever, with Google’s smarts built-in. Download now.',
        links: {
            [website]: 'https://www.google.com/chrome/',
        },
        icon: 'https://www.google.com/chrome/static/images/favicons/favicon-96x96.png',
    },
    {
        name: 'Chrome Canary',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Get on the bleeding edge of the web with Chrome Canary designed for experienced developers and updated nightly.',
        links: {
            [website]: 'https://www.google.com/chrome/canary/',
        },
        icon: 'https://www.google.com/chrome/static/images/favicons/favicon-96x96.png',
    },
    {
        name: 'Chrome Dev',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Google Chrome for developers was built for the open web. Test cutting-edge web platform APIs and developer tools that are updated weekly.',
        links: {
            [website]: 'https://www.google.com/chrome/dev/',
        },
        icon: 'https://www.google.com/chrome/static/images/favicons/favicon-96x96.png',
    },
    {
        name: 'Clerk.dev',
        categories: [infrastructure.auth],
        description:
            "Authentication and user management for developers that's simple, secure, and scalable with any platform or language.",
        keywords: ['react', 'next.js', 'auth', ' user management', 'react auth', 'next.js auth', 'javascript auth'],
        links: {
            [website]: 'https://clerk.dev',
        },
        icon: 'https://clerk.dev/favicon/favicon-32x32.png',
    },
    {
        name: 'Clideo',
        categories: [assets.videos],
        description:
            "Make a video by combining photos, videos, GIFs and music together — it's free & online. Use it as a Facebook or YouTube Cover, post it on Instagram or Twitter.",
        keywords: [
            'free video maker',
            'youtube',
            'video creator',
            'how to make a video',
            'online video maker',
            'music',
            'windows',
            'download',
            'easy',
            'photo',
            'create a video',
            'gif',
            'picture',
            'instagram',
            'facebook cover',
            'clip',
            'mac',
        ],
        links: {
            [website]: 'https://clideo.com/video-maker',
        },
        icon: 'https://static.clideo.com/assets/images/favicon/64x64.png',
    },
    {
        name: 'CLion',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description: 'A powerful IDE from JetBrains helps you develop in C and C++ on Linux, macOS and Windows.',
        links: {
            [website]: 'https://www.jetbrains.com/clion/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Cloudflare Pages',
        categories: [infrastructure.serverless, infrastructure.hosting],
        description:
            'Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites.',
        links: {
            [website]: 'https://pages.cloudflare.com/',
        },
        icon: 'https://pages.cloudflare.com/resources/logo/logo.svg',
        keywords: ['jamstack', 'serverless', 'hosting', 'development'],
    },
    {
        name: 'Cloudflare Workers',
        categories: [infrastructure.serverless],
        description:
            'Cloudflare workers allow you to host serverless code. The free plan is also ideal for static site hosting',
        links: {
            [website]: 'https://workers.cloudflare.com/',
        },
        icon: 'https://workers.cloudflare.com/favicon.ico',
    },
    {
        name: 'cmd challenge',
        categories: [toolsAndUtilities.commandLine],
        description: 'Learn the command line.',
        links: {
            [website]: 'https://cmdchallenge.com/',
            [twitter]: 'https://twitter.com/thecmdchallenge',
        },
        icon: 'https://cmdchallenge.com/favicon.ico',
    },
    {
        name: 'Code to go',
        categories: [programming.codeSnippets],
        description: 'Javascript code to go: Find updated snippets for common JavaScript use cases.',
        links: {
            [website]: 'https://codetogo.io/',
        },
        icon: 'https://codetogo.io/favicons/favicon-32x32.png',
    },
    {
        name: 'Code Winds',
        categories: [programming.podcasts],
        description:
            'CodeWinds - Leading edge live and online developer training - in-person, public or private classes, webinars, video courses, resources, tutorials for fullstack web developers. Featuring javascript, React.js, Node.js, Redux, Functional programming, Reactive programming, RxJS, and related topics.',
        keywords: [
            'web',
            'developer',
            'training',
            'fullstack',
            'live classes',
            'private classes',
            'custom classes',
            'webinars',
            'screencasts',
            'video',
            'audio',
            'online training',
            'tutorials',
            'video tutorials',
            'classes',
            'react.js',
            'reactjs',
            'javascript',
            'js',
            'es6',
            'es7',
            'node.js',
            'nodejs',
            'iojs',
            'html',
            'html5',
            'functional programming',
            'reactive programming',
            'rxjs',
            'redux',
        ],
        links: {
            [website]: 'http://codewinds.com/podcast.html',
        },
        icon: 'http://codewinds.com/assets/favicon-64.png',
    },
    {
        name: 'Codecademy',
        categories: [programming.learn],
        description:
            'Learn the technical skills you need for the job you want. As leaders in online education and learning to code, we’ve taught over 45 million people using a tested curriculum and an interactive learning environment. Start with HTML, CSS, JavaScript, SQL, Python, Data Science, and more.',
        links: {
            [website]: 'https://www.codecademy.com/',
        },
        icon: 'https://www.codecademy.com/favicon.ico',
    },
    {
        name: 'CodeCombat',
        categories: [programming.learn],
        description:
            'Learn programming languages by playing the Role Playing Game. Different languages, beginner-friendly learning curve.',
        keywords: [
            'Python',
            'JavaScript',
            'CoffeeScript',
            'Lua',
            'C++',
            'Java',
        ],
        links: {
            [website]: 'https://www.codecombat.com/',
        },
        icon: 'https://www.codecombat.com/favicon.ico',
    },
    {
        name: 'CodeChef',
        categories: [programming.codeChallenges],
        description:
            "Learn competitive programming with the help of CodeChef's coding competitions. Take part in these online coding contests to level up your skills.",
        keywords: [
            'programming competition',
            'programming contest',
            'online programming',
            'online computer programming',
        ],
        links: {
            [website]: 'https://www.codechef.com/',
        },
        icon: 'https://www.codechef.com/misc/favicon.ico',
    },
    {
        name: 'Codeconia',
        categories: [community.blogsAndForums],
        description: 'Learn programming with Codeconia.',
        links: {
            [website]: 'https://codeconia.com/',
        },
        icon: 'https://codeconia.com/wp-content/uploads/2020/11/cropped-favicon-32x32.png',
    },
    {
        name: 'CodeKit',
        categories: [toolsAndUtilities.general],
        description:
            'CodeKit is a Mac app that makes it easy to use modern web development tools like npm, Babel, Sass, JavaScript bundling, image optimization, and ESLint.',
        links: {
            [website]: 'https://codekitapp.com/',
        },
        icon: 'https://codekitapp.com/images/favicon-32.png?ckcachebust=627961015',
    },
    {
        name: 'Codementor',
        categories: [jobs.freelancing],
        description:
            'Codementor is the largest community for developer mentorship and an on-demand marketplace for software developers. Get instant coding help, build projects faster, and read programming tutorials from our community of developers.',
        links: {
            [website]: 'https://www.codementor.io/',
        },
        icon: 'https://assets.codementor.io/icons/favicon-96x96.png',
    },
    {
        name: 'CodeMyUI',
        categories: [programming.codeSnippets],
        description:
            'Handpicked collection of Web Design & UI Inspiration with Code Snippets. ✅ GIF preview ✅ HTML CSS copy paste code.',
        links: {
            [website]: 'https://codemyui.com/',
        },
        icon: 'https://i1.wp.com/codemyui.com/wp-content/uploads/2017/02/cropped-logo-1.png?fit=32%2C32&ssl=1',
    },
    {
        name: 'CodeNewbie',
        keywords: ['careers', 'development', 'jobs'],
        categories: [programming.podcasts],
        description: 'Stories from people on their coding journey.',
        links: {
            [website]: 'https://www.codenewbie.org/podcast/',
        },
        icon: 'https://s3.amazonaws.com/codenewbie-assets/codenewbie-favicon-new.png',
    },
    {
        name: 'CodePen',
        categories: [programming.codeSnippets, toolsAndUtilities.editorsAndExtensions],
        description:
            'An online code editor, learning environment, and community for front-end web development using HTML, CSS and JavaScript code snippets, projects, and web applications.',
        keywords: [
            'javascript',
            'css',
            'editor',
            'code',
            'community',
            'social',
            'frontend',
            'front',
            'end',
            'developer',
            'designer',
            'jobs',
            'hiring',
            'deploy',
            'test',
            'demo',
            'spa',
            'single',
            'page',
            'application',
            'web',
            'html',
            'modern',
            'ide',
            'browser',
            'pen',
            'codepen',
        ],
        links: {
            [website]: 'https://codepen.io/',
        },
        icon:
            'https://cpwebassets.codepen.io/assets/favicon/favicon-touch-de50acbf5d634ec6791894eba4ba9cf490f709b3d742597c6fc4b734e6492a5a.png',
    },
    {
        name: 'CodePen Radio',
        categories: [programming.podcasts],
        description:
            "A podcast all about what it's like running a small web software business. The good, the bad, and the ugly.",
        links: {
            [website]: 'https://blog.codepen.io/radio/',
        },
        icon: 'https://blog.codepen.io/favicon.ico',
    },
    {
        name: 'Codepen radio',
        categories: [programming.podcasts],
        description:
            "A podcast all about what it's like running a small web software business. The good, the bad, and the ugly.",
        links: {
            [website]: 'https://blog.codepen.io/radio/',
        },
        icon:
            'https://cpwebassets.codepen.io/assets/favicon/favicon-touch-de50acbf5d634ec6791894eba4ba9cf490f709b3d742597c6fc4b734e6492a5a.png',
    },
    {
        name: 'Codepip',
        categories: [programming.learn],
        description: 'Learn to code by playing games.',
        links: {
            [website]: 'https://codepip.com',
        },
        icon: 'https://codepip.com/favicon.ico',
    },
    {
        name: 'Coderbyte',
        categories: [programming.codeChallenges],
        description:
            'Improve your coding skills with our library of 300+ challenges and prepare for coding interviews with content from leading technology companies.',
        keywords: [
            'coderbyte',
            'coder byte',
            'coding',
            'coding',
            'bootcamp',
            'code school',
            'programming challenges',
            'practice coding',
            'algorithm',
            'math',
            'puzzles',
            'test you programming skills',
            'codetbytes',
        ],
        links: {
            [website]: 'https://coderbyte.com/',
        },
        icon: 'https://coderbytestaticimages.s3.amazonaws.com/favicon_2.png',
    },
    {
        name: 'CodeSandbox',
        categories: [programming.codeSnippets, toolsAndUtilities.editorsAndExtensions],
        description:
            'CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster.',
        keywords: [
            'react',
            'codesandbox',
            'editor',
            'vue',
            'angular',
            'ide',
            'code',
            'javascript',
            'playground',
            'sharing',
            'spa',
            'single',
            'page',
            'application',
            'web',
            'application',
            'frontend',
            'front',
            'end',
        ],
        links: {
            [website]: 'https://codesandbox.io/',
        },
        icon: 'https://codesandbox.io/favicon.ico',
    },
    {
        name: 'Codeshare',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'Share code in real-time with developers in your browser. An online code editor for interviews, troubleshooting, teaching.',
        links: {
            [website]: 'https://codeshare.io/',
        },
        icon: 'https://codeshare.io/favicon.ico',
    },
    {
        name: 'CodeTriage',
        categories: [community.hacktoberfest],
        description:
            'Discover the easiest way to get started contributing to open source. Over 62,317 devs are helping 6,584 projects with our free, community developed tools',
        links: {
            [website]: 'https://www.codetriage.com/',
        },
        icon:
            'https://www.codetriage.com/assets/favicon-3f3e475345be27562adee9d8e596a032785e3efd4496111cab0b1fe0a81ad722.ico',
    },
    {
        name: 'Codewars',
        categories: [programming.codeChallenges],
        description:
            'Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your highest potential.',
        keywords: [
            'codewars',
            'code kata',
            'kata',
            'code gym',
            'coding',
            'code practice',
            'ruby',
            'javascript',
            'coffeescript',
            'web development',
            'software development',
            'dojo',
        ],
        links: {
            [website]: 'https://www.codewars.com/',
        },
        icon: 'https://www.codewars.com/favicon.ico',
    },
    {
        name: 'Codewell',
        categories: [programming.learn],
        description: 'Improve your HTML and CSS skills by practicing on real world design templates.',
        links: {
            [website]: 'https://www.codewell.cc/',
        },
        icon: 'https://www.codewell.cc/favicon.ico',
        keywords: ['frontend', 'html', 'css', 'flexbox', 'grid', 'javascript'],
    },
    {
        name: 'Coding Tech',
        categories: [programming.youtubeChannels],
        description:
            "Coding Tech partners with the tech conferences around the world that provided Coding Tech with their EXPLICIT permissions to republish videos on this channel. Here's the list of Conferences that provided Coding Tech with EXPLICIT written publication permissions: PyData, MLConf, Build Stuff, Code::dive, PolyConf, AmsterdamJS, React Amsterdam, ReactiveConf, Jazoon Tech Days, SFNode, CppCon, Infinite Red, GDG Lviv, Mibuso.com, You Gotta Love Frontend, React Native EU, Node Summit, NodeConfEU, ConFoo, Pixels Camp, JavaScriptLA, The Linux Foundation, Oredev Conference, Techlahoma, fitcevents. Coding Tech also re-posts content which was originally published with the Creative Commons Attribution license (reuse allowed). For business inquiries, please connect on Twitter: https://twitter.com/yuriymatso.",
        keywords: [
            'javascript python css html "machine learning" "artificial intelligence" "software development" programming',
        ],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCtxCXg-UvSnTKPOzLH4wJaQ',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'CodinGame',
        categories: [programming.codeChallenges],
        description:
            'CodinGame is a challenge-based training platform for programmers where you can improve your coding skills with fun exercises (25+ languages supported).',
        links: {
            [website]: 'https://www.codingame.com/',
        },
        icon: 'https://static.codingame.com/assets/favicon_32_32.3e3c075c.png',
    },
    {
        name: 'Codrops',
        categories: [uiDesign.inspiration],
        description:
            'Codrops is a web design and development blog that publishes articles and tutorials about the latest web trends, techniques and new possibilities.',
        links: {
            [website]: 'https://tympanus.net/codrops/',
        },
        icon: 'https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/themes/codropstheme03/favicons/favicon-196x196.png',
    },
    {
        name: 'Collect UI',
        categories: [uiDesign.inspiration],
        description:
            'Daily inspiration collected from daily ui archive and beyond. Based on Dribbble shots, hand picked, updating daily.',
        keywords: ['dailyui', 'daily ui', 'ui challenge', 'daily inspiration', 'ui inspiration'],
        links: {
            [website]: 'http://collectui.com/',
        },
        icon: 'http://collectui.com/img/favicon.ico',
    },
    {
        name: 'Colorffy',
        categories: [uiDesign.color],
        description:
            'Create many gradients and palettes or save one of many color schemes, for everyone who needs colors.',
        links: {
            [website]: 'https://colorffy.com/',
            [twitter]: 'https://twitter.com/colorffy',
            [instagram]: 'https://www.instagram.com/colorffyweb/',
            [productHunt]: 'https://www.producthunt.com/posts/colorffy',
        },
        icon: 'https://colorffy.com/img/icons/msapplication-icon-144x144.png',
    },
    {
        name: 'Color Contrast Checker',
        categories: [toolsAndUtilities.accessibility],
        description: 'Make sure your website has accessible colors.',
        links: {
            [website]: 'https://zarhasan.github.io/color-contrast-checker/',
        },
    },
    {
        name: 'Color Hunt',
        categories: [uiDesign.color],
        description:
            'Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes.',
        links: {
            [website]: 'https://colorhunt.co/',
        },
        icon: 'https://colorhunt.co/img/color-hunt-icon-ios.png',
    },
    {
        name: 'Color-hex',
        categories: [uiDesign.color],
        description:
            'Color hex is a easy to use tool to get the color codes information including color models (RGB,HSL,HSV and CMYK), css and html color codes.',
        links: {
            [website]: 'https://www.color-hex.com/',
        },
        icon: 'https://www.color-hex.com/favicon.ico',
    },
    {
        name: 'Color.review',
        categories: [toolsAndUtilities.accessibility],
        description:
            'A modern tool for exploring and finding accessible colors. Make sure that everyone can see your creations.',
        links: {
            [website]: 'https://color.review/',
        },
        icon: 'https://color.review/favicon-32x32.png',
    },
    {
        name: 'Colorlib',
        categories: [programming.templates],
        description:
            "Colorlib is the ONLY resource you'll need to start a blog using WordPress! We offer comprehensive yet easy to follow guides well suited for beginner bloggers.",
        links: {
            [website]: 'https://colorlib.com/',
        },
        icon: 'https://colorlib.com/wp/wp-content/uploads/sites/2/2014/05/ipad-colorlib.png',
    },
    {
        name: 'Colormind',
        categories: [uiDesign.color],
        description:
            'Generate color combinations in one click. Colormind creates cohesive color schemes using a deep neural net.',
        links: {
            [website]: 'http://colormind.io/',
        },
        icon: 'http://colormind.io/favicon32.gif',
    },
    {
        name: 'colors.lol',
        categories: [uiDesign.color],
        description: 'A fun way to discover interesting color combinations.',
        links: {
            [website]: 'https://colors.lol/',
        },
        icon: 'https://colors.lol/assets/favicon/favicon-32x32.png',
    },
    {
        name: 'Colorsinspo',
        categories: [uiDesign.color],
        description:
            'Colorsinspo is all in one resource to find everything about colors with extreme ease. Also, you will get Freebies, Inspirations, Color Tools, Gradients, and thousands of trendy hand-picked color palettes.',
        links: {
            [website]: 'https://colorsinspo.com/',
        },
        icon: 'https://colorsinspo.com/resources/img/colorsinspo-favicon.png',
    },
    {
        name: 'ColorSpace',
        categories: [uiDesign.color],
        description:
            'Here you can find the perfect matching color scheme for your next project! Generate nice color palettes, color gradients and much more! Your space for everything that has to do with color!',
        links: {
            [website]: 'https://mycolor.space/',
        },
        icon: 'https://mycolor.space/favicon5.png',
    },
    {
        name: 'ColorZilla',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'Advanced Eyedropper, Color Picker, Gradient Generator and more.',
        links: {
            [website]: 'https://www.colorzilla.com/',
        },
        icon: 'https://www.colorzilla.com/favicon.ico',
    },
    {
        name: 'Commit Your Code!',
        categories: [programming.podcasts],
        description:
            'Commit Your Code is about motivating and inspiring developers of all levels to reach their goals in tech. We will be sharing stories and interviewing developers that have gone through this and made it to their dream jobs!',
        keywords: [
            'podcast hosting',
            'free podcast hosting',
            'make a podcast',
            'making a podcast',
            'create a podcast',
            'creating a podcast',
            'podcast sponsorships',
            'sponsor a podcast',
            'free',
            'audio',
            'recording',
            'audio clip',
            'anchor',
            'podcasts',
            'voice',
            'microphone',
            'podcast',
            'podcast creation',
            'record',
            'conversation',
            'discussion',
            'talk',
            'talking',
            'radio',
            'public radio',
            'npr',
            'startup',
            'talk radio',
        ],
        links: {
            [website]: 'https://anchor.fm/commityourcode',
        },
        icon: 'https://d12xoj7p9moygp.cloudfront.net/favicon/favicon-96x96.png',
    },
    {
        name: 'Community List',
        categories: [indieHacking.marketing],
        description:
            'Finding relevant communities takes hours and manual googling sucks. With Community List, quickly find relevant communities with all the data you need in one place.',
        links: {
            [website]: 'https://getcommunitylist.com/',
        },
        icon: 'https://getcommunitylist.com/assets/images/favicon.png?v=1961bf32',
    },
    {
        name: 'Compare pixels',
        categories: [uiDesign.utilities],
        description: 'Use this tool to quickly check differences between design mockups and the live website.',
        keywords: [
            'feedback',
            'website',
            'share',
            'link',
            'live',
            'visual',
            'comment',
            'sticky',
            'note',
            'pin',
            'server',
            'web',
        ],
        links: {
            [website]: 'https://usepastel.com/compare-pixels',
        },
        icon: 'https://usepastel.com/static/images/favicon.png',
    },
    {
        name: 'Compressor',
        categories: [assets.images],
        description:
            'Optimize and compress your jpeg and png images online. Compressor is a lossy and lossless photo compression tool.',
        links: {
            [website]: 'https://compressor.io/',
        },
        icon: 'https://compressor.io/favicon.ico',
    },
    {
        name: 'Computer Science courses with video lectures',
        categories: [programming.learn],
        description: 'List of Computer Science courses with video lectures.',
        links: {
            [github]: 'https://github.com/Developer-Y/cs-video-courses',
        },
        icon: 'https://github.githubassets.com/apple-touch-icon-114x114.png',
    },
    {
        name: 'Contrast Ratio',
        categories: [toolsAndUtilities.accessibility],
        description: 'Easily calculate color contrast ratios.',
        links: {
            [website]: 'https://contrast-ratio.com/',
        },
    },
    {
        name: 'Control',
        categories: [assets.illustrations],
        description: 'Combo set of 108 customizable illustrations.',
        links: {
            [website]: 'https://control.rocks/',
        },
        icon: 'https://control.rocks/img/favicon-32x32.png',
    },
    {
        name: 'Conversion Strategies Database',
        categories: [indieHacking.marketing],
        description:
            'Join 881 smart founders and SaaS companies who are growing their sales with Swipe conversion strategies database.',
        links: {
            [gumroad]: 'https://gumroad.com/a/399283315/WCKkj',
        },
        icon: 'https://gumroad.com/favicon.ico',
    },
    {
        name: 'Coolors',
        categories: [uiDesign.color],
        description: 'Generate or browse beautiful color combinations for your designs.',
        keywords: [
            'color scheme',
            'scheme color',
            'color schemes',
            'color theme',
            'color palette',
            'color themes',
            'color palettes',
            'color combinations',
            'color',
            'colors',
            'palettes',
            'hex color wheel',
            'pastel color palette',
            'color wheel',
            'color combination',
            'color pallete',
            'color names',
            'web color schemes',
            'color wheel generator',
            'extract color palette from image',
            'random color palette generator',
            'color schemes generator',
            'ui color palette generator',
            'pretty colors',
            'vintage color',
            'color palette from image',
        ],
        links: {
            [website]: 'https://coolors.co/',
        },
        icon: 'https://coolors.co/assets/img/favicon.png',
    },
    {
        name: 'CopyAI',
        categories: [toolsAndUtilities.writing, indieHacking.utilities],
        description:
            "We have created the world's most advanced artificial intelligence copywriter that enables you to create marketing copy in seconds!",
        links: {
            [website]: 'https://www.copy.ai/',
        },
        icon:
            'https://assets-global.website-files.com/5f4ec532319820f7c2ccd7a3/5f55620b7b806770e6becea2_32x32%20favico.png',
    },
    {
        name: 'Copy Paste CSS',
        categories: [uiDesign.inspiration],
        description:
            'Find inspiration with a collection of simple CSS elements to copy and paste ( button, box-shadow, text-input, color palette )',
        links: {
            [website]: 'https://copy-paste-css.com/',
        },
        icon: 'https://copy-paste-css.com/favicon.ico',
    },
    {
        name: 'CoreUI',
        categories: [programming.templates, assets.icons],
        description:
            'Time is our most valuable asset, that’s why we want to help you save it by creating simple, customizable, easy to learn UI components and Admin Templates which significantly cut development time. CoreUI lets you save thousands of priceless hours because it offers everything you need to create modern, beautiful, and responsive applications.',
        links: {
            [website]: 'https://coreui.io/',
        },
        icon: 'https://coreui.io/images/favicons/favicon-96x96.png',
    },
    {
        name: 'CouchDB',
        categories: [infrastructure.databases],
        description:
            'CouchDB is open-source software that is based on the common standards to access your important data. It stores data on your server or with a leading service provider of your choice.',
        links: {
            [website]: 'https://couchdb.apache.org/',
        },
        icon: 'https://couchdb.apache.org/favicon-32x32.png',
    },
    {
        name: 'Coursera',
        categories: [programming.learn],
        description:
            'Join Coursera for free and learn online. Build skills with courses from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM. Advance your career with degrees, certificates, Specializations, &amp; MOOCs in data science, computer science, business, and dozens of other topics.',
        links: {
            [website]: 'https://www.coursera.org/',
        },
        icon: 'https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/v2/favicon-v2-96x96.png',
    },
    {
        name: 'CreativesFeed',
        categories: [programming.codeSnippets],
        description:
            'CreativesFeed works to share the best free code snippets and web development resources online. We create free, downloadable code snippets and provide tutorials on web design and development to help agencies and individuals learn and grow!',
        links: {
            [website]: 'https://creativesfeed.com/topics/code-snippets/',
        },
        icon: 'https://creativesfeed.com/icons/apple-icon-76x76.png',
    },
    {
        name: 'Cruip',
        categories: [programming.templates],
        description:
            'Cruip is a gallery of premium and free HTML, Vue.js and React landing page templates for startups and SaaS.',
        links: {
            [website]: 'https://cruip.com/',
        },
        icon: 'https://cruip.com/wp-content/themes/cruip/dist/images/favicon-96x96.png',
    },
    {
        name: 'CS50',
        categories: [programming.youtubeChannels],
        description:
            "This is CS50, Harvard University's introduction to the intellectual enterprises of computer science and the art of programming. Demanding, but definitely doable. Social, but educational. A focused topic, but broadly applicable skills. CS50 is the quintessential Harvard (and Yale!) course.",
        keywords: ['cs50 harvard computer science david j. malan'],
        links: {
            [youtube]: 'https://www.youtube.com/user/cs50tv',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'CSS Diner',
        categories: [programming.learn],
        description: 'A fun game to help you learn and practice CSS selectors.',
        links: {
            [website]: 'https://flukeout.github.io/',
        },
        icon: 'https://flukeout.github.io/favicon.png',
    },
    {
        name: 'CSS Gradient',
        categories: [uiDesign.color],
        description:
            'As a free css gradient generator tool, this website lets you create a colorful gradient background for your website, blog, or social media profile.',
        links: {
            [website]: 'https://cssgradient.io/',
        },
        icon: 'https://cssgradient.io/images/favicon-23859487.png',
    },
    {
        name: 'CSS Layout',
        description: 'A collection of popular layouts and patterns made with CSS',
        categories: [programming.codeSnippets, programming.learn],
        keywords: ['CSS layout', 'CSS pattern', 'CSS UI pattern'],
        links: {
            [website]: 'https://csslayout.io/',
        },
        icon: 'https://csslayout.io/assets/favicon.png',
    },
    {
        name: 'CSS Layout News',
        categories: [programming.newsletters],
        description: 'A weekly collection of tutorials, news and information on all things CSS Layout.',
        links: {
            [website]: 'https://csslayout.news/',
        },
        icon:
            'https://dxj7eshgz03ln.cloudfront.net/production/publication/publication_icon/1883/apple_touch_76_c13a8beb-a086-4874-b39b-98081897f1fc.png',
    },
    {
        name: 'CSS Nectar',
        categories: [uiDesign.inspiration],
        description:
            'CSS Nectar is a css website design showcase for web designers and developers. Every day we select the best of the web design and add it to our gallery. Submit or suggest a website.',
        links: {
            [website]: 'https://cssnectar.com//',
        },
        icon: 'https://i0.wp.com/cssnectar.com/wp-content/uploads/2016/04/favicon.png?fit=47%2C47&ssl=1',
    },
    {
        name: 'CSS Reference',
        categories: [programming.docsAndCheatsheets],
        description:
            'CSS Reference is a free visual guide to CSS. It features the most popular properties, and explains them with illustrated and animated examples.',
        links: {
            [website]: 'https://cssreference.io/',
        },
        icon: 'https://cssreference.io/favicons/favicon-32x32.png',
    },
    {
        name: 'CSS Scan',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Goodbye to "Inspect Element" — Visualize the CSS of any element you hover over, instantly, and copy its entire rules with a single click.',
        links: {
            [website]: 'https://getcssscan.com/',
            [facebook]: 'https://www.facebook.com/cssscan/',
            [twitter]: 'https://twitter.com/cssscan',
            [instagram]: 'https://instagram.com/cssscan',
        },
        icon: 'https://getcssscan.com/favicon-32x32.png',
    },
    {
        name: 'CSS Weekly',
        categories: [programming.newsletters],
        description: 'Weekly e-mail roundup of latest css articles, tutorials, tools and experiments.',
        links: {
            [website]: 'https://css-weekly.com/',
        },
        icon: 'https://css-weekly.com/favicon.ico',
    },
    {
        name: 'CSS-Tricks',
        categories: [programming.learn, programming.newsletters, programming.codeSnippets],
        description: 'CSS-Tricks is a website about websites.',
        links: {
            [website]: 'https://css-tricks.com',
        },
        icon: 'https://css-tricks.com/apple-touch-icon.png',
    },
    {
        name: 'css.gg',
        categories: [assets.icons],
        description:
            'Pure CSS icons library, Customizable & Retina-Ready built 100% in pure CSS, SVG, SVG Sprite, styled-components, Figma and Adobe XD. Easy integration: Embed, NPM & API.',
        links: {
            [website]: 'https://css.gg/',
        },
        icon: 'https://css.gg/fav/favicon-96x96.png',
    },
    {
        name: 'CSSBattle',
        categories: [programming.learn],
        description: 'CSS Code Golfing is Here!',
        links: {
            [website]: 'https://cssbattle.dev/',
        },
        icon: 'https://cssbattle.dev/images/logo-square.png',
    },
    {
        name: 'CSSViewer',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'A simple CSS property viewer.',
        links: {
            [website]: 'https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce',
        },
        icon: 'https://ssl.gstatic.com/chrome/webstore/images/icon_96px.png',
    },
    {
        name: 'Customer.io',
        categories: [indieHacking.utilities],
        description:
            'With Customer.io, send targeted emails, push notifications, and SMS to lower churn, create stronger relationships, and drive subscriptions.',
        links: {
            [website]: 'https://customer.io/',
        },
        icon: 'https://customer.io/wp-content/uploads/2019/01/customer-io-touchicon-180.png',
    },
    {
        name: 'Cypress',
        categories: [programming.testing],
        description:
            'Fast, easy and reliable testing for anything that runs in a browser. Install Cypress in seconds and take the pain out of front-end testing.',
        links: {
            [website]: 'https://www.cypress.io/',
        },
        icon: 'https://www.cypress.io/icons/icon-96x96.png?v=90213ca87017074111a88470199bc242315d18c5',
    },
    {
        name: 'Cytoscape.js',
        categories: [programming.charts],
        description:
            'Graph theory / network library for analysis and visualisation - compatible with CommonJS/Node.js/Browserify/Webpack, AMD/Require.js, npm, Bower, jspm, Meteor/Atmosphere, jQuery, and plain JS/JavaScript.',
        links: {
            [website]: 'https://js.cytoscape.org/',
        },
        icon: 'https://js.cytoscape.org/img/cytoscape-logo.png',
    },
]
