import { css } from '@linaria/core';
import * as React from 'react';

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
    <React.Fragment>
        <div className={dividerStyles}>
            <span>{year}</span>
        </div>
    </React.Fragment>
);
