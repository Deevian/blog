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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-51942336-2",
            },
        },
        { resolve: 'gatsby-matomo' },
        { resolve: 'gatsby-plugin-typescript' },
        'gatsby-plugin-no-javascript'
    ],
};
