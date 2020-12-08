import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout, Header } from '../components/common'
import PostBody from "../components/common/PostBody";

interface Props {
    data: {
        ghostPost: {
            title: string,
            url: string,
            html: string,
            excerpt: string,
            published_at: string,
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
    if (str.length <= n) {
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
            <meta property="og:url" content={data.ghostPost.url} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={truncate(data.ghostPost.excerpt, 200)} />
        </Helmet>

        {data.ghostPost.feature_image ? <ImageMeta image={data.ghostPost.feature_image} /> : null}

        <PostBody
            title={data.ghostPost.title}
            html={data.ghostPost.html}
            published_at={data.ghostPost.published_at}
            feature_image={data.ghostPost.feature_image}
        />
    </Layout>
)

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;

