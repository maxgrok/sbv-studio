import React from 'react'
import { Link } from 'gatsby'

import IconMediumSrc from '../../../images/IconMedium.svg'
import IconTwitterSrc from '../../../images/IconTwitter.svg'

import './SocialLinks.scss'

const SocialLinks = () => (
  <div className="SocialLinks">
    <Link href="https://medium.com/senary-blockchain-ventures">
      <img src={IconMediumSrc} />
    </Link>
    <Link href="https://twitter.com/sbv_studio">
      <img src={IconTwitterSrc} />
    </Link>
  </div>
)

export default SocialLinks
