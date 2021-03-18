import { css } from '@linaria/core';
import * as React from 'react';
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
    font-size: 3.3rem;
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
    <header className={headerStyles}>
        {showLogo ? (
            <React.Fragment>
                {!isIndex
                    ? <a className={headerLinkStyles} href="/"><h1 className={headerTitleStyles}>O Ponto Laranja</h1></a>
                    : <h1 className={headerTitleStyles}>O Ponto Laranja</h1>
                }

                <img width="15" height="15" className={orangeDotStyles} alt="O Ponto Laranja" src="/orange.png"/>
            </ React.Fragment>
        ) : null}

        <HeaderNav />
    </header>
)
