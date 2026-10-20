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
    {
        name: 'Yap MCP',
        description:
            'Open-source MCP server and CLI that transcribes audio files on your own computer for Claude, Cursor and other MCP clients. No upload or API key.',
        categories: ['AI', 'Audio', 'Open Source'],
        url: 'https://github.com/founden-bot/yap-mcp',
        keywords: [
            'mcp',
            'speech to text',
            'transcription',
            'claude code',
            'cursor',
            'on-device',
            'cli',
            'local-first',
        ],
    },
    {
        name: 'YunCMS',
        description:
            'Open-source, self-hosted MySQL CMS with a React admin studio, REST API, role-based permissions, file storage and built-in MCP tools.',
        categories: ['CMS', 'API Building', 'Open Source'],
        url: 'https://yunsoft.com/case-study/yuncms-programmable-cms-backend',
        keywords: ['mysql', 'headless cms', 'node.js', 'react', 'rest api', 'mcp', 'self-hosted'],
    },
    {
        name: 'YYLO',
        description:
            'Command-line orchestrator for coding agents with repeatable workflows, receipt-backed repository changes, and typed task, validation, and merge boundaries.',
        categories: ['AI', 'Terminal', 'Open Source'],
        url: 'https://github.com/yylo-dev/yylo',
        keywords: ['ai', 'coding agents', 'cli', 'orchestration', 'terminal', 'workflows', 'developer tools'],
    },
]
