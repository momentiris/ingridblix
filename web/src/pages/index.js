import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { SEO } from '../components/seo'

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
      <ul className="h-full">
        {data.map((item) => (
          <li className="mb-2 text-lg" key={item.slug.current}>
            <Link to={`/work/${item.slug.current}`} className="hover:italic">
              {item.name}
            </Link>
            <p className="text-xs ">{item.year}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <SEO title="Home" />

export default Component
