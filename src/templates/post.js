import React  from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/common'

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;

const propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired
};

const Post = ({ data }) => {
    const post = data.ghostPost;

    return (
        <Layout>
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
                <title>{post.title}</title>
            </Helmet>

            <main className="post">
                <nav className="nav active">
                    <a href="/">
                        <img alt="Índice" src="/orange.png"/>
                    </a>
                </nav>

                <h1 className="title">{post.title}</h1>
                <section dangerouslySetInnerHTML={{ __html: post.html }}/>
            </main>
        </Layout>

    )
};

Post.propTypes = propTypes;

export default Post
