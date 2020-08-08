import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Copy from '../components/copy'

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulLayout')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${page.title} | ${siteTitle}`} />

          {page.contentModules.map((contentModule) => (
            <Copy
              visualStyle={contentModule.visualStyle}
              copy={contentModule.copy.childMarkdownRemark.html}
            ></Copy>
          ))}

          {/* <pre>{JSON.stringify(page, null, ' ')}</pre> */}
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulLayout(slug: { eq: $slug }) {
      title
      slug
      id
      contentful_id
      updatedAt
      contentModules {
        __typename
        ... on ContentfulLayoutHighlightedCourse {
          title
          course {
            title
          }
        }
        ... on ContentfulLayoutCopy {
          title
          headline
          copy {
            childMarkdownRemark {
              html
            }
          }
          ctaTitle
          ctaLink
          visualStyle
          node_locale
        }
      }
    }
  }
`
