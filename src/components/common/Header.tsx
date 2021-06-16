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

const desktopImageStyles = css`
    width: 407px;
    height: auto;

    padding-bottom: 1.1rem;

    display: none;

    @media (min-width: 483px) {
        display: block;
    }
`

const mobileImageStyles = css`
    width: 196px;
    height: auto;

    padding-bottom: 1.1rem;

    display: none;

    @media (max-width: 482px) {
        display: block;
    }
`

const Logo = () => (
    <>
        <img width="407" height="62" className={desktopImageStyles} src="/logo-desktop.svg" alt="O Ponto Laranja" />
        <img width="196" height="113" className={mobileImageStyles} src="/logo-mobile.svg" alt="O Ponto Laranja" />
    </>
)

export default ({ isIndex = false, showLogo = true }: Props) => (
    <header className={headerStyles}>
        {showLogo ? (
            !isIndex ? (
                <a href="/" title="O Ponto Laranja" >
                    <Logo />
                </a>
            ) : <Logo />
        ) : null}

        <HeaderNav />
    </header>
)
