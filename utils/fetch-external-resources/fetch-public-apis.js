const axios = require('axios')
const categories = require('../../constants/categories')
const links = require('../../constants/links')

const { toolsAndUtilities } = categories
const { website } = links

module.exports = async function () {
    try {
        const publicApis = await axios.get('https://api.publicapis.org/entries')

        const parsedResult = publicApis.data.entries.map((api) => {
            const parsedApi = {
                categories: [toolsAndUtilities.publicApis],
                links: {},
            }

            Object.entries(api).forEach(([key, value]) => {
                switch (key) {
                    case 'API':
                        parsedApi.name = value
                        break
                    case 'Link':
                        parsedApi.links[website] = value
                        break
                    case 'Category':
                        parsedApi.apiCategory = value
                        break
                    default:
                        parsedApi[key.toLowerCase()] = value
                        break
                }
            })

            return parsedApi
        })

        return parsedResult
    } catch (error) {
        throw new Error(error)
    }
}
