module.exports = {
  siteMetadata: {
    title: `Sketchaphone`,
    description: `A game for friends to show off their imagination and sketching skills`,
    author: `@bozdoz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    'gatsby-plugin-styled-components',
  ],
}
