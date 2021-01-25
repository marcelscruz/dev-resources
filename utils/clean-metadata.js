const metadata = require('../all-metadata')
const writeToFile = require('./write-to-file')

async function cleanMetadata() {
    const newMetadata = metadata.map(resource => {
        const { name, description, url, icon, image, keywords } = resource

        const desc = description === 'Description not available.' ? undefined : description

        return {
            name,
            description: desc,
            keywords,
            url,
            icon,
            image,
        }
    })

    newMetadata.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

    await writeToFile({
        data: `module.exports = ${JSON.stringify(newMetadata, null, 4)}`,
        filePath: './new-metadata.js',
    })
}

cleanMetadata()
