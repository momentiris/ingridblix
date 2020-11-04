import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle = '' }) => (
  <header className="p-8 relative h-full w-full">
    <ul className="fixed">
      <li className="mb-12">
        <Link className="text-3xl" to="/">
          {siteTitle}
        </Link>
      </li>

      <li>
        <Link to="/work">work</Link>
      </li>
      <li>
        <p>cv</p>
      </li>
    </ul>
  </header>
)

export default Header
