import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query work {
    allSanityWork {
      edges {
        node {
          name
          slug {
            current
          }
        }
      }
    }
  }
`

const Component = () => {
  const data = useStaticQuery(query).allSanityWork.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Work" />
      {data.map((item) => (
        <Link key={item.slug.current} to={`/work/${item.slug.current}`}>
          {item.name}
        </Link>
      ))}
    </Layout>
  )
}

export default Component
