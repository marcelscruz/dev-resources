import { links } from 'const'

export type LinkKeys = keyof typeof links
export type LinkValues = typeof links[LinkKeys]
