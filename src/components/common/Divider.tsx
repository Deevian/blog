import { Fragment } from "react";
import styled from "@emotion/styled";

interface Props {
    year: number
}

const Divider = styled.div`
    font-family: 'PT Serif', serif;
    width: 25%;
    font-size: 0.8rem;

    color: #666;

    margin: 2rem 0 1rem;
`

export default ({ year }: Props) => (
    <Fragment>
        <Divider>
            <span>{year}</span>
            <hr/>
        </Divider>
    </Fragment>
);
