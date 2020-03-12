import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'

import { Layout } from '../components/common';

const getShortDate = (stringDate) => {
    const date = new Date(stringDate);

    return `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
}

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

const propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
};

const Index = ({ data }) => {
    const posts = data.allGhostPost.edges;

    return (
        <Layout>
            <Helmet>
                <title>O Ponto Laranja</title>
            </Helmet>

            <main className="index">
                <nav className="nav">
                    <img alt="O Ponto Laranja" src="/orange.png"/>
                </nav>

                <h1 className="title">O Ponto Laranja</h1>
                <section>
                    {posts.map(({ node }) => (
                        <ul className="item" key={node.id}>
                            <li>
                                <a href={`/${node.slug}`} title={node.title}>
                                    <span className="date">{getShortDate(node.published_at)}</span>
                                    <br/> {node.title}
                                </a>
                            </li>
                        </ul>
                    ))}
                </section>
            </main>
        </Layout>
    )
};

Index.propTypes = propTypes;

export default Index;
