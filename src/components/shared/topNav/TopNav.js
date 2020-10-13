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
              <a href="#wave-one" className="navbar-link" id="navbar">Wave One</a>
              <a href="#community-tokens" className="navbar-link" id="navbar">Community Tokens</a>
              <a href="#work-with-us" className="navbar-link" id="navbar">Work With Us</a>
      </nav>
      {/* Start Hamburger */}
      <button className={hamburgerClass} type="button" onClick={toggleNav}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <div className={mobileNavClass}>
        <div className="TopNav__Mobile--Contents">
          <ul>
              <a className="navbar-link" id="navbar" href="https://www.senaryblockchain.ventures/" onClick={toggleNav}>Home</a>
              <a className="navbar-link" id="navbar" href="/#wave-one" onClick={toggleNav}>Wave One</a>
              <a className="navbar-link" id="navbar" href="/#community-tokens" onClick={toggleNav}>Community Tokens</a>
              <a className="navbar-link" id="navbar" href="/#work-with-us" onClick={toggleNav} >Work with Us</a>
          </ul>
        </div>
      </div>
      {/* End Hamburger */}
    </>
  )
}

export default TopNav
