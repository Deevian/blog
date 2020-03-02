const path = require(`path`);
const ghostConfig = require(`./.ghost`);


module.exports = {
    siteMetadata: {
        siteUrl: `https://deev.io`,
    },
    plugins: [
        {
            resolve: `gatsby-source-ghost`,
            options: ghostConfig
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-51942336-2",
            },
        },
    ],
};
