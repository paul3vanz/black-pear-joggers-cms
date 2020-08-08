const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const templates = {
      blogPost: path.resolve('./src/templates/blog-post.js'),
      page: path.resolve('./src/templates/page.js'),
    };
  
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulLayout {
              edges {
                node {
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
                        copy
                      }
                      ctaTitle
                      ctaLink
                      visualStyle
                    }
                  }
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: templates.blogPost,
            context: {
              slug: post.node.slug
            },
          });
        });

        const pages = result.data.allContentfulLayout.edges

        pages.forEach((page) => {
          console.log(page);
          createPage({
            path: `/${page.node.slug}/`,
            component: templates.page,
            context: {
              slug: page.node.slug
            },
          });
        });
      })
    )
  })
}
