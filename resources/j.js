const { assets, programming, jobs } = require('../constants/categories')
const { website, github } = require('../constants/links')

module.exports = [
    {
        name: 'Jam',
        categories: [assets.icons],
        description: '890+ handcrafted SVG icons to make your web app awesome.',
        links: {
            [website]: 'https://jam-icons.com/',
        },
        icon: 'https://jam-icons.com/icons/icon-96x96.png?v=15da575dd058a8724fe062f4043331c8',
    },
    {
        name: 'JAMStack Radio',
        categories: [programming.podcasts],
        description:
            'A show all about the JAMstack, a new way to build fast & secure apps or websites. Brought to you by Heavybit.',
        links: {
            [website]: 'https://www.heavybit.com/library/podcasts/jamstack-radio/',
        },
        icon: 'https://www.heavybit.com/wp-content/themes/heavybit/favicon.ico',
    },
    {
        name: 'JAMstacked',
        categories: [programming.newsletters],
        description: 'An email update on the evolving JAMstack ecosystem.',
        links: {
            [website]: 'https://jamstack.email/',
        },
        icon: 'https://jamstack.email/favicon.png',
    },
    {
        name: 'JavaScript Air',
        categories: [programming.podcasts],
        description:
            'The live JavaScript podcast all about JavaScript and the web platform. Available on YouTube, iTunes, and an RSS audio feed.',
        links: {
            [website]: 'https://javascriptair.com/',
        },
        icon: 'https://javascriptair.com/favicon.ico',
    },
    {
        name: 'JavaScript Developer Jobs',
        categories: [jobs.boards],
        description:
            'Find specific JavaScript Developer Jobs, including Remote Jobs. You are looking for JavaScript Developers? Submit your position for free.',
        links: {
            [website]: 'https://javascriptjob.xyz/',
        },
        icon: 'https://javascriptjob.xyz/img/icons/favicon-32x32.png',
    },
    {
        name: 'JavaScript for impatient programmers',
        categories: [programming.books],
        description:
            'This book makes JavaScript less challenging to learn for newcomers, by offering a modern view that is as consistent as possible.',
        links: {
            [website]: 'https://exploringjs.com/impatient-js/toc.html',
        },
    },
    {
        name: 'JavaScript Info',
        categories: [programming.learn],
        description:
            'Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more.',
        links: {
            [website]: 'https://javascript.info/',
        },
        icon: 'https://javascript.info/img/favicon/apple-touch-icon-precomposed.png',
    },
    {
        name: 'JavaScript Interview Questions',
        categories: [jobs.interviews],
        description:
            'Collection of questions that can help you improve your JavaScript knowledge and prepare to an interview.',
        links: {
            [website]: 'https://iq.js.org/',
        },
        icon: 'https://iq.js.org/favicon.ico',
    },
    {
        name: 'JavaScript Jabber',
        categories: [programming.podcasts],
        description: 'A podcast about JavaScript.',
        links: {
            [website]: 'https://devchat.tv/podcasts/js-jabber/',
        },
        icon: 'https://devchat.tv/wp-content/uploads/2020/06/cropped-Logo-web-32x32.png',
    },
    {
        name: 'JavaScript Weekly',
        categories: [programming.newsletters],
        description: 'A newsletter of JavaScript articles, news and cool projects.',
        links: {
            [website]: 'https://javascriptweekly.com/',
        },
        icon: 'https://javascriptweekly.com/favicon.png',
    },
    {
        name: 'JavaScript30',
        categories: [programming.learn],
        description: 'Build 30 things with vanilla JS in 30 days with 30 tutorials.',
        links: {
            [website]: 'https://javascript30.com/',
        },
        icon: 'https://javascript30.com/images/favion-JS3.png',
    },
    {
        name: 'Jest',
        categories: [programming.testing],
        description: '🃏 Delightful JavaScript Testing.',
        links: {
            [website]: 'https://jestjs.io/',
        },
        icon: 'https://jestjs.io/img/favicon/favicon.ico',
    },
    {
        name: 'Joblist.app',
        categories: [jobs.boards],
        description: 'A Job Board for Tech Enthusiasts.',
        links: {
            [website]: 'https://joblist.app/',
        },
        icon: 'https://joblist.app/favicon/favicon-96x96.png',
    },
    {
        name: 'Jobspresso',
        categories: [jobs.remoteOnly],
        description:
            'Jobspresso is the easiest way to find remote jobs and careers at interesting and innovative companies.',
        links: {
            [website]: 'https://jobspresso.co/',
        },
        icon: 'https://jobspresso.co/wp-content/uploads/2015/04/Favicon-iOS.jpg',
    },
    {
        name: 'JS Remotely',
        categories: [jobs.remoteOnly],
        description:
            'Welcome to JS Remotely, the job board with all JavaScript remote jobs in the world. More than 200 remote Node.js, Meteor, Angular, React and Electron jobs are waiting for you. Find your perfect remote job now!',
        keywords: [
            'javascript jobs',
            'js jobs',
            'remote jobs',
            'remote',
            'jobs',
            'react jobs',
            'angular jobs',
            'vue jobs',
        ],
        links: {
            [website]: 'https://jsremotely.com/',
        },
        icon: 'https://jsremotely.com/static/media/favicon-32x32.png',
    },
    {
        name: 'JSbooks',
        categories: [programming.books],
        description:
            'Directory of free JavaScript ebooks. Contribute to revolunet/JSbooks development by creating an account on GitHub.',
        links: {
            [website]: 'https://jsbooks.revolunet.com/',
            [github]: 'https://github.com/revolunet/JSbooks',
        },
        icon: 'https://jsbooks.revolunet.com/img/ico/apple-touch-icon-114-precomposed.png',
    },
    {
        name: 'JustRemote',
        categories: [jobs.remoteOnly],
        description:
            'Discover Remote Jobs from around the world. Give up the commute, work remotely and do what you love, daily, from anywhere. Find your perfect remote development, design, sales or marketing job today.',
        links: {
            [website]: 'https://justremote.co/',
        },
        icon: 'https://justremote.co/favicon.ico',
    },
]
