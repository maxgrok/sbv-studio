import React, { useState } from 'react'
import { Link } from 'gatsby'

import './TopNav.scss'
const TopNav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const hamburgerClass = navOpen
    ? 'navbar__hamburger hamburger hamburger--spin is-active'
    : 'navbar__hamburger hamburger hamburger--spin'

  const mobileNavClass = navOpen
    ? 'TopNav__Mobile TopNav__Mobile--Open'
    : 'TopNav__Mobile'

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <>
      <nav className="TopNav__Desktop">
        <Link to="/#home">Home</Link>
        <Link to="/#commonwealth">Studio</Link>
        <Link to="/#get-involved">Get Involved</Link>
        <Link to="/our-story">Our Story</Link>
      </nav>
      {/* Start Hamburger */}
      <button className={hamburgerClass} type="button" onClick={toggleNav}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <div className={mobileNavClass}>
        <div className="TopNav__Mobile--Contents">
          <Link to="/#home" onClick={toggleNav}>
            Home
          </Link>
          <Link to="/#commonwealth" onClick={toggleNav}>
            Adventures
          </Link>
          <Link to="/#get-involved" onClick={toggleNav}>
            Get Involved
          </Link>
          <Link to="/our-story" onClick={toggleNav}>
            Our Story
          </Link>
        </div>
      </div>
      {/* End Hamburger */}
    </>
  )
}

export default TopNav
