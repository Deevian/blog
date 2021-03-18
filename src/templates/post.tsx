import * as React from 'react';
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { css } from '@linaria/core';

import { Layout, Header } from '../components/common'
import PostBody from '../components/common/PostBody';

interface Props {
    data: {
        ghostPost: {
            title: string,
            slug: string,
            html: string,
            excerpt: string,
            published_at: string,
            feature_image?: string
        }
    }
}

const postContainerStyles = css`
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

const ImageMeta = ({ image }) => (
    <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
    </Helmet>
);

function truncate(str, n){
    if (!str || str.length <= n) {
        return str;
    }

    const subString = str.substr(0, n - 4);
    return `${subString.substr(0, subString.lastIndexOf(" "))}...`;
}

export default ({ data }: Props) => (
    <Layout showLogo={false}>
        <Header showLogo={false} />

        <Helmet>
            <title>{data.ghostPost.title}</title>
            <meta property="og:title" content={data.ghostPost.title} />
            <meta property="og:url" content={`https://opontolaranja.pt/${data.ghostPost.slug}/`} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={truncate(data.ghostPost.excerpt, 200)} />
        </Helmet>

        {data.ghostPost.feature_image ? <ImageMeta image={data.ghostPost.feature_image} /> : null}

        <article className={postContainerStyles}>
            <PostBody
                title={data.ghostPost.title}
                html={data.ghostPost.html}
                published_at={data.ghostPost.published_at}
                feature_image={data.ghostPost.feature_image}
            />
        </article>
    </Layout>
)

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;

