import { Resource } from 'types'

export const resources: Resource[] = [
    {
        name: 'YAML Preflight',
        description:
            'Validate strict YAML, duplicate keys, and common GitHub Actions permission mistakes locally in your browser.',
        categories: ['Testing', 'Tooling'],
        url: 'https://yaml.aevumere.com/yaml-preflight',
        keywords: ['yaml', 'github actions', 'validator', 'permissions'],
    },
    {
        name: 'YAMLine',
        description:
            'YAMLine is an online YAML toolbox featuring a linter, formatter, merger, AI fixer, converters, and a Kubernetes manifest validator.',
        categories: ['Tooling'],
        url: 'https://yamline.com/',
        keywords: ['yaml', 'web', 'developer tools', 'tools'],
    },
]
