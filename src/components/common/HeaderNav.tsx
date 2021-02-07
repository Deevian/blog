import * as React from 'react';
import { styled } from '@compiled/react';

const HeaderNav = styled.div`
    display: flex;
    justify-content: center;

    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;

    text-align: center;
    width: 16rem;
    margin-top: -0.5rem;
`

const NavLink = styled.a`
    padding: 0 1rem;
    line-height: 1.5rem;
    font-size: 0.85rem;
    color: #888;

    text-decoration: none;

    &:hover {
        color: #111;
        text-decoration: underline;
    }
`


export default () => (
    <HeaderNav>
        <NavLink href="/">início</NavLink>
        <NavLink href="/indice">índice</NavLink>
        <NavLink href="/sobre">sobre</NavLink>
    </HeaderNav>
)
