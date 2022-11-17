import { CategoryValues, LinkValues } from 'types'

export type Resource = {
    name: string
    categories: Array<CategoryValues>
    description: string
    links: {
        [key in LinkValues]?: string
    }
    icon?: string
    keywords?: Array<string>
}
