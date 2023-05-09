import { Category } from 'types'

export type Resource = {
    name: string
    categories: Array<Category>
    description: string
    url: string
    icon?: string
    keywords?: Array<string>
}
