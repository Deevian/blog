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

const ImageMeta = ({ image }) => (
    <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
    </Helmet>
);

const Post = ({ data }) => {
    const post = data.ghostPost;

    return (
        <Layout>
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
                <title>{post.title}</title>

                <meta property="og:title" content={post.title} />
            </Helmet>

            {post.feature_image ? <ImageMeta image={post.feature_image} /> : null}

            <nav className="nav active">
                <a href="/">
                    <img alt="Índice" src="/orange.png"/>
                </a>
            </nav>

            <h1 className="title">{post.title}</h1>
            <section className="post" dangerouslySetInnerHTML={{ __html: post.html }}/>
        </Layout>

    )
};

Post.propTypes = propTypes;

export default Post
