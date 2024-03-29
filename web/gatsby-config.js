module.exports = {
  siteMetadata: {
    title: `Ingrid Blix`,
    description: `Ingrid Blix`,
    author: `@momentiris <https://github.com/momentiris>`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'r641vock',
        dataset: 'ingridblix_dataset',
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
