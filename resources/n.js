const { programming, infrastructure, toolsAndUtilities, assets, jobs } = require('../constants/categories')

module.exports = [
    {
        name: 'n3-charts',
        categories: [programming.charts],
        url: 'https://n3-charts.github.io/line-chart/#/home',
        icon: 'https://n3-charts.github.io/line-chart/assets/favicons/favicon-96x96.png',
    },
    {
        name: 'Netlify',
        categories: [infrastructure.hosting],
        description:
            'Deploy modern static websites with Netlify. Get CDN, Continuous deployment, 1-click HTTPS, and all the services you need. Get started for free.',
        url: 'https://www.netlify.com/',
        icon: 'https://www.netlify.com/v3/static/favicon/favicon-32x32.png',
    },
    {
        name: 'Next.js',
        categories: [programming.javascript.react],
        description:
            'Production grade React applications that scale. The world’s leading companies use Next.js by Vercel to build static and dynamic websites and web applications.',
        url: 'https://nextjs.org/',
        icon: 'https://nextjs.org/static/favicon/favicon-32x32.png',
    },
    {
        name: 'Notepad++',
        categories: [toolsAndUtilities.editorsAndExtensions],
        url: 'https://notepad-plus-plus.org/',
        icon: 'https://notepad-plus-plus.org/favicon.ico',
    },
    {
        name: 'Noun Project',
        categories: [assets.icons],
        description:
            'Noun Project features the most diverse collection of icons and stock photos ever. Download SVG and PNG. Browse over 3 million art-quality icons and photos.',
        url: 'https://thenounproject.com/',
        icon: 'https://static.production.thenounproject.com/img/favicons/favicon-32x32.015f779a87e7.png',
    },
    {
        name: 'Novorésumé',
        categories: [jobs.resumeBuilders],
        description:
            'Make a perfect resume in 2021 and get your dream job using the free resume builder. Select a template. Personalize it. Get more interviews.',
        keywords: ['professional resume builder'],
        url: 'https://novoresume.com/',
        icon: 'https://novoresume.com/images/favi.png',
    },
]
