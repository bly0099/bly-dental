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
    `gatsby-plugin-react-helmet`
  ],
}
