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
      <div className="flex w-full justify-center max-w-screen-lg ">
        <div className=" flex-1">
          {posts
            .filter((_, index) => index % 2 !== 0)
            .map((post, index) => {
              return (
                <div key={index} className="min-w-small lg:min-w-big ">
                  <Img fluid={post.image} />
                </div>
              )
            })}
        </div>
        <div className="flex-1">
          {posts
            .filter((_, index) => index % 2 === 0)
            .map((post, index) => {
              return (
                <div key={index} className="min-w-small lg:min-w-big ">
                  <Img fluid={post.image} />
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
