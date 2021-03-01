const {
    indieHacking,
    toolsAndUtilities,
    programming,
    assets,
    uiDesign,
    readingAndWriting,
    jobs,
    infrastructure,
} = require('../constants/categories')
const { website } = require('../constants/links')

module.exports = [
    {
        name: 'SaaS4Devs',
        categories: [indieHacking.utilities],
        description:
            'An awesome collection of content for developers trying to bootstrap their SaaS business. Free & Open source from day one.',
        links: {
            [website]: 'https://saas4devs.tech/',
        },
        icon: 'https://saas4devs.tech/logo192.png',
    },
        {
        name: 'SaaS Design',
        categories: [uiDesign.inspiration],
        description:
            'For developers looking to create user-friendly designs in Figma: Free & open source Figma templates and UI kits to help kickstart your next project.',
        keywords: ['design', 'ui', 'figma', 'free-figma-templates', 'uiKitsAndLibraries'],
        links: {
            [website]: 'https://www.saasdesign.io/free-figma-templates/',
        },
        icon: 'https://i.ibb.co/G0scJVX/transparent-icon.png',
    },
    {
        name: 'Safari Technology Preview',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Safari is the best way to see the sites on iPhone, iPad, and Mac. Safari Technology Preview gives you an early look at upcoming web technologies in macOS and iOS.',
        links: {
            [website]: 'https://developer.apple.com/safari/technology-preview/',
        },
        icon: 'https://developer.apple.com/favicon.ico?51002006191',
    },
    {
        name: 'Scrimba',
        categories: [programming.learn],
        description:
            'Scrimba is a fun and fast way of learning to code! Our interactive courses and tutorials will teach you React, Vue, Angular, JavaScript, HTML, CSS, and more.',
        links: {
            [website]: 'https://scrimba.com/',
        },
        icon: 'https://scrimba.com/favicon.ico',
    },
    {
        name: 'Selenium',
        categories: [programming.testing],
        description: 'Selenium is a suite of tools for automating web browsers.',
        links: {
            [website]: 'https://www.selenium.dev/',
        },
        icon: 'https://www.selenium.dev/favicon.ico',
    },
    {
        name: 'Semantic UI',
        categories: [programming.uiKitsAndLibraries],
        description: 'Semantic empowers designers and developers by creating a shared vocabulary for UI.',
        keywords: ['html5', 'ui', 'library', 'framework', 'javascript'],
        links: {
            [website]: 'https://semantic-ui.com/',
        },
        icon: 'https://semantic-ui.com/favicon.ico',
    },
    {
        name: 'Serverless Stack',
        categories: [programming.apiBuilding, infrastructure.serverless],
        description: 'Serverless Stack (SST) is a framework that makes it easy to build serverless applications.',
        links: {
            [website]: 'https://serverless-stack.com/',
        },
        icon: 'https://serverless-stack.com/assets/favicon-32x32.png',
    },
    {
        name: 'Shape',
        categories: [assets.icons],
        description:
            '26000+ Icons & Illustrations to SVG, Lottie, React. Shape lets you customize the style, colors and border of static & animated icons and illustrations. You can export to React, SVG and Lottie code.',
        keywords: [
            'icons',
            'illustrations',
            'library',
            'animated icons',
            'user interface',
            'design',
            'Figma',
            'sketchapp',
            'animated illustrations',
            'svg',
            'shape',
            'downloads',
            'ui templates',
            'react',
            'lottie files',
            'image assets',
            'design tool',
            'editor',
            'styles',
            'JSON',
            'Design+Code',
            'export code',
            'presets',
        ],
        links: {
            [website]: 'https://shape.so/',
        },
        icon: 'https://shape.so/icons/icon-96x96.png?v=02f20638ec82f2f55585292e7c6c27ce',
    },
    {
        name: 'Shards React',
        categories: [programming.uiKitsAndLibraries],
        description:
            'Download Shards React a High-Quality & FREE React UI Kit based on Bootstrap 4 Featuring a Modern Design System and Dozens of Components.',
        links: {
            [website]: 'https://designrevision.com/downloads/shards-react/',
        },
        icon: 'https://designrevision.com/favicons/favicon-32x32.png?v=1.5.0',
    },
    {
        name: 'Shutterstock',
        categories: [assets.videos, assets.images, assets.icons],
        description:
            'Download the best royalty free images from Shutterstock, including photos, vectors, and illustrations. Enjoy straightforward pricing and simple licensing.',
        links: {
            [website]: 'https://www.shutterstock.com/',
        },
        icon: 'https://ak.picdn.net/assets/cms/sstk-favicon-72.png',
    },
    {
        name: 'Sidebar',
        categories: [programming.newsletters],
        description: 'The five best design links, every weekday.',
        links: {
            [website]: 'https://sidebar.io/',
        },
        icon: 'https://sidebar.io/img/sidebar_favicon.svg',
    },
    {
        name: 'sigma.js',
        categories: [programming.charts],
        description:
            'Sigma is a JavaScript library dedicated to graph drawing. It makes easy to publish networks on Web pages, and allows developers to integrate network exploration in rich Web applications.',
        links: {
            [website]: 'http://sigmajs.org/',
        },
        icon: 'http://sigmajs.org/assets/images/apple-touch-icon-72x72.png',
    },
    {
        name: 'Simple Analytics',
        categories: [toolsAndUtilities.analytics],
        description:
            "Simple Analytics gives you the analytics you need without invading the privacy of your users, with a clean interface, and simple integration. GDPR, CCPA and, PECR compliant because we don't handle PII data and set no cookies.",
        links: {
            [website]: 'https://simpleanalytics.com/',
        },
        icon: 'https://simpleanalytics.com/favicon-32x32.png',
    },
    {
        name: 'Simple Icons',
        categories: [assets.icons],
        description: '1493 Free SVG icons for popular brands.',
        links: {
            [website]: 'http://simpleicons.org/',
        },
        icon: 'https://simpleicons.org/images/apple-touch-icon.png',
    },
    {
        name: 'Site123',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Create a free website with SITE123. No design or coding skills required. SITE123 is by far the easiest free website builder. Create your website now!',
        keywords: ['Free website builder', 'Create a free website'],
        links: {
            [website]: 'https://www.site123.com/',
        },
        icon:
            'https://cdn-cms-s.f-static.net/manager/site123_website/files/logos/brand_files_2020/Icons/Png/Icon_blue.png?v=r7169',
    },
    {
        name: 'siteInspire',
        categories: [uiDesign.inspiration],
        description:
            'A CSS gallery and showcase of the best web design inspiration, featuring over 2,500 websites searchable by type, subject, and style.',
        links: {
            [website]: 'https://www.siteinspire.com/',
        },
        icon: 'https://www.siteinspire.com/favicon.png',
    },
    {
        name: 'SiteSee',
        categories: [uiDesign.inspiration],
        description: 'A curated gallery of beautiful, modern websites meant to inspire web developers and designers.',
        keywords: [
            'website inspiration',
            'website design inspiration',
            'web design gallery',
            'web design',
            'webdesign',
            'inspiration',
            'web designer',
            'graphic design',
            'best web designs',
            'website design',
        ],
        links: {
            [website]: 'https://sitesee.co/',
        },
        icon: 'https://d3alngem7je9z2.cloudfront.net/favi-64.ico',
    },
    {
        name: 'Sitespeed',
        categories: [toolsAndUtilities.performance],
        description:
            'Sitespeed.io is an open source tool that helps you analyse and optimise your website speed and performance, based on performance best practices.',
        keywords: [
            'sitespeed.io',
            'wpo',
            'webperf',
            'perfmatters',
            'fast',
            'site',
            'speed',
            'web performance optimisation',
            'analyse',
            'best practices',
            'continuous integration',
        ],
        links: {
            [website]: 'https://www.sitespeed.io/',
        },
        icon: 'https://www.sitespeed.io/img/ico/sitespeed.io-72.png',
    },
    {
        name: 'Sizzy',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'Stop wasting time and speed up your development workflow.',
        links: {
            [website]: 'https://sizzy.co/',
        },
        icon: 'https://sizzy.co/favicon.ico',
    },
    {
        name: 'Sketch',
        categories: [uiDesign.prototyping],
        description:
            'Sketch is a design toolkit built to help you create your best work — from your earliest ideas, through to final artwork.',
        links: {
            [website]: 'https://www.sketch.com/',
        },
        icon: 'https://www.sketch.com/images/components/icons/favicon@2x.png',
    },
    {
        name: 'Slow & Steady',
        categories: [indieHacking.podcasts],
        description:
            "Join us as we share what it's like to build and launch a bootstrapped startup while working for yourself full-time. Benedikt is working on Userlist with two other co-founders and Brian is running solo on a product to combat loneliness on remote teams.",
        links: {
            [website]: 'https://www.slowandsteadypodcast.com/',
        },
        icon:
            'https://assets.transistor.fm/assets/favicon-6e847568a3fbd949ba82be5cb10951e28b51f7f58d6e573235b0cddf494de2c0.ico',
    },
    {
        name: 'Smash',
        categories: [assets.illustrations],
        description: 'Changing and overlapping them, you can quickly illustrate an idea of your startup.',
        links: {
            [website]: 'https://usesmash.com/',
        },
        icon: 'https://usesmash.com/images/favicon32.png',
    },
    {
        name: 'Smashicons',
        categories: [assets.icons],
        description:
            "Download the world's largest and most complete icon set. Smashicons includes over 335,975 icons for Designers and Developers.",
        keywords: [
            'free icons',
            'vector icon',
            'SVG',
            'png icon',
            'free Ui kits',
            'free fonts',
            'illustrations',
            'graphic resources',
            'free graphic templates',
            'wireframes',
            'icons',
            'icon font',
            'ios icons',
            'iphone tab bar icons',
            'download free icons',
            '@3x icons',
            'iOS 8 icons',
            'developer tools',
            'iPhone toolbars',
            'Apple HIG',
            'icon designer',
            'monochrome icons',
            'buy icon pack',
            'pack',
            'icons for iOS 8',
            'buy iPhone icons',
            'iPad icons',
            'free icons',
            'vector icon',
            'SVG',
            'png icon',
            'AI',
            'Sketch',
            'Illustrator icons',
            'free and premium',
            'UI kits',
            'free fonts',
            'illustrations',
            'graphic resources',
            'free graphic templates',
            'wireframes',
            'Free graphic resources',
            'free patterns',
        ],
        links: {
            [website]: 'https://smashicons.com',
        },
        icon: 'https://smashicons.com/assets/img/favicon/new/favicon-96x96.png',
    },
    {
        name: 'Smashing Magazine',
        categories: [readingAndWriting.platforms],
        description:
            'Smashing Magazine is a website and eBook publisher that offers editorial content and professional resources for web developers and web designers.',
        links: {
            [website]: 'https://www.smashingmagazine.com/',
        },
        icon: 'https://www.smashingmagazine.com/images/favicon/apple-touch-icon-ipad-76x76.png',
    },
    {
        name: 'Smashing Newsletter',
        categories: [programming.newsletters],
        description:
            'Every two weeks our editorial team works on short, relevant articles for the upcoming issue. The newsletter is sent out bi-weekly, on Tuesdays.',
        links: {
            [website]: 'https://www.smashingmagazine.com/the-smashing-newsletter/',
        },
        icon: 'https://www.smashingmagazine.com/images/favicon/apple-touch-icon-ipad-76x76.png',
    },
    {
        name: 'Smplkit',
        categories: [assets.icons],
        description: 'An open source, do-whatever-you-want icon font to use in your projects.',
        links: {
            [website]: 'https://www.smplkit.com/',
        },
        icon: 'https://uploads-ssl.webflow.com/5e08877ced2a2771907388a9/5e2d9bc8d2e0671a88b1658b_smplkit-icon-3.png',
    },
    {
        name: 'Snipit',
        categories: [programming.codeSnippets],
        description: 'Save and organize your code snippets in the cloud. Share and collaborate with your team members.',
        links: {
            [website]: 'https://snipit.io/',
        },
        icon: 'https://cdn.snipit.io/favicon.png',
    },
    {
        name: 'Soft Skills Engineering',
        categories: [programming.podcasts],
        description:
            'It takes more than great code to be a great engineer. Soft Skills Engineering is a weekly advice podcast for software developers about the non-technical stuff that goes into being a great software developer.',
        links: {
            [website]: 'https://softskills.audio/',
        },
        icon: 'https://softskills.audio/apple-touch-icon-76x76.png',
    },
    {
        name: 'Software Social',
        categories: [indieHacking.podcasts],
        description:
            'Two bootstrapped software founders -- one transitioning from freelancing, and one with an established business -- invite you to join their weekly chats about their businesses.',
        links: {
            [website]: 'https://softwaresocial.dev/',
        },
        icon:
            'https://assets.transistor.fm/assets/favicon-6e847568a3fbd949ba82be5cb10951e28b51f7f58d6e573235b0cddf494de2c0.ico',
    },
    {
        name: 'SoloLearn',
        categories: [programming.learn],
        description: 'Join Now to learn the basics or advance your existing skills.',
        keywords: [
            'SoloLearn',
            'Coding',
            'Code',
            'Learn how to code',
            'Learn to code',
            'Learn coding',
            'C++',
            'Java',
            'Python',
            'HTML',
            'CSS',
            'JavaScript',
            'C#',
        ],
        links: {
            [website]: 'https://www.sololearn.com/',
        },
        icon: 'https://www.sololearn.com/Images/favicon-192x192.png',
    },
    {
        name: 'Soundstripe',
        categories: [assets.audio],
        description:
            "Every creator's one-stop shop for the best royalty free music, SFX, and stock video. Purchase a license for one file, or subscribe for unlimited access.",
        links: {
            [website]: 'https://www.soundstripe.com/',
        },
        icon: 'https://www.soundstripe.com/hubfs/favicon-1.png',
    },
    {
        name: 'SQLite',
        categories: [infrastructure.databases],
        description:
            'SQLite is an open-source, embedded, relational database management system, designed circa 2000. It is a database, with zero configuration, no requirements of a server or installation. Despite its simplicity, it is laden with popular features of database management systems.',
        links: {
            [website]: 'https://www.sqlite.org/index.html',
        },
        icon: 'https://www.sqlite.org/favicon.ico',
    },
    {
        name: 'Squarespace',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Squarespace is the all-in-one solution for anyone looking to create a beautiful website. Domains, eCommerce, hosting, galleries, analytics, and 24/7 support all included.',
        links: {
            [website]: 'https://www.squarespace.com/',
        },
        icon:
            'https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10515/assets/logos/apple-touch-icon-180.png',
    },
    {
        name: 'Squoosh',
        categories: [assets.images],
        description: 'Compress and compare images with different codecs, right in your browser.',
        links: {
            [website]: 'https://squoosh.app/',
        },
        icon: 'https://squoosh.app/c/favicon-c9cf50ef.ico',
    },
    {
        name: 'Stack Overflow',
        categories: [toolsAndUtilities.general],
        description:
            'Stack Overflow is the largest, most trusted online community for developers to learn, share​ ​their programming ​knowledge, and build their careers.',
        links: {
            [website]: 'http://stackoverflow.com/',
        },
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
    },
    {
        name: 'Start Bootstrap',
        categories: [programming.templates, programming.codeSnippets],
        description:
            'Trusted by tens of millions of users worldwide since 2013, Start Bootstrap develops website themes, templates, snippets, and more to help you get started on your next project!',
        links: {
            [website]: 'https://startbootstrap.com/snippets/',
        },
        icon: 'https://assets.startbootstrap.com/img/icons/favicon-32x32.png',
    },
    {
        name: 'Startup Jobs',
        categories: [jobs.boards],
        description:
            'Looking for a startup job? Apply to 10,000+ jobs at the fastest growing startups. Programming jobs, design jobs, marketing jobs, sales jobs, and more.',
        links: {
            [website]: 'https://startup.jobs/',
        },
        icon:
            'https://startup.jobs/assets/favicons/favicon-512x512-77cbfb16810c6425a05f6194cd1df82682ec72f8bf6d9db41ab75e6edd397fc3.png',
    },
    {
        name: 'Startups For the Rest of Us',
        categories: [indieHacking.podcasts],
        description:
            'The startup podcast with more than 500 episodes to help you launch and grow. 10 million+ downloads. 500+ five-star reviews.',
        links: {
            [website]: 'https://www.startupsfortherestofus.com/',
        },
        icon: 'https://www.startupsfortherestofus.com/wp-content/themes/sftrou/assets/images/favicon.png',
    },
    {
        name: 'Stormkit',
        categories: [infrastructure.hosting],
        description:
            'Stormkit integrates perfectly with your git flow. It builds, deploys and scales your javascript apps seamlessly.',
        links: {
            [website]: 'https://www.stormkit.io/',
        },
        icon: 'https://www.stormkit.io/favicon.png',
    },
    {
        name: 'Streamline Icons',
        categories: [assets.icons],
        description:
            'Download 30,000 free PNG icons for website, web app, software, web design. Buy our SVG vector icon pack, the world’s largest icon library for professionals.',
        keywords: [
            'Free icons',
            'Download icons',
            'Web icons',
            'Vector',
            'SVG',
            'Royalty free icons',
            'Open source icons',
            'Professional icons',
            'icon pack',
            'iOs icons',
        ],
        links: {
            [website]: 'https://streamlineicons.com/',
        },
        icon: 'https://streamlineicons.com/_assets/img/favicon-light.png',
    },
    {
        name: 'StyleShout',
        categories: [programming.templates],
        description:
            'Browse our collection of premium-like high-quality free website templates. Beautifully handcrafted designs. The best free website templates you can download.',
        links: {
            [website]: 'https://www.styleshout.com/',
        },
        icon: 'https://www.styleshout.com/favicon-32x32.png',
    },
    {
        name: 'Sublime Text',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            "Sublime Text is a sophisticated text editor for code, markup and prose. You'll love the slick user interface, extraordinary features and amazing performance.",
        links: {
            [website]: 'https://www.sublimetext.com/',
        },
        icon: 'https://www.sublimetext.com/images/icon.png',
    },
    {
        name: 'Supabase',
        categories: [infrastructure.serverless, infrastructure.databases],
        description:
            'Create a backend in less than 2 minutes. Start your project with a Postgres Database, Authentication, instant APIs, and realtime subscriptions.',
        links: {
            [website]: 'https://supabase.io/',
        },
        icon: 'https://supabase.io/new/favicon/favicon-32x32.png',
    },
    {
        name: 'Surge',
        categories: [infrastructure.hosting],
        description:
            'Shipping web projects should be fast, easy, and low risk. Surge is static web publishing for Front-End Developers, right from the CLI.',
        links: {
            [website]: 'https://surge.sh/',
        },
        icon: 'https://surge.sh/favicon.ico',
    },
    {
        name: 'SVG Backgrounds',
        categories: [assets.images],
        description:
            'SVG Backgrounds hosts a collection of customizable SVG-based repeating patterns and backgrounds for websites and blogs.',
        links: {
            [website]: 'https://www.svgbackgrounds.com/',
        },
        icon: 'https://www.svgbackgrounds.com/favicon-32x32.png',
    },
    {
        name: 'SVG to JSX',
        categories: [programming.javascript.react],
        description: 'Web site created using create-react-app.',
        links: {
            [website]: 'https://svg-jsx.netlify.app/',
        },
        icon: 'https://svg-jsx.netlify.app/favicon-96x96.png',
    },
    {
        name: 'SVGBox',
        categories: [assets.icons],
        description:
            'SVGBox allows you to add any of the 3,405 icons we have to your project by using simple tags. Instead of using downloading and uploading icons, simply copy tag and start using it. We are constantly adding more and more icons to serve different use cases.',
        links: {
            [website]: 'https://svgbox.net/',
        },
        icon: 'https://svgbox.net/assets/favicon.svg',
    },
    {
        name: 'SVGX',
        categories: [uiDesign.utilities, toolsAndUtilities.imageAndVideoEditing],
        description: 'SVGX is the desktop SVG asset manager designers and developers wished they had.',
        links: {
            [website]: 'https://svgx.app/',
        },
        icon: 'https://svgx.app/assets/favicons/favicon-96x96.png',
    },
    {
        name: 'Swagger',
        categories: [programming.apiBuilding],
        description:
            'Simplify API development for users, teams, and enterprises with our open source and professional toolset. Find out how Swagger can help you and get started today.',
        links: {
            [website]: 'https://swagger.io/',
        },
        icon: 'https://static1.smartbear.co/swagger/media/assets/swagger_fav.png',
    },
    {
        name: 'Syntax',
        categories: [programming.podcasts],
        description:
            'Full Stack Developers Wes Bos and Scott Tolinski dive deep into web development topics, explaining how they work and talking about their own experiences. They cover from JavaScript frameworks like React, to the latest advancements in CSS to simplifying web tooling.',
        links: {
            [website]: 'https://syntax.fm',
        },
        icon: 'https://syntax.fm/static/favicon.png',
    },
]
