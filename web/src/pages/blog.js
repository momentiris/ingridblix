import React from 'react'
import { getFluidImage, urlFor } from '../utils'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { SEO } from '../components/seo'

const IndexPage = ({ data }) => {
  const posts = data?.posts?.edges.map(({ node }) => node)

  const columns = []
    .concat([posts.filter((_, i) => i % 3 === 0)])
    .concat([posts.filter((_, i) => i % 3 === 1)])
    .concat([posts.filter((_, i) => i % 3 === 2)])

  return (
    <Layout>
      <div className="grid grid-flow-col gap-4">
        {columns.map((posts, i) => (
          <div key={i} className="flex flex-col gap-4">
            {posts.map((post, i) => (
              <a
                href={post.image.asset.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                {getImage(post.image)}
              </a>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  )
}

const getImage = (image) => {
  if (image.crop) {
    return (
      <img
        alt={image.alt || 'blog post'}
        src={urlFor(image).maxWidth(500).url()}
      />
    )
  }

  const fluidImg = getFluidImage(image.asset, { maxWidth: 500 })
  return <GatsbyImage fluid={fluidImg} />
}

export const query = graphql`
  query IndexPageQuery {
    posts: allSanityPost(sort: { _createdAt: DESC }) {
      edges {
        node {
          id
          title
          image {
            crop {
              bottom
              left
              right
              top
            }
            asset {
              url
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

export const Head = () => <SEO title="Blog" />

export default IndexPage
