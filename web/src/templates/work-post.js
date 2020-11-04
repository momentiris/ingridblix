import React from 'react'
import { graphql } from 'gatsby'
import Work from '../components/single-work'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

export const query = graphql`
  query workTemplateQuery($id: String!) {
    sanityWork(id: { eq: $id }) {
      name
      shortDescription
      materials
      images {
        asset {
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
