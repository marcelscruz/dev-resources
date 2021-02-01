const { indieHacking, programming, jobs, toolsAndUtilities } = require('../constants/categories')
const { website } = require('../constants/links')

module.exports = [
    {
        name: 'Zero To Sold',
        categories: [indieHacking.books],
        description:
            'Zero to Sold is an actionable guide through all stages of a bootstrapped business: Preparation, Survival, Stability, and Growth. Sold on Amazon and Gumroad.',
        links: {
            [website]: 'https://thebootstrappedfounder.com/zero-to-sold/',
        },
        icon:
            'https://i0.wp.com/thebootstrappedfounder.com/wp-content/uploads/2019/11/cropped-Untitled-1.png?fit=32%2C32&ssl=1',
    },
    {
        name: 'Zerotheme',
        categories: [programming.templates],
        description:
            'Html5 Website Templates designed by #Mik. Free download all templates at Zerotheme : responsive templates, bootstrap themes, ecommerce themes, ...',
        links: {
            [website]: 'https://www.zerotheme.com/',
        },
        icon: 'https://www.zerotheme.com/wp-content/uploads/2018/03/logo-zerotheme2-60x60.png',
    },
    {
        name: 'Zety',
        categories: [jobs.resumeBuilders],
        description:
            'Use this online resume maker to build your resume fast and easy. Get expert advice as you write. Download in minutes and start getting interviews.',
        links: {
            [website]: 'https://zety.com/',
        },
        icon: 'https://cdn-images.zety.com/images/zety/apple-touch-icon-76x76-precomposed.png',
    },
    {
        name: 'Zyro',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Create a website or an online store easily with Zyro website builder. Choose from hundreds of designer-made templates. Launch your website in minutes.',
        links: {
            [website]: 'https://zyro.com//',
        },
        icon: 'https://zyro.com/_nuxt/icons/icon_512x512.d49f6a.png',
    },
]
