import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle = 'Ingrid Blix' }) => (
  <header>
    <nav className="w-full px-8 mt-8 md:mt-16 flex justify-between items-center">
      <Link to="/" className="text-2xl hover:italic">
        {siteTitle}
      </Link>
      <Link to="/blog">*</Link>
    </nav>
  </header>
)

export default Header
