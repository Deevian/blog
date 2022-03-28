const ghostConfig = require(`./.ghost`);

module.exports = {
  siteMetadata: {
    siteUrl: `https://opontolaranja.pt`,
  },
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: ghostConfig
    },
    `gatsby-plugin-react-helmet`,
    // {resolve: 'gatsby-matomo'},
    {resolve: 'gatsby-plugin-typescript'},
    {resolve: 'gatsby-plugin-linaria'},
  ],
};
