import { CategoryValues } from 'types'

export type Resource = {
    name: string
    categories: Array<CategoryValues>
    description: string
    url: string
    icon?: string
    keywords?: Array<string>
}
