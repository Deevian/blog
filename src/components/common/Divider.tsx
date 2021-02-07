import { Fragment } from 'react';
import styled from '@emotion/styled'

interface Props {
    year: number
}

const Divider = styled.div`
    text-align: left;

    width: 100%;
    font-size: 0.8rem;

    color: #666;

    margin: 2rem 0 1rem;

    border-bottom: 1px solid #AAA;
`

export default ({ year }: Props) => (
    <Fragment>
        <Divider>
            <span>{year}</span>
        </Divider>
    </Fragment>
);
