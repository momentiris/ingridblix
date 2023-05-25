import React from 'react'
import Header from './header'
import '../base.css'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Layout = ({ children }) => {
  const { title = 'Ingrid Blix', email } = useSiteMetadata()

  return (
    <div className="max-w-screen-lg mx-auto">
      <Header siteTitle={title} email={email} />
      <main className="px-8 mt-24 mb-8">{children}</main>
    </div>
  )
}

export default Layout
