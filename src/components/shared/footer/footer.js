import React from 'react'
import { Link } from 'gatsby'

import SocialLinks from '../social/SocialLinks'
import './footer.scss'

import MadeByRaidGuildSrc from '../../../images/raid-guild-banner.png'

{/* TO DO: Edit the links here for the site page */ }
const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="Footer__Contents">
        <div className="MadeByRaidGuild">
          <a href="https://raidguild.org/" target="_blank" rel="noopener noreferrer">
            <img src={MadeByRaidGuildSrc} alt="made by raidguild" width="250px" height="auto" />
          </a>
        </div>
    </div>
    </div>
)

export default Footer
