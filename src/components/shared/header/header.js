import React from 'react'
import { Link } from 'gatsby'
import TopNav from '../topNav/TopNav'

import Brand from '../../../images/sbv__logo.png'
import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Header__Contents">
    <a className="top-anchor" id="ourstory-home" />
      <a className="Logo" href={`https://senaryblockchain.ventures`}>
        <img src={Brand} alt="Brand"/>
      </a>
      <TopNav />
    </div>
  </div>
)

export default Header
