import { css } from '@linaria/core';
import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout, Header } from '../components/common';
import PostBody from "../components/common/PostBody";

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
                }
            }>
        }
    }
}

const postContainerStyles = css`
    &:not(:first-child):before {
        content: '';
        display: block;

        height: 1px;
        width: 70%;
    
        margin: 10rem 0 6rem;
        border-bottom: 1px solid #999;
    }

    display: flex;
    flex-direction: column;

    align-items: center;

    font-weight: normal;
    line-height: 26px;
    color: #333;

    & > * {
        align-self: stretch;
    }
    
    li + li {
        margin-top: 1rem;
    }
    
    blockquote {
        padding-left: 1rem;
        border-left: 1px solid #666;
    
        font-style: italic;
        font-size: 0.9rem;
    
        line-height: 24px;
    
        margin-bottom: 1rem;
    }
    
    a {
        color: #333;
    }
    
    a:hover {
        color: #666;
    }
`

export default ({ data }: Props) => (
    <Layout>
        <Header isIndex />

        <section>
            {data.allGhostPost.edges.map(({ node }, index) => (
                <article key={index} className={postContainerStyles}>
                    <PostBody
                        title={node.title}
                        slug={node.slug}
                        html={node.html}
                        published_at={node.published_at}
                        feature_image={node.feature_image}
                    />
                </article>
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
