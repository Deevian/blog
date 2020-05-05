import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout, Header } from '../components/common'
import PostBody from "../components/common/PostBody";

interface Props {
    data: {
        ghostPost: {
            title: string,
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

export default ({ data }: Props) => (
    <Layout showLogo={false}>
        <Header showLogo={false} />

        <Helmet>
            <title>{data.ghostPost.title}</title>
            <meta property="og:title" content={data.ghostPost.title} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={data.ghostPost.excerpt} />
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

