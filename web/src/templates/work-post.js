import React from 'react'
import { graphql } from 'gatsby'
import Work from '../components/single-work'
import SEO from '../components/seo'
import Layout from '../components/layout'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityWork(id: { eq: $id }) {
      name
      shortDescription
      materials
    }
  }
`

const BlogPostTemplate = (props) => {
  const { data, errors } = props
  const post = data?.post ?? {}

  if (errors) {
    console.warn('errors in work template: ', errors)
    return null
  }

  return (
    <Layout>
      <SEO title={post.name} description={post.shortDescription} />
      <Work {...post} />
    </Layout>
  )
}

export default BlogPostTemplate
