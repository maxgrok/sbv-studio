import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'

import '../../styles/_globals.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'We are a values-aligned venture studio for incubating discrete projects in Crypto, Web3, and DeFi.',
            },
            {
              name: 'keywords',
              content:
                'decentralized, dao, innovation',
            },
            { property: 'og:title', content: 'Studio' },
            { property: 'og:url', content: 'https://sbv.studio' },
            {
              property: 'og:image',
              content: 'https://senaryblockchain.ventures/images/sbv-og-image.png',
            },
            {
              property: 'og:description',
              content:
                'We are a values-aligned venture studio for incubating discrete projects in Crypto, Web3, and DeFi.',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: 'Studio',
            },
            {
              name: 'twitter:title',
              content: 'Studio',
            },
            {
              name: 'twitter:description',
              content:
                'We are a values-aligned venture studio for incubating discrete projects in Crypto, Web3, and DeFi.',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="Layout">{children}</div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
