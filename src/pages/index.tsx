import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout, Header } from '../components/common';
import Post from '../components/common/Post';

interface Props {
    data: {
        allGhostPost: {
            edges: Array<{
                node: {
                    id: string
                    slug: string
                    title: string
                    html: string
                    published_at: string
                    feature_image?: string
                    tags?: Array<{ name: string }>
                }
            }>
        }
    }
}

export default ({ data }: Props) => (
    <Layout>
        <Header isIndex />

        <section>
            {data.allGhostPost.edges.map(({ node }, index) => (
                <Post
                  // @ts-ignore
                    key={index}
                    title={node.title}
                    slug={node.slug}
                    html={node.html}
                    tags={node.tags}
                    published_at={node.published_at}
                    feature_image={node.feature_image}
                />
            ))}
        </section>
    </Layout>
);

export const pageQuery = graphql`
    {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
        ) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
    }
`;
