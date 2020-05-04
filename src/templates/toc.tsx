import { Fragment } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import * as dayjs from 'dayjs';

import { Layout, Divider, Header } from '../components/common';

interface Props {
    data: {
        allGhostPost: {
            edges: Array<{
                node: {
                    published_at: string
                    id: string
                    slug: string
                    title: string
                }
            }>
        }
    }
}

const IndexContainer = styled.section`
    margin-top: -2rem;
`

const List = styled.ul`
    padding-left: 1.5rem;
`

const ListItem = styled.li`
    font-family: 'PT Serif', serif;
    font-weight: normal;

    line-height: 1.2rem;

    margin: 0;
    margin-bottom: 1rem;

    list-style-position: outside;
    list-style-type: none;

`

const ItemLink = styled.a`
    color: #333;
    text-decoration: none;

    &:hover {
        color: #111;
        text-decoration: underline; 
    }
`

const ItemDate = styled.span`
    display: block;
    margin-top: -0.1rem;
    
    font-size: .7rem;
    color: #999;
`

export default ({ data }: Props) => {
    let lastYear;

    const posts = data.allGhostPost.edges;

    return (
        <Layout>
            <Header />

            <Helmet>
                <title>Índice</title>
            </Helmet>

            <IndexContainer>
                {posts.map(({ node }) => {
                    const date = dayjs(node.published_at);
                    const year = date.year();

                    const post = (
                        <Fragment key={node.id}>
                            {lastYear !== year ? <Divider year={date.year()} /> : null}

                            <List>
                                <ListItem>
                                    <ItemLink href={`/${node.slug}`} title={node.title}>
                                        {node.title} <br/>
                                        <ItemDate>
                                            {date.format('LL')}
                                        </ItemDate>
                                    </ItemLink>
                                </ListItem>
                            </List>
                        </Fragment>
                    );

                    lastYear = year;

                    return post;
                })}
            </IndexContainer>
        </Layout>
    )
};

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
