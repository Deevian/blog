import { Fragment } from 'react';
import { styled } from '@compiled/react';
import HeaderNav from './HeaderNav';

interface Props {
    isIndex?: boolean
    showLogo?: boolean
}

const Header = styled.header`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeaderLink = styled.a`
    color: #111;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const HeaderTitle = styled.h1`
    text-align: center;
    color: #111;

    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: normal;

    margin: 0;
`

const OrangeDotImage = styled.img`
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
    <Header>
        {showLogo ? (
            <Fragment>
                {!isIndex
                    ? <HeaderLink href="/"><HeaderTitle>O Ponto Laranja</HeaderTitle></HeaderLink>
                    : <HeaderTitle>O Ponto Laranja</HeaderTitle>
                }

                <OrangeDotImage alt="O Ponto Laranja" src="/orange.png"/>
            </ Fragment>
        ) : null}

        <HeaderNav />
    </Header>
)
