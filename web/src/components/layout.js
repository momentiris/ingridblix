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
    <div className="relative max-w-screen-lg mx-auto">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main className="px-8 mt-40">{children}</main>
    </div>
  )
}

export default Layout
