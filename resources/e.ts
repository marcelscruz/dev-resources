import { categories } from 'const'
import { Resource } from 'types'

const { programming, toolsAndUtilities, uiDesign, jobs, assets, indieHacking } = categories

export const resources: Resource[] = [
    {
        name: 'Eagle App',
        description:
            'Unify your creative inspiration in one place. Store anything – inspiring images, design mockups, illustrations, screenshots and more.',
        categories: [uiDesign.inspiration],
        url: 'https://en.eagle.cool/',
        icon: 'https://eagle.cool/favicon.ico',
        keywords: ['file manager', 'image browser', 'color filter', 'designer tool', 'design file organization'],
    },
    {
        name: 'EASEOUT',
        categories: [programming.learn],
        description:
            'Coding tutorials about CSS, HTML, JavaScript, and articles about design creativity & modern web development technology.',
        url: 'https://www.easeout.co/',
        icon: 'https://www.easeout.co/favicon.ico',
    },
    {
        name: 'Eclipse',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'The Eclipse Foundation - home to a global community, the Eclipse IDE, Jakarta EE and over 375 open source projects, including runtimes, tools and frameworks.',
        keywords: [
            'eclipse',
            'project',
            'plug-ins',
            'plugins',
            'java',
            'ide',
            'swt',
            'refactoring',
            'free java ide',
            'tools',
            'platform',
            'open source',
            'development environment',
            'development',
            'ide',
        ],
        url: 'https://www.eclipse.org/',
        icon: 'https://www.eclipse.org/eclipse.org-common/themes/solstice/public/images/favicon.ico',
    },
    {
        name: 'ecomm.design',
        categories: [uiDesign.inspiration],
        description:
            'Browse the most complete and up-to-date gallery for fantastic ecommerce websites design inspiration and the best ecommerce solutions and marketing tools.',
        url: 'https://ecomm.design/',
        icon: 'https://mk0ecommdesignocs268.kinstacdn.com/wp-content/uploads/2016/04/cropped-favicon-1-125x125.png',
    },
    {
        name: 'Edabit',
        categories: [programming.codeChallenges],
        description:
            "Learn to code with fun, bite-sized challenges. Gain XP, unlock achievements and level up. It's like Duolingo for learning to code.",
        keywords: ['learn to code', 'learn programming', 'how to code'],
        url: 'https://edabit.com/',
        icon: 'https://s3.amazonaws.com/edabit-images/logo_main_medium.png',
    },
    {
        name: 'Edge',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            "See what's new on the latest version of the Microsoft Edge browser. Explore features, rewards, and more before you download the new browser today.",
        keywords: [
            'internet browser',
            'web browser',
            'microsoft edge',
            'download microsoft edge',
            'new browser',
            'new microsoft edge browser',
        ],
        url: 'https://www.microsoft.com/en-us/edge',
        icon: 'https://www.microsoft.com/favicon.ico',
    },
    {
        name: 'Edge Canary',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Want to see what we were working on yesterday? Canary will be released automatically almost every night to keep you up to date on our progress.',
        url: 'https://www.microsoftedgeinsider.com/en-us/welcome?channel=canary',
        icon: 'https://edgetipscdn.microsoft.com/insider-site/images/favicon.fbd89822.png',
    },
    {
        name: 'Edge Dev',
        categories: [toolsAndUtilities.browsersAndExtensions],
        description:
            'Our dev builds are the best representation of our improvements in the past week. They have been tested by the Microsoft Edge team, and are generally more stable than Canary.',
        url: 'https://www.microsoftedgeinsider.com/en-us/welcome?channel=dev',
        icon: 'https://edgetipscdn.microsoft.com/insider-site/images/favicon.fbd89822.png',
    },
    {
        name: 'Eggradients',
        categories: [uiDesign.color],
        description:
            'Ready to use gradient background colors. Cool Gradients are prepared according to the latest design trends. And it is served in the form of eggs. With hex and CSS codes.',
        url: 'https://www.eggradients.com/',
        icon: 'https://uploads-ssl.webflow.com/5a9423a3f702750001758d4f/5a96bc44892ae8000194cc9c_fav.png',
    },
    {
        name: 'Eleventy High Performance Blog',
        categories: [programming.templates],
        description:
            "I'm excited to announce the beta-release of eleventy-high-performance-blog–a high-performance blog template for 11ty based on this very...",
        url: 'https://www.industrialempathy.com/posts/eleventy-high-performance-blog/',
        icon: 'https://www.industrialempathy.com/img/favicon/favicon-192x192.png?hash=2089033c93',
    },
    {
        name: 'Eloquent JavaScript',
        categories: [programming.books],
        description: 'This is a book about JavaScript, programming, and the wonders of the digital.',
        url: 'https://eloquentjavascript.net/',
        icon: 'https://eloquentjavascript.net/favicon.ico',
    },
    {
        name: 'Emacs',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description:
            'Emacs or EMACS is a family of text editors that are characterized by their extensibility. The manual for the most widely used variant, GNU Emacs, describes it as "the extensible, customizable, self-documenting, real-time display editor".',
        url: 'https://www.gnu.org/software/emacs/',
        icon: 'https://www.gnu.org/software/emacs/favicon.png',
    },
    {
        name: 'EMBERWORK',
        categories: [jobs.boards],
        description:
            "Whether you're actively looking for a new job or just always open to new opportunities you'll always have access to the best Ember.js jobs- here at EMBERWORK.",
        url: 'https://emberwork.com/',
        icon: 'https://emberwork.com/apple-touch-icon-76x76.png',
    },
    {
        name: 'Encore',
        description:
            'The end-to-end backend development platform that automatically provisions all your cloud infrastructure, based on your business logic.',
        categories: [toolsAndUtilities.apiBuilding, toolsAndUtilities.general],
        url: 'https://encore.dev',
        icon: 'https://encore.dev/assets/branding/icons/icon-192.png',
        keywords: ['serverless', 'cloud', 'development', 'framework', 'backend'],
    },
    {
        name: 'Enhance UI',
        categories: [uiDesign.learn],
        description: 'Learn Design for Developers wanting to know UI, UX and more.',
        url: 'https://www.enhanceui.com/',
        icon: 'https://uploads-ssl.webflow.com/5f718e7b0d482ef36d2c8417/5f79490f65ebcb7fdfdd3826_favicon-256.png',
    },
    {
        name: 'Envato Elements',
        categories: [assets.images, assets.videos],
        description: 'Find stock video footages and photos for your next video project.',
        url: 'https://elements.envato.com/',
        icon: 'https://elements.envato.com/favicon.ico',
    },
    {
        name: 'Epic React',
        categories: [programming.learn],
        description: 'Strap in and take your React applications to the next level.',
        url: 'https://epicreact.dev/',
        icon: 'https://epicreact.dev/icons/icon-96x96.png?v=4fc004c2d47bff97350bf9ba653e0bdd',
    },
    {
        name: 'Error 404 Illustrations',
        categories: [assets.illustrations],
        description:
            'Make a unique journey through 404 error pages on your website. Use these illustrations that describe better than words.',
        url: 'https://error404.fun/',
        icon: 'https://error404.fun/img/favicon-32x32.png',
    },
    {
        name: 'Escrow',
        categories: [toolsAndUtilities.domains],
        description:
            'Secure online payment processing from the world’s largest online escrow service since 1999. Trusted by 1M+ users. Priced as low as 0.89%. For transactions $100 to $10M+.',
        url: 'https://www.escrow.com/',
        icon: 'https://www.escrow.com/build/images/favicons/favicon-32x32.png',
    },
    {
        name: 'Everyone Hates Marketers',
        categories: [indieHacking.marketing],
        description:
            "It's the antidote to marketing bullshit. Receive a free, 8-lesson video course + a super practical, no-bullshit essay in your inbox every Tuesday.",
        url: 'https://www.everyonehatesmarketers.com/',
        icon: 'https://uploads-ssl.webflow.com/5f5b3208b507493089d50445/5fa0382a02da241b9adae56e_favicon-32x32.png',
    },
    {
        name: 'Exercism',
        categories: [programming.codeChallenges],
        description:
            'Code Practice and Mentorship for Everyone. Level up your programming skills with 1,879 exercises across 38 languages, and insightful discussion with our dedicated team of welcoming mentors. Exercism is 100% free forever.',
        url: 'https://exercism.io/',
        icon:
            'https://assets.exercism.io/assets/favicon/apple-touch-icon-72x72-4ebeea76fc0ae80d3bb77a59752c5caf5d7debce078764ef95d6b69caa5e9c0b.png',
    },
    {
        name: 'explainshell',
        categories: [toolsAndUtilities.commandLine],
        description: 'Match command-line arguments to their help text.',
        url: 'https://explainshell.com/',
        icon: 'https://explainshell.com/favicon.ico',
    },
]
