import * as React from 'react';
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout, Header } from '../components/common'
import Post from '../components/common/Post';

interface Props {
    data: {
        ghostPage: {
            title: string,
            slug: string,
            html: string,
            excerpt: string,
            feature_image?: string
        }
    }
}

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
    <Layout>
        <Header />

        <Helmet>
            <title>{data.ghostPage.title}</title>
            <meta property="og:title" content={data.ghostPage.title} />
            <meta property="og:url" content={`https://opontolaranja.pt/${data.ghostPage.slug}`} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={truncate(data.ghostPage.excerpt, 200)} />
            <link rel="canonical" href={`https://opontolaranja.pt/${data.ghostPage.slug}`} />
        </Helmet>

        {data.ghostPage.feature_image ? <ImageMeta image={data.ghostPage.feature_image} /> : null}

        <Post
            title={data.ghostPage.title}
            html={data.ghostPage.html}
            feature_image={data.ghostPage.feature_image}
        />
    </Layout>
)

export const pageQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`;

