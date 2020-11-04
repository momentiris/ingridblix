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
        <Link className="text-3xl" to="/work">
          work
        </Link>
      </li>
      <li>
        <Link className="text-3xl" to="/">
          CV
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
