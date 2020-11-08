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
          year
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
      <ul className="h-full flex items-center">
        {data.map((item) => (
          <li className="underline text-lg" key={item.slug.current}>
            <Link to={`/work/${item.slug.current}`}>
              {item.name} ({item.year})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Component
