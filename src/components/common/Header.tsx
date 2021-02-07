/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Fragment } from 'react';
import HeaderNav from './HeaderNav';

interface Props {
    isIndex?: boolean
    showLogo?: boolean
}

const headerStyles = css`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const headerLinkStyles = css`
    color: #111;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const headerTitleStyles = css`
    text-align: center;
    color: #111;

    font-family: "Playfair Display", serif;
    font-size: 3.5rem;
    font-weight: normal;

    margin: 0;
`

const orangeDotStyles = css`
    position: relative;

    width: 15px;
    height: 15px;
    border-radius: 100px;

    top: -64px;
    right: -167px;

    @media (max-width: 483px) {
        top: -64px;
        right: -58px;
    }
`

export default ({ isIndex = false, showLogo = true }: Props) => (
    <header css={headerStyles}>
        {showLogo ? (
            <Fragment>
                {!isIndex
                    ? <link css={headerLinkStyles} href="/"><h1 css={headerTitleStyles}>O Ponto Laranja</h1></link>
                    : <h1 css={headerTitleStyles}>O Ponto Laranja</h1>
                }

                <img css={orangeDotStyles} alt="O Ponto Laranja" src="/orange.png"/>
            </ Fragment>
        ) : null}

        <HeaderNav />
    </header>
)
