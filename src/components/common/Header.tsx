import * as React from 'react';
import { css } from "@linaria/core";
import HeaderNav from "./HeaderNav";

interface Props {
  isIndex?: boolean;
  showLogo?: boolean;
}

const headerStyles = css`
  & svg,
  & image {
    shape-rendering: geometricPrecision;
  }

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const desktopImageStyles = css`
  width: 25.438rem;
  height: auto;

  padding-bottom: 1.1rem;

  display: none;

  @media (min-width: 483px) {
    display: block;
  }
`;

const mobileImageStyles = css`
  width: 12.25rem;
  height: auto;

  padding-bottom: 1.1rem;

  display: none;

  @media (max-width: 30.125rem) {
    display: block;
  }
`;

const Logo = () => (
  <>
    <svg className={desktopImageStyles} width="407" height="62">
      <image xlinkHref="/logo-desktop.svg" width="407" height="62" />
    </svg>

    <svg className={mobileImageStyles} width="196" height="113">
      <image xlinkHref="/logo-mobile.svg" width="196" height="113" />
    </svg>
  </>
);

export default ({ isIndex = false, showLogo = true }: Props) => (
  <header className={headerStyles}>
    {showLogo ? (
      !isIndex ? (
        <a href="/" title="O Ponto Laranja">
          <Logo />
        </a>
      ) : (
        <Logo />
      )
    ) : null}

    <HeaderNav />
  </header>
);
