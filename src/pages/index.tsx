import { Fragment } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'
import styled from '@emotion/styled';
import * as dayjs from 'dayjs';

import { Layout, Divider, Header } from '../components/common';
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

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`

const PostDivider = styled.div`
    height: 1px;
    width: 70%;

    margin: 10rem 0 6rem;
    border-bottom: 1px solid #999;
 `

export default ({ data }: Props) => (
    <Layout>
        <Header isIndex />

        <section>
            {data.allGhostPost.edges.map(({ node }, index) => (
                <PostContainer>
                    {index !== 0 ? <PostDivider /> : null}

                    <PostBody
                        title={node.title}
                        slug={node.slug}
                        html={node.html}
                        published_at={node.published_at}
                        feature_image={node.feature_image}
                    />
                </PostContainer>
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