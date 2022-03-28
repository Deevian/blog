import { css } from 'linaria';
import * as React from 'react';
import * as dayjs from 'dayjs';
import parse from 'html-react-parser';

interface Props {
    html: string
    title?: string
    published_at?: string
    slug?: string
    feature_image?: string
    tags?: Array<{ name: string }>
    is_personal?: boolean
}

const postContainerStyles = css`
    display: flex;
    flex-direction: column;

    align-items: center;

    font-weight: normal;
    line-height: 1.6rem;
    color: #333;

    & > * a {
        color: #d91100;
    }

    & > * a:visited, & > * a:active, & > * a:hover {
        color: #ca1000;
    }

    &:not(:first-of-type):before {
        content: '';
        display: block;

        height: 0.063rem;
        width: 70%;

        margin: 10rem 0 6rem;
        border-bottom: 0.063rem solid #999;
    }

    & > * {
        align-self: stretch;
    }

    li + li {
        margin-top: 1rem;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 0.063rem solid #666;

        font-style: italic;
        font-size: 0.9rem;

        line-height: 1.5rem;

        margin-bottom: 1rem;
    }
`

const postLinkStyles = css`
    text-decoration: none;
    color: #111;

    &:hover {
        text-decoration: underline;
        color: #666;
    }

    text-align: center;

    line-height: 2rem;
    font-size: 1.9rem;
    font-weight: normal;

    margin: 4.5rem 0 0;
`

const postTitleStyles = css`
    text-align: center;

    line-height: 2rem;
    font-size: 1.9rem;
    font-weight: normal;
    color: #111;

    margin: 4.5rem 0 0;
`

const postDateStyles = css`
    text-align: center;
    font-size: 0.75rem;
    color: #555;

    margin: 0.5rem 0 1rem;
`

const postImageStyles = css`
    width: 140%;

    margin: 1.5rem 0 0;
    margin-left: -20%;

    
    @media (max-width: 31.25rem) {
        width: 100%;
        margin-left: 0;
    }
`

const removeMargins = css`
    margin-bottom: -5rem;

    &:not(:first-of-type) > a {
        margin: 0;
    }
`

export default ({ title, html, published_at, slug, feature_image, tags, is_personal }: Props) => {
    const isPersonal = tags && tags.some(tag => tag.name === 'personal')
    if (isPersonal && !is_personal) return null;
    if (!isPersonal && is_personal) return null;

    const containerStyles = `${postContainerStyles} ${isPersonal && removeMargins}`

    return (
        <article className={containerStyles}>
            {title
                ? slug
                    ? <a className={postLinkStyles} href={`/${slug}`}>{title}</a>
                    : <h3 className={postTitleStyles}>{title}</h3>
                : null
            }

            {published_at
                ? <abbr className={postDateStyles}>{dayjs(published_at).format('LL')}</abbr>
                : null
            }

            {feature_image ? (
                <img className={postImageStyles} src={feature_image} alt={title} />
            ): null}

            {parse(html)}
        </article>
    )
}
