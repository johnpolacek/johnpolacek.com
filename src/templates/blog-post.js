import React from 'react'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout/Global'
import SEO from '../components/seo'
import { Div, H2, P, Nav, Span } from 'styled-system-html'


    
class BlogPostTemplate extends React.Component {
  

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const disqusShortname = 'johnpolacek'
    const disqusConfig = {
      url: this.props.location.href ? 'https://johnpolacek.com/'+this.props.location.href.split('/').slice(3).join('/') : '',
      identifier: this.props.location.href ? 'https://johnpolacek.com/'+this.props.location.href.split('/').slice(3).join('/') : '',
      title: post.frontmatter.title
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <H2 pb={2} fontSize={4}>{post.frontmatter.title}</H2>
        <P fontSize={0} color="gray7">
          {post.frontmatter.date}
        </P>

        <Div pb={4} fontSize={[1,2]} dangerouslySetInnerHTML={{ __html: post.html }} />

        <Nav borderTop="solid 8px" borderColor="gray2" pt={4} pb={5} display="flex">
          <Div textAlign="left" width={1/2}>
            {
              previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <Span display="flex">
                    <Span pr={3}>←</Span>
                    <Span>{previous.frontmatter.title}</Span>
                  </Span>
                </Link>
              )
            }
          </Div>
          <Div textAlign="right" width={1/2}>
            {
              next && (
                <Link to={next.fields.slug} rel="next">
                  <Span display="flex" justifyContent="flex-end">
                    <Span>{next.frontmatter.title}</Span>
                    <Span pl={3}>→</Span>
                  </Span>
                </Link>
              )
            }
          </Div>
        </Nav>
        <Div pb={5}>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
