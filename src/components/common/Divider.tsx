/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Fragment } from 'react';

interface Props {
    year: number
}

const dividerStyles = css`
    text-align: left;

    width: 100%;
    font-size: 0.8rem;

    color: #666;

    margin: 2rem 0 1rem;

    border-bottom: 1px solid #AAA;
`

export default ({ year }: Props) => (
    <Fragment>
        <div css={dividerStyles}>
            <span>{year}</span>
        </div>
    </Fragment>
);
