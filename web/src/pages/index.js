import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { sanityClient } from '../client'
import imageUrlBuilder from '@sanity/image-url'

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
  const builder = imageUrlBuilder(sanityClient)
  const urlFor = (source) => builder.image(source)

  const posts = data?.posts?.edges?.map(({ node }) => {
    if (node.image.crop) {
      return {
        ...node,
        image: (
          <img
            alt={node.name || 'blog post '}
            src={urlFor(node.image).maxWidth(500).url()}
          />
        ),
      }
    }

    const image = getFluidGatsbyImage(
      node.image.asset,
      { maxWidth: 500 },
      sanityClient
    )

    return { ...node, image: <Img fluid={image} /> }
  })

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div
        className="w-full max-w-screen-lg"
        style={{ columnCount: 3, columnGap: 0 }}
      >
        {posts.map((post, index) => {
          return (
            <div key={index} style={{ breakInside: 'avoid' }}>
              {post.image}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
