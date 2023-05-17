import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Work from '../components/single-work'
import Layout from '../components/layout'

const query = graphql`
  query workTemplateQuery($id: String) {
    sanityWork(id: { eq: $id }) {
      name
      shortDescription
      materials
      year
      _rawBody(resolveReferences: { maxDepth: 10 })
      images {
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
`

const Component = () => {
  const { data, errors } = useStaticQuery(query)
  const post = data?.sanityWork ?? {}

  if (errors) {
    console.warn('errors in work template query: ', errors)
    return null
  }

  return (
    <Layout>
      <Work post={post} />
    </Layout>
  )
}

export default Component
