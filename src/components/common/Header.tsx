import { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'

interface Props {
    isIndex?: boolean
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

const HeaderNav = styled.div`
    display: flex;
    justify-content: center;

    margin: -.5rem 0 3rem;

    border-top: 1px solid #CCC;
    border-bottom: 1px solid #CCC;

    text-align: center;
    width: 50%;
`

const NavLink = styled.a`
    padding: 0 1rem;
    line-height: 1.5rem;
    font-size: 0.85rem;
    color: #666;

    text-decoration: none;

    &:hover {
        color: #111;
        text-decoration: underline;
    }
`

export default ({ isIndex = false }: Props) => (
    <Fragment>
        <Helmet>
            <title>O Ponto Laranja</title>
        </Helmet>

        <Header>
            {!isIndex
                ? <HeaderLink href="/"><HeaderTitle>O Ponto Laranja</HeaderTitle></HeaderLink>
                : <HeaderTitle>O Ponto Laranja</HeaderTitle>
            }

            <OrangeDotImage alt="O Ponto Laranja" src="/orange.png"/>

            <HeaderNav>
                <NavLink href="/">início</NavLink>
                <NavLink href="/indice">índice</NavLink>
            </HeaderNav>
        </Header>
    </Fragment>
)
