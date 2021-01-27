import React from 'react'
import { Box } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import sizes from 'constants/ui/sizes'

const { contentXPadding, headerHeight, contentYPadding } = sizes

export default function Template({ data }) {
    const { markdownRemark } = data
    const { html } = markdownRemark

    return (
        <Box
            as="main"
            marginTop={headerHeight}
            paddingX={contentXPadding}
            paddingY={contentYPadding}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
        }
    }
`
