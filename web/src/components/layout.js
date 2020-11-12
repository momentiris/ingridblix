import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'

import '../base.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="h-full w-full sm:grid sm:grid-cols-layout tracking-wider">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main className="px-8 sm:px-12 mt-24">{children}</main>
    </div>
  )
}

export default Layout
