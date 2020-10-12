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
        <ul>
          <li><a href="https://www.senaryblockchain.ventures">Home</a></li>
          <li><a href="http://www.sbv.studio">Studio</a></li>
            <ul>
              <li><a href="#wave-one">Wave One</a></li>
              <li><a href="#community-tokens">Community Tokens</a></li>
              <li><a href="#work-with-us">Work With Us</a></li>
            </ul>
        </ul>
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
            <li style={{listStyle:`none`}}>
              <Link to="https://www.senaryblockchain.ventures/" onClick={toggleNav}>
            Home</Link>
            <ul>
              <li><Link to="/" onClick={toggleNav}>Studio</Link></li>
              <ul>
              <li><Link to="/#wave-one" onClick={toggleNav}>Wave One</Link></li>
              <li><Link to="/#community-tokens" onClick={toggleNav}>Community Tokens</Link></li>
              <li><Link to="/#work-with-us" onClick={toggleNav} >Work with Us</Link></li>
              </ul>
            </ul>
            </li>
          </ul> 
          <br/>{/* make into dropdown with "Studio" --> "Wave One", "Community Tokens", "Work with Us" options*/}
        </div>
      </div>
      {/* End Hamburger */}
    </>
  )
}

export default TopNav
