import React from 'react'
import { Link } from 'gatsby'
import Hamburger from './hamburger'

const Header = ({ siteTitle = '' }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <header onTouchStart="">
      <nav className="sm:hidden top-0 pl-8 pt-8 fixed z-50">
        <Link className="z-40 text-xl inline-block" to="/">
          {siteTitle}
        </Link>
        <div className="fixed bottom-0 right-0 p-4  z-20">
          <button
            onClick={() => setOpen((current) => !current)}
            className={`w-16 p-4 text-black`}
          >
            <Hamburger />
          </button>
        </div>
      </nav>
      <div
        className={`flex items-center pl-8 pt-24 fixed top-0 left-0 z-10 w-screen h-screen bg-white ${
          !open && 'hidden'
        }`}
      >
        <ul>
          <li>
            <Link to="/work">
              <p className="text-4xl active:italic hover:italic inline-block">
                work
              </p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p className="text-4xl hover:italic active:italic inline-block">
                cv
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <nav className="hidden sm:block fixed top-0 pl-8 pt-8">
        <ul className="relative">
          <li className="mb-12">
            <Link className="text-xl inline-block" to="/">
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
      </nav>
    </header>
  )
}

export default Header
