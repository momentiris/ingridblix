import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle = 'Ingrid Blix', email }) => (
  <header>
    <a
      href={`mailto: ${email}`}
      className="absolute inset-y-2 right-5 text-sm h-max hover:italic font-medium"
    >
      {email}
    </a>
    <nav className="w-full flex justify-between items-center px-8 mt-8 md:mt-12">
      <Link to="/" className="text-xl hover:italic">
        {siteTitle}
      </Link>
      <Link to="/blog">*</Link>
    </nav>
  </header>
)

export default Header
