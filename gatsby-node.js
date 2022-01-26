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

            allGhostPage {
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
        node.url = `/${node.slug}`;

        createPage({
            path: node.url,
            component: require.resolve('./src/templates/post.tsx'),
            context: {
                slug: node.slug,
            },
        })
    });

    result.data.allGhostPage.edges.forEach(({node}) => {
      node.url = `/${node.slug}`;

      createPage({
        path: node.url,
        component: require.resolve('./src/templates/page.tsx'),
        context: {
          slug: node.slug,
        },
      })
    });


    createPage({ path: '/', component: require.resolve('./src/pages/index.tsx') })
    createPage({ path: '/d', component: require.resolve('./src/pages/d.tsx') })
    createPage({ path: '/indice', component: require.resolve('./src/pages/toc.tsx') })
};
