import React from 'react'
import { Link } from 'gatsby'

import SocialLinks from '../social/SocialLinks'
import './footer.scss'

import MadeByRaidGuildSrc from '../../../images/raid-guild-banner.png'

{/* TO DO: Edit the links here for the site page */ }
const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="Footer__Contents">
      <nav className="Nav">
        <Link
          className="Nav__Link"
          to="/#home"
          rel="noopener noreferrer"
        >
          Home
        </Link>
        <Link
          className="Nav__Link"
          to="https://www.sbv.studio/"
          rel="noopener noreferrer"
        >
          Studio
        </Link>
        <Link
          className="Nav__Link"
          to="/#wave-one"
          rel="noopener noreferrer"
        >Wave One
        </Link>
        <Link
          className="Nav__Link"
          to="/#community-tokens"
          rel="noopener noreferrer"
        >
          Community Tokens
        </Link>

        <Link
          className="Nav__Link"
          to="/#work-with-us"
          rel="noopener noreferrer"
        >
          Work with Us
        </Link>
        <SocialLinks />
        <div className="MadeByRaidGuild">
          <a href="https://raidguild.org/" target="_blank" rel="noopener noreferrer">
            <img src={MadeByRaidGuildSrc} alt="made by raidguild" width="250px" height="auto" />
          </a>
        </div>
      </nav>
    </div>
  </div>
)

export default Footer
