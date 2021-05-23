import React from 'react'
import { getFluidImage, urlFor } from '../utils'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const site = data?.site
  const posts = data?.posts?.edges.map(({ node }) => node)

  const columns = []
    .concat([posts.filter((_, i) => i % 3 === 0)])
    .concat([posts.filter((_, i) => i % 3 === 1)])
    .concat([posts.filter((_, i) => i % 3 === 2)])

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
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
  return <Img fluid={fluidImg} />
}

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(sort: { fields: _createdAt, order: DESC }) {
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

export default IndexPage
