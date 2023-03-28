import { categories } from 'const'
import { Resource } from 'types'

const { community, programming, infrastructure } = categories

export const resources: Resource[] = [
    {
        name: 'XDA-Developers',
        categories: [community.blogsAndForums],
        description:
            'XDA Developers is a mobile software development community launched on 20 December 2002. Although discussion primarily revolves around Android, members also talk about many other operating systems and mobile development topics.',
        url: 'https://www.xda-developers.com/',
        icon: 'https://www.xda-developers.com/favicon-32x32.png',
    },
    {
        name: 'Xray',
        categories: [programming.testing],
        description:
            'The #1 Manual & Automated Testing App for Jira. Plan, Execute and Track your Quality Assurance with Requirements Traceability.',
        url: 'https://www.getxray.app/',
        icon: 'https://www.getxray.app/wp-content/themes/xpandit/dist/images/favicons/android-chrome-512x512.png',
    },
    {
        name: 'XServer',
        categories: [infrastructure.databases],
        description: 'XServer - JSON-based backend for Mobile apps, Websites and Unity games.',
        keywords: [
            'iOS',
            'Android',
            'JavaScript',
            'apps',
            'backend',
            'mobile',
            'website',
            'baas',
            'parse',
            'firebase',
            'database',
            'json',
            'php',
            'javascript',
            'jquery',
        ],
        url: 'https://xserver.app/',
        icon: 'https://xserver.app/assets/img/favicon.png',
    },
    {
        name: 'XState Guide',
        categories: [programming.codeSnippets],
        description: 'Minimal code examples of XState concepts.',
        url: 'https://bradwoods.io/guides/xstate',
        icon: 'https://bradwoods.io/icons-ac8e8fb7acba0bf710955dec094dc16c/apple-touch-icon-76x76.png',
    },
    {
        name: 'xstyled',
        categories: [programming.uiKitsAndLibraries],
        description: 'A utility-first CSS-in-JS framework built for React.',
        url: 'https://xstyled.dev/',
        icon: 'https://xstyled.dev/favicon-32x32.png?v=35747667c057871bf481acaf8d249528',
    },
]
