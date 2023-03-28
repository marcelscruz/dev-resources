import { categories } from 'const'
import { Resource } from 'types'

const { toolsAndUtilities, infrastructure } = categories

export const resources: Resource[] = [
    {
        name: 'Qoddi.com',
        categories: [infrastructure.hosting, infrastructure.cloudComputing],
        description:
            'Hosting Qoddi.com is a PaaS service similar to Heroku with a developer-centric approach and a free tier for developers and micro-services.',
        url: 'https://qoddi.com',
        icon: 'https://qoddi.com/assets/images/favicon.ico',
    },
    {
        name: 'Quokka',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description: 'Quokka.js: Introduction.',
        url: 'https://quokkajs.com/docs/index.html',
        icon: 'https://quokkajs.com/assets/img/favicon.ico?v=2',
    },
]
