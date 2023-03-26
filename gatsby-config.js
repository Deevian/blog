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
    'gatsby-plugin-typescript',
    'gatsby-plugin-linaria',
    'gatsby-plugin-react-helmet'
  ],
};
