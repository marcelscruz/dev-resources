import { Category } from 'types'

export type Resource = {
    name: string
    categories: Array<Category>
    description: string
    url: string
    keywords?: Array<string>
}
