import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost {
      edges {
        node {
          id
          title
          images {
            asset {
              metadata {
                lqip
                dimensions {
                  aspectRatio
                  height
                  width
                }
              }
              _id
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const site = data?.site
  const posts = data?.posts?.edges?.map(({ node }) => {
    const images = node.images.map((image) =>
      getFluidGatsbyImage(
        image.asset,
        { maxHeight: 900, maxWidth: 900 },
        { projectId: 'r641vock', dataset: 'ingridblix_dataset' }
      )
    )

    return { ...node, images }
  })

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className="">
        {posts.map((post, index) => {
          return (
            <div key={index} className="mb-12">
              {post.title && <h3 className="text-lg italic">{post.title}</h3>}

              <div className="flex flex-wrap gap-4">
                {post.images.map((props, index) => (
                  <div
                    className="flex-1"
                    style={{ minWidth: 500, maxWidth: '80vh' }}
                    key={index}
                  >
                    <Img fluid={props} />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
