/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title:`Bly`,
    description:`おいしい食材と食事を探究するサイト`,
    lang:`ja`,
    siteUrl:`https://flamboyant-hoover-723e92.netlify.app`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bly`,
        short_name: `ESSENTIALS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
