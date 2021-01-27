const path = require('path')
const colours = require('./src/constants/ui/colours')

const title = 'Dev Resources API'

module.exports = {
    siteMetadata: {
        title,
        description: `The Dev Resources API.`,
        author: 'Marcel Cruz',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/markdown-pages`,
                name: `markdown-pages`,
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                fonts: path.join(__dirname, 'src/assets/fonts'),
                images: path.join(__dirname, 'src/assets/images'),
                components: path.join(__dirname, 'src/components'),
                constants: path.join(__dirname, 'src/constants'),
                pages: path.join(__dirname, 'src/pages'),
                styles: path.join(__dirname, 'src/styles'),
                utils: path.join(__dirname, 'src/utils'),
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout.js`),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: title,
                short_name: title,
                start_url: `/`,
                background_color: colours.black,
                theme_color: colours.black,
                display: `standalone`,
                icon: 'src/assets/images/favicon.png',
            },
        },
    ],
}
