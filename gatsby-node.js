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

    result.data.allGhostPost.edges.forEach(({node}) => {
        node.url = `/${node.slug}/`;

        createPage({
            path: node.url,
            component: require.resolve('./src/templates/post.tsx'),
            context: {
                slug: node.slug,
            },
        })
    });

    createPage({ path: '/', component: require.resolve('./src/templates/index.tsx') })
    createPage({ path: '/indice', component: require.resolve('./src/templates/toc.tsx') })
};
