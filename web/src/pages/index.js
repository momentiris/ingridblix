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

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className="flex w-full justify-center max-w-screen-lg ">
        <div className=" flex-1">
          {posts
            .filter((_, index) => index % 2 === 0)
            .map((post, index) => {
              return (
                <div key={index} className="min-w-small lg:min-w-big ">
                  {post.image}
                </div>
              )
            })}
        </div>
        <div className="flex-1">
          {posts
            .filter((_, index) => index % 2 !== 0)
            .map((post, index) => {
              return (
                <div key={index} className="min-w-small lg:min-w-big ">
                  {post.image}
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
