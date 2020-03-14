import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/pt'

dayjs.extend(localizedFormat);
dayjs.locale('pt');

import { Layout, Divider } from '../components/common';

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
    let lastYear;

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
                    {posts.map(({ node }) => {
                        const date = dayjs(node.published_at);
                        const year = date.year();

                        const post = (
                            <Fragment key={node.id}>
                                {lastYear !== year ? <Divider year={date.year()} /> : null}

                                <ul className="item">
                                    <li>
                                        <a href={`/${node.slug}`} title={node.title}>
                                            {node.title} <br/>
                                            <span className="date">
                                                {date.locale('pt').format('LL')}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </Fragment>
                        );

                        lastYear = year;

                        return post;
                    })}
                </section>
            </main>
        </Layout>
    )
};

Index.propTypes = propTypes;

export default Index;
