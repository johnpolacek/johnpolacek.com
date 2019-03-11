import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/Global'
import SEO from '../components/seo'
import { Div, H3, P } from 'styled-system-html'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {
          posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Div key={node.fields.slug} pb={4}>
                <H3 fontSize={4}>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </H3>
                <P fontSize={0} pb={1}>{node.frontmatter.date}</P>
                <P pb={0} mb={2}>{node.frontmatter.description || node.excerpt}</P>
                <Div pb={4} fontStyle="italic">
                  <Link to={node.fields.slug}>» read more</Link>
                </Div>
              </Div>
            )
          }
        )}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
