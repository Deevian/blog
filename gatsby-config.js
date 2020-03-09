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
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-51942336-2",
            },
        },
        { resolve: 'gatsby-matomo' }
    ],
};
