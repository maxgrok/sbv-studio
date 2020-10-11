module.exports = {
  siteMetadata: {
    title: 'SBV | Studio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SBV | Studio',
        short_name: 'Studio',
        start_url: '/',
        background_color: '#000',
        theme_color: '#77A7E6',
        display: 'minimal-ui',
        icon: 'src/images/sbv__icon.png',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
  ],
}
