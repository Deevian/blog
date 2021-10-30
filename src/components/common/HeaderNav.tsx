import { css } from 'linaria';
import * as React from 'react';

const headerNavStyles = css`
    display: flex;
    justify-content: center;

    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;

    text-align: center;
    width: 16rem;
    margin-top: -0.5rem;
`

const navLinkStyles = css`
    padding: 0 1rem;
    line-height: 1.5rem;
    font-size: 0.85rem;
    color: #888;

    text-decoration: none;

    &:hover {
        color: #111;
        text-decoration: underline;
    }
`


export default () => (
    <div className={headerNavStyles}>
        <a className={navLinkStyles} href="/">início</a>
        <a className={navLinkStyles} href="/indice">índice</a>
        <a className={navLinkStyles} href="/sobre">sobre</a>
    </div>
)
