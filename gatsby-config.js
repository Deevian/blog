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
    {resolve: 'gatsby-matomo'},
    {resolve: 'gatsby-plugin-typescript'},
    {resolve: 'gatsby-plugin-linaria'},
    'gatsby-plugin-no-javascript',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            allGhostPost {
                edges {
                    node {
                        slug
                        updated_at
                    }
                }
            }
            allGhostPage {
                edges {
                    node {
                        slug
                        updated_at
                    }
                }
            }
          }
        `,
        resolveSiteUrl: () => `https://opontolaranja.pt`,
        serialize: ({allGhostPost, allGhostPage}) => {
          const pages = allGhostPage.edges.map(({node}) => ({
            url: `https://opontolaranja.pt/${node.slug}`,
            lastmod: new Date(node.updated_at).toISOString().split(`T`)[0],
            priority: 0.5
          }))

          const posts = allGhostPost.edges.map(({node}) => ({
            url: `https://opontolaranja.pt/${node.slug}`,
            lastmod: new Date(node.updated_at).toISOString().split(`T`)[0],
            priority: 0.5
          }))

          return [{
            url: `https://opontolaranja.pt`,
            changefreq: 'daily',
            lastmod: new Date().toISOString().split(`T`)[0],
            priority: 1,
          }, ...pages, ...posts];
        },
      }
    }
  ],
};
