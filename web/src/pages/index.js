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
        { maxWidth: 700 },
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

      {posts.map((post, index) => {
        return (
          <div key={index}>
            {post.title && <h3 className="text-lg italic">{post.title}</h3>}

            {post.images.map((props, index) => (
              <div className="mb-8 max-w-2xl" key={index}>
                <Img fluid={props} />
              </div>
            ))}
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage
