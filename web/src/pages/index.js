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

  const list = []
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
      <div className="grid grid-flow-col">
        {list.map((posts) => (
          <div className="flex flex-col ">
            {posts.map((post, i) => (
              <div key={i}>{post.image}</div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  )
}

const C = ({ data, width }) => {
  return <div style={{ width: '100%', maxWidth: width }}>{data.image}</div>
}

export default IndexPage
