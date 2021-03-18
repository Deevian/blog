import { css } from '@linaria/core';
import * as React from 'react';
import * as dayjs from 'dayjs';

interface Props {
    title: string
    html: string
    published_at?: string
    slug?: string
    feature_image?: string
}

const postLinkStyles = css`
    text-decoration: none;
    color: #111;

    &:hover {
        text-decoration: underline;
    }

    text-align: center;

    font-family: "Playfair Display", serif;
    font-size: 1.9rem;
    font-weight: normal;

    margin: 4rem 0 0;
`

const postTitleStyles = css`
    text-align: center;

    font-family: "Playfair Display", serif;
    font-size: 1.9rem;
    font-weight: normal;
    color: #111;

    margin: 4rem 0 0;
`

const postDateStyles = css`
    font-size: 0.75rem;
    color: #555;

    margin: 0.5rem 0 2rem;
`

const postImageStyles = css`
    width: 120%;

    margin: 1.5rem 0 0;
`

const postBodyStyles = css`
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

        margin-bottom: 1rem;
    }

    a {
        color: #333;
    }
    
    a:hover {
        color: #666;
    }
`

export default ({ title, html, published_at, slug, feature_image }: Props) => (
    <>
        {slug
            ? <a className={postLinkStyles} href={`/${slug}`}>{title}</a>
            : <h3 className={postTitleStyles}>{title}</h3>}

        {published_at
            ? <abbr className={postDateStyles}>{dayjs(published_at).format('LL')}</abbr>
            : null
        }

        {feature_image ? (
            <img className={postImageStyles} src={feature_image} alt={title} />
        ): null}

        <section className={postBodyStyles} dangerouslySetInnerHTML={{ __html: html }} />
    </>
)

