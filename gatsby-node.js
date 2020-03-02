const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allGhostPost(sort: { order: ASC, fields: published_at }) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw new Error(result.errors)
    }

    const posts = result.data.allGhostPost.edges;

    const indexTemplate = path.resolve(`./src/templates/index.js`);
    const postTemplate = path.resolve(`./src/templates/post.js`);

    posts.forEach(({node}) => {
        node.url = `/${node.slug}/`;

        createPage({
            path: node.url,
            component: postTemplate,
            context: {
                slug: node.slug,
            },
        })
    });

    createPage({
        path: '/',
        component: indexTemplate
    })
};
