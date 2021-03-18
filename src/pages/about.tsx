import * as React from 'react';
import Helmet from 'react-helmet'
import { Layout, Header } from '../components/common';
import PostBody from "../components/common/PostBody";
import { css } from '@linaria/core';

const sectionStyles = css`
    display: flex;
    flex-direction: column;

    & > * {
        align-self: stretch;
    }

    align-items: center;

    font-weight: normal;
    line-height: 26px;
    color: #333;
`

const titleStyles = css`
    text-align: center;

    font-size: 1.9rem;
    font-weight: normal;
    color: #111;

    margin: 4.5rem 0 1rem;
`


export default () => (
    <Layout>
        <Helmet>
            <title>Sobre Mim</title>
        </Helmet>

        <Header />

        <section className={sectionStyles}>
            <h3 className={titleStyles}>Sobre Mim</h3>
            <PostBody
                html={`
                    <p>
                        Olá. O meu nome é João. E eu sou... eu. Uma talvez-pessoa que sabe muito pouco
                        sobre nada, e que volta e meia se perde nas coisas estranhas que populam este ponto
                        laranja. Autor prolífero de blogs defuntos, anda agora à procura das deambulações
                        cansadas de uma sombra demente que fugiu sem que desse por ela.
                    </p>
                    <p>
                        Coisas. Não sei bem. Tentativa de saber, entretanto.
                    </p>
                `}
            />
        </section>
    </Layout>
);
