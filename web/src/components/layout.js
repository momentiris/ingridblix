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
    <div className="h-full w-full layout">
      <div className="max-w-xs h-full relative">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
      <main className="p-8">{children}</main>
    </div>
  )
}

export default Layout
