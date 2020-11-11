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
          image {
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
    const image = getFluidGatsbyImage(
      node.image.asset,
      { maxWidth: 500 },
      { projectId: 'r641vock', dataset: 'ingridblix_dataset' }
    )

    return { ...node, image }
  })

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className="flex flex-wrap gap-4 w-full">
        {posts.map((post, index) => {
          return (
            <div
              key={index}
              className="mb-12 flex-1 flex-shrink-0  min-w-small lg:min-w-big max-w-lg"
            >
              <Img fluid={post.image} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
