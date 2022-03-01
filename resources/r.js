const {
    toolsAndUtilities,
    programming,
    jobs,
    community,
    uiDesign,
    assets,
    infrastructure,
} = require('../constants/categories')
const { website, twitter, linkedin, github, facebook, youtube, instagram, codepen } = require('../constants/links')

module.exports = [
    {
        name: 'RapidAPI',
        categories: [toolsAndUtilities.apiBuilding, toolsAndUtilities.general],
        description:
            'Use RapidAPI to Find, Connect, & Share 1000s of APIs using our Multi-cloud platform. Improve Developer Experience with API Design, Testing, Monitoring, & More!',
        links: {
            [website]: 'https://rapidapi.com/',
            [facebook]: 'https://www.facebook.com/Rapid-API-860822767286196',
            [twitter]: 'https://twitter.com/rapid_api',
            [youtube]: 'https://www.youtube.com/channel/UCk-vgkXZUzwd5hmpQ2it9_g',
            [linkedin]: 'https://www.linkedin.com/company/rapidapi',
        },
        icon: 'https://rapidapi.com/wp-content/uploads/2020/07/favicon-2.png',
    },
    {
        name: 'Ratatype',
        categories: [toolsAndUtilities.typing],
        description:
            'Learn to type faster. Take touch typing lessons, practice your keyboarding skills online, take a typing test and get typing speed certificate for free.',
        keywords: ['learn to type', 'typing tutor', 'touch typing', 'keyboarding', 'online typing tutor', 'touch type'],
        links: {
            [website]: 'https://www.ratatype.com/',
        },
        icon: 'https://www.ratatype.com/browser/safari/apple-touch-icon-76x76.png',
    },
    {
        name: 'Ray.so',
        categories: [programming.codeSnippets],
        description:
            'Turn your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window.',
        links: {
            [website]: 'https://ray.so/',
        },
        icon: 'https://ray.so/img/icons/favicon-32x32.png',
    },
    {
        name: 'React 30',
        categories: [programming.podcasts],
        description: 'A podcast about React.',
        links: {
            [website]: 'https://react30.com/',
        },
        icon: 'https://react30.com/favicon.ico',
    },
    {
        name: 'React Bootstrap',
        categories: [programming.uiKitsAndLibraries],
        description:
            'React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.',
        links: {
            [website]: 'https://react-bootstrap.github.io/',
        },
        icon: 'https://react-bootstrap.github.io/favicon.ico',
    },
    {
        name: 'React DevTools',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Adds React debugging tools to the Chrome Developer Tools. Created from revision f160547f47 on 12/4/2020.',
        links: {
            [website]:
                'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
        },
        icon: 'https://ssl.gstatic.com/chrome/webstore/images/icon_96px.png',
    },
    {
        name: 'React Native Radio',
        categories: [programming.podcasts],
        description: 'Exploring React Native Together.',
        links: {
            [website]: 'https://devchat.tv/react-native-radio/',
        },
        icon:
            'https://image.simplecastcdn.com/images/fd1212b1-7d08-4c5a-8506-00188a4c6528/bb6b7476-a0a9-4ff4-86f0-eded00b3f80a/favicon-red.jpg',
    },
    {
        name: 'React Podcast',
        categories: [programming.podcasts],
        description: 'Conversations about React with your favorite developers.',
        links: {
            [website]: 'https://reactpodcast.simplecast.com/',
        },
        icon:
            'https://image.simplecastcdn.com/images/7672009f-32a0-470f-81b8-77a9748d560e/82cc2a41-1a7b-4c91-b6f0-a461c50830ed/simplecast-logo-32.jpg',
    },
    {
        name: 'React Resources',
        categories: [programming.javascript.react],
        description:
            'Keep up with the growing React ecosystem! We cover the latest React learning resources, libraries and jobs.',
        links: {
            [website]: 'https://reactresources.com/',
        },
        icon: 'https://reactresources.com/static/favicon.ico',
    },
    {
        name: 'React Suite',
        categories: [programming.uiKitsAndLibraries],
        description: 'A suite of React components, sensible UI design, and a friendly development experience.',
        links: {
            [website]: 'https://rsuitejs.com/',
        },
        icon: 'https://rsuitejs.com/favicon.ico',
    },
    {
        name: 'React Tutorial',
        description:
            'Learn React in an interactive environment. Understand how React works not just how to build with React.',
        categories: [programming.learn, programming.codeChallenges],
        links: {
            [website]: 'https://react-tutorial.app',
        },
        icon: 'https://react-tutorial.app/assets/favicons/favicon-32x32.png',
        keywords: ['react tutorial', 'interactive react course'],
    },
    {
        name: 'ReactJobsBoard',
        categories: [jobs.boards],
        description:
            'ReactJobsBoard helps you find React & React Native jobs at startups & tech companies. Browse our daily updated job board and find great React & React Native jobs. Find and hire the most talented React developers.',
        links: {
            [website]: 'https://reactjobsboard.com/',
        },
        icon: 'https://reactjobsboard.com/images/apple-touch-icon.png',
    },
    {
        name: 'readme.so',
        categories: [toolsAndUtilities.general],
        description:
            "Use readme.so's markdown editor and ready made templates to easily create a simple README for your repositories",
        links: {
            [website]: 'https://readme.so/',
            [github]: 'https://github.com/katherinepeterson/readme.so',
        },
        icon: 'https://readme.so/favicon.ico',
    },
    {
        name: 'reddit',
        categories: [community.blogsAndForums],
        description:
            "Reddit is a network of communities based on people's interests. Find communities you're interested in, and become part of an online community!",
        links: {
            [website]: 'https://www.reddit.com/',
        },
        icon: 'https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png',
    },
    {
        name: 'redditors for hire',
        categories: [jobs.boards, jobs.freelancing],
        description: 'Find employers and employees on Reddit.',
        links: {
            [website]: 'https://www.reddit.com/r/forhire/',
        },
        icon: 'https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png',
    },
    {
        name: 'Rene Rehme',
        categories: [community.personalWebsites],
        description: 'A web developer blog by Rene Rehme. This blog is about front- and backend techniques.',
        links: {
            [website]: 'https://renerehme.dev/',
            [twitter]: 'https://twitter.com/ReneReh1',
            [linkedin]: 'https://de.linkedin.com/in/rene-rehme-44376017a',
            [github]: 'https://github.com/iseries',
            [codepen]: 'https://codepen.io/renerehme',
        },
        icon: 'https://renerehme.dev/favicon-32x32.png',
    },
    {
        name: 'Refactoring UI',
        categories: [uiDesign.learn],
        description:
            "Tired of relying on Bootstrap? Learn how to design awesome UIs by yourself using specific tactics explained from a developer's point-of-view.",
        links: {
            [website]: 'https://refactoringui.com/',
        },
        icon: 'https://refactoringui.com/favicon-32x32.png',
    },
    {
        name: 'Remix Icon',
        categories: [assets.icons],
        description:
            'Remix Icon is a set of open source neutral style system symbols elaborately crafted for designers and developers. All of the icons are free to use for both personal and commercial.',
        keywords: ['remix-icon', 'icon', 'svg', 'icon-font', 'icon-pack'],
        links: {
            [website]: 'https://remixicon.com/',
        },
        icon: 'https://remixicon.com/favicon.ico',
    },
    {
        name: 'Remote Impact',
        categories: [jobs.remoteOnly],
        description:
            'Remote dev jobs to save the world. Find a job with social impact in a company tackling the UNs Sustainable Development Goals. We add jobs daily in 17 key impact areas such as climate change, poverty, education + many more',
        links: {
            [website]: 'https://www.remoteimpact.io/',
        },
    },
    {
        name: 'Remote Leaf',
        categories: [jobs.remoteOnly],
        description:
            'Remote Leaf aggregates remote jobs in one organized place from 60+ remote job boards, company career pages, AngelList, Linkedin, Reddit, Twitter, Facebook groups and Hacker news hiring.',
        links: {
            [website]: 'https://remoteleaf.com/',
        },
        icon: 'https://remoteleaf.com/static/leaf/img/Favicon%402x.png',
    },
    {
        name: 'Remote.co',
        categories: [jobs.remoteOnly],
        description: 'Remote.co is a resource for companies that see remote work as an opportunity.',
        links: {
            [website]: 'https://remote.co/',
        },
        icon: 'https://remote.co/wp-content/uploads/2017/02/retina_favicon_32.png',
    },
    {
        name: 'RemoteLeads',
        categories: [jobs.remoteOnly],
        description:
            'Freelancers get your next highly-qualified remote web development project lead sent to your inbox. We search 100s of sources daily to find your next freelance web development project.',
        links: {
            [website]: 'http://remoteleads.io/',
        },
        icon: 'https://uploads-ssl.webflow.com/5faec1ddb9d25e78916f2423/5fc54bdf027e3b778c588959_favicon-256x256.png',
    },
    {
        name: 'RemoteOK',
        categories: [jobs.remoteOnly],
        description:
            'Looking for a remote job? Remote OK® has 43,534+ remote jobs as a Developer, Designer, Copywriter, Customer Support Rep, Sales Professional, Project Manager and more! Find a career where you can work remotely from anywhere.',
        links: {
            [website]: 'https://remoteok.io/',
        },
        icon: 'https://remoteok.io/assets/favicon-96x96.png?2',
    },
    {
        name: 'Remotive',
        categories: [jobs.remoteOnly],
        description:
            'Find the best remote job, working as a developer, customer support rep, product or sales professional... See openings in our categories. All jobs are hand curated and allow remote work. We serve the best work from home jobs in popular categories. Talent is everywhere, work remotely today!',
        links: {
            [website]: 'https://remotive.io/',
        },
        icon: 'https://remotive.io/web/image/website/1/favicon/',
    },
    {
        name: 'remove.bg',
        categories: [assets.images],
        description: 'Remove Image Background: 100% automatically – in 5 seconds – without a single click – for free.',
        links: {
            [website]: 'https://www.remove.bg/',
        },
        icon: 'https://www.remove.bg/favicon-32x32.png?v=YAXaAv7pao',
    },
    {
        name: 'Render',
        categories: [infrastructure.hosting],
        description:
            'Render is a unified platform to build and run all your apps and websites with free SSL, global CDN, private networks and auto deploys from Git.',
        links: {
            [website]: 'https://render.com/',
        },
        icon: 'https://render.com/icons/icon-96x96.png?v=4ab9a3fc5e06e2253bb579a9609a1ecc',
    },
    {
        name: 'rendezvous with cassidoo',
        categories: [programming.newsletters],
        description: "Rendezvous with cassidoo, probably the best newsletter you'll ever read.",
        links: {
            [website]: 'https://cassidoo.co/newsletter/',
        },
        icon: 'https://cassidoo.co/img/favicon-32x32.png',
    },
    {
        name: 'Reshot',
        categories: [assets.images],
        description:
            'Find tons of curated, non-stocky images for you to use in your next creative project, for free! Free for commercial use. No attribution required.',
        links: {
            [website]: 'https://www.reshot.com/',
        },
        icon:
            'https://d3t64pp0gm1u4c.cloudfront.net/build/favicons/apple-icon-72x72-b64f10eb707383bb9e77403866e101b657bc25ae3041ee89fbca98ec6a2dc47c.png',
    },
    {
        name: 'Responsively',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description: 'A dev-tool that aids faster and precise responsive web development.',
        links: {
            [website]: 'https://responsively.app/',
        },
        icon: 'https://responsively.app/icons/icon-96x96.png?v=a7d0de524bb1ca8ac597715219a3760c',
    },
    {
        name: 'Resume',
        categories: [jobs.resumeBuilders],
        description:
            'Create a professional resume with the only truly free resume builder online. Browse our templates, then easily build and share your resume.',
        keywords: ['resume', 'builder', 'creator', 'templates'],
        links: {
            [website]: 'https://www.resume.com/',
        },
        icon: 'https://www.resume.com/static-sites/icons/icon-96x96.png?v=0ceea445248e984002eef72cbba80f75',
    },
    {
        name: 'Resume Genius',
        categories: [jobs.resumeBuilders],
        description:
            'The only online resume builder that’ll land you interviews. Create a professional resume in minutes, download, and print. Join 10 million happy job seekers.',
        links: {
            [website]: 'https://resumegenius.com/',
        },
        icon: 'https://resumegenius.com/wp-content/uploads/2020/02/resume-genius-favicon-1-150x150.png',
    },
    {
        name: 'Resume maker',
        categories: [jobs.resumeBuilders],
        description: '',
        links: {
            [website]: 'https://www.resumemaker.online/',
        },
        icon: 'https://www.resumemaker.online/favicon-32x32.png',
    },
    {
        name: 'Resume Now',
        categories: [jobs.resumeBuilders],
        description:
            "Instantly create a job-winning resume. Resume-Now's resume builder includes job-specific resume templates, resume examples and expert writing tips to help you get the job.",
        links: {
            [website]: 'https://www.resume-now.com/',
        },
        icon: 'https://www.resume-now.com/favicon.png',
    },
    {
        name: 'Retool',
        categories: [toolsAndUtilities.apiBuilding, toolsAndUtilities.general],
        description:
            'Retool is the fast way to build internal tools. Drag-and-drop our building blocks and connect them to your databases and APIs to build your own tools, instantly. Connects with Postgres, REST APIs, GraphQL, Firebase, Google Sheets, and more.  Built by developers, for developers. Trusted by startups and Fortune 500s. Sign up for free.',
        links: {
            [website]: 'https://retool.com/',
            [twitter]: 'https://twitter.com/retool',
            [linkedin]: 'https://www.linkedin.com/company/tryretool',
        },
        icon: 'https://retool.com/favicon.png',
    },
    {
        name: 'Rick Blyth',
        categories: [community.personalWebsites],
        description: 'Rick Blyth is a Micro SaaS Founder who shares tips on getting started with Micro SaaS, Passive Income, Quit Your Job and Chrome Extensions. Home of the free 12 chapter Micro SaaS Handbook.',
        links: {
            [website]: 'https://rickblyth.com/',
            [facebook]: 'https://www.facebook.com/rickblythmicrosaas',
            [twitter]: 'https://twitter.com/rick_blyth',
            [youtube]: 'https://www.youtube.com/channel/UC_K6le9py40qyCLp_8FdOQQ',
        },
        icon: 'https://assets.grooveapps.com/images/5f3e7d217cadae003769b3fd/1646060069_rickblythhalftonestransparent.png',
    },
    {
        name: 'Rider',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description: 'Develop .NET, ASP.NET, .NET Core, Xamarin or Unity applications on Windows, Mac, Linux.',
        links: {
            [website]: 'https://www.jetbrains.com/rider/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Roadmap SH',
        categories: [toolsAndUtilities.general],
        description: 'Step by step guides and paths to learn different tools or technologies',
        links: {
            [website]: 'https://roadmap.sh/',
        },
        icon: 'https://roadmap.sh/brand.png',
    },
    {
        name: 'Rocket Crew',
        categories: [jobs.boards],
        description: 'The biggest list of Space jobs from New space companies.',
        links: {
            [website]: 'https://rocketcrew.space/',
            [twitter]: 'https://twitter.com/RocketCrewSpace',
            [instagram]: 'https://www.instagram.com/rocketcrewspace/',
        },
        icon: 'https://rocketcrew.space/favicon.ico',
    },
    {
        name: 'Rome',
        categories: [programming.javascript.tooling],
        description:
            'Rome is a linter, compiler, bundler, and more for JavaScript, TypeScript, JSON, HTML, Markdown, and CSS.',
        links: {
            [website]: 'https://rome.tools/',
        },
        icon: 'https://rome.tools/img/pinned-rome-logo.svg',
    },
    {
        name: 'RubyMine',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'The Ruby and Rails IDE with first-class support for Ruby and Rails, JavaScript and CoffeeScript, ERB and HAML, CSS, Sass and Less, and more.',
        links: {
            [website]: 'https://www.jetbrains.com/ruby/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'RWD Weekly Newsletter',
        categories: [programming.newsletters],
        description:
            'A free, once–weekly round-up of responsive design articles, tools, tips, tutorials and inspirational links. I spend hours curating the best content,.',
        links: {
            [website]: 'https://responsivedesign.is/newsletter/',
        },
        icon: 'https://responsivedesign.is/wp-content/themes/rwd-is/favicon-32x32.png',
    },
]
