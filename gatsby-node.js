exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const markdownTemplate = require.resolve(`./src/templates/markdown.js`)

    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: markdownTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })
}
