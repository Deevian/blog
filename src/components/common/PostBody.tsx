import styled from "@emotion/styled";
import * as dayjs from "dayjs";

interface Props {
    title: string
    html: string
    published_at?: string
    slug?: string
    feature_image?: string
}

const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 0 3rem;
    padding-top: 4rem;
`

const PostLink = styled.a`
    text-decoration: none;
    color: #111;

    &:hover {
        text-decoration: underline;
    }
`

const PostTitle = styled.h3`
    text-align: center;

    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    font-weight: normal;
    color: #111;

    margin: 0;
`

const PostDate = styled.abbr`
    font-size: 0.75rem;
    color: #555;

    margin-top: 0.5rem;
`

const PostImage = styled.img`
    width: 120%;

    margin: 1.5rem 0 0;
`

const PostBody = styled.section`
    font-weight: normal;
    line-height: 26px;
    color: #333;

    li + li {
        margin-top: 1rem;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 1px solid #666;
    
        font-style: italic;
        font-size: 0.9rem;
    
        line-height: 24px;

        margin-bottom: 2rem;
    }

    a {
        color: #333;
    }
    
    a:hover {
        color: #666;
    }
`

export default ({ title, html, published_at, slug, feature_image }: Props) => (
    <article>
        <PostHeader className="post-header">
            {slug
                ? <PostLink href={`/${slug}`}><PostTitle>{title}</PostTitle></PostLink>
                : <PostTitle>{title}</PostTitle>}

            {published_at
                ? <PostDate>{dayjs(published_at).format('LL')}</PostDate>
                : null
            }

            {feature_image ? (
                <PostImage src={feature_image} alt={title} />
            ): null}
        </PostHeader>

        <PostBody dangerouslySetInnerHTML={{ __html: html }} />
    </article>
)

