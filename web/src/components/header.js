import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle = '' }) => (
  <header className="p-8 h-full fixed">
    <ul>
      <li className="mb-12">
        <Link className="text-3xl inline-block" to="/">
          {siteTitle}
        </Link>
      </li>

      <li>
        <Link to="/work">
          <p className="text-xl hover:italic inline-block">work</p>
        </Link>
      </li>
      <li>
        <Link to="/">
          <p className="text-xl hover:italic inline-block">cv</p>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
