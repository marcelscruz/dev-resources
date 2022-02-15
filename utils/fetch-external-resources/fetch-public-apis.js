const axios = require('axios')
const links = require('../../constants/links')

const { website } = links

module.exports = async function () {
    try {
        const publicApis = await axios.get('https://api.publicapis.org/entries')

        const parsedResult = publicApis.data.entries.map((api) => {
            const parsedApi = {
                links: {},
                public_api_fields: {},
            }

            Object.entries(api).forEach(([key, value]) => {
                switch (key) {
                    case 'API':
                        parsedApi.name = value
                        break
                    case 'Description':
                        parsedApi.description = value
                        break
                    case 'Link':
                        parsedApi.links[website] = value
                        break
                    case 'Category':
                        parsedApi.categories = ['Public APIs/All', `Public APIs/${value}`]
                        break
                    default:
                        parsedApi.public_api_fields[key.toLowerCase()] = value
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
