const path = require('path');

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allGhostPost(sort: {published_at: ASC}) {
                edges {
                node {
                    slug
                }
                }
            }
            allGhostPage(sort: {published_at: ASC}) {
                edges {
                node {
                    slug
                    url
                }
                }
            }
        }
    `);

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors);
    }

    // Extract query results
    const pages = result.data.allGhostPage.edges;
    const posts = result.data.allGhostPost.edges;

    // Load templates
    const pageTemplate = path.resolve(`./src/templates/page.tsx`);
    const postTemplate = path.resolve(`./src/templates/post.tsx`);


    // Create pages
    pages.forEach(({ node }) => {
        // This part here defines, that our pages will use
        // a `/:slug/` permalink.
        node.url = `/${node.slug}/`;

        createPage({
            path: node.url,
            component: pageTemplate,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
            },
        });
    });

    // Create post pages
    posts.forEach(({ node }) => {
        // This part here defines, that our posts will use
        // a `/:slug/` permalink.
        node.url = `/${node.slug}/`;

        createPage({
            path: node.url,
            component: postTemplate,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
            },
        });
    });
};
