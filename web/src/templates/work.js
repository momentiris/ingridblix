import React from 'react'
import { graphql } from 'gatsby'
import Work from '../components/single-work'
import SEO from '../components/seo'
import Layout from '../components/layout'

export const query = graphql`
  query workTemplateQuery($id: String!) {
    sanityWork(id: { eq: $id }) {
      name
      shortDescription
      materials
      year
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
`

const Component = (props) => {
  const { data, errors } = props
  const post = data?.sanityWork ?? {}

  if (errors) {
    console.warn('errors in work template query: ', errors)
    return null
  }

  return (
    <Layout>
      <SEO title={post.name} description={post.shortDescription} />
      <Work post={post} />
    </Layout>
  )
}

export default Component
