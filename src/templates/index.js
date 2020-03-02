import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'

import { Layout } from '../components/common';

export const pageQuery = graphql`
    {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
        ) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
    }
`;

const propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
};

const Index = ({ data }) => {
    const posts = data.allGhostPost.edges;

    return (
        <Layout>
            <Helmet>
                <title>Índice</title>
            </Helmet>

            <main className="index">
                <nav className="nav">
                    <img alt="Índice" src="/favicon.ico"/>
                </nav>

                <h1 className="title">Índice</h1>
                <section>

                    {posts.map(({ node }) => (
                        <ul className="item" key={node.id}>
                            <li>
                                <a href={`/${node.slug}`} title={node.title}>
                                    <span className="date">{
                                        new Date(node.published_at).toLocaleDateString('pt-PT', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                        })
                                    }</span><br/> {node.title}
                                </a>
                            </li>
                        </ul>
                    ))}

                    <ul className="item">
                        <li>
                            <a href="https://ghost.deev.io/sem-titulo/" title="(sem título)">
                                <span className="date">09/06/2018</span><br/> (sem título)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://ghost.deev.io/lilac/" title="Lilac">
                                <span className="date">02/09/2016</span><br/> Lilac
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://ghost.deev.io/dois/" title="Dois">
                                <span className="date">01/09/2015</span><br/> Dois
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://ghost.deev.io/branco/" title="Branco">
                                <span className="date">01/06/2015</span><br/> Branco
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://ghost.deev.io/silencio/" title="Silêncio">
                                <span className="date">22/01/2015</span><br/> Silêncio
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://ghost.deev.io/197/" title="197">
                                <span className="date">20/07/2014</span><br/> 197
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://ghost.deev.io/ponto-inicial/" title="Ponto Inicial">
                                <span className="date">15/06/2014</span><br/> Ponto Inicial
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2014/06/01/voltar/" title="Voltar">
                                <span className="date">01/06/2014</span><br/> Voltar
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2013/02/24/o-homem-que-destruiu-o-mundo/"
                               title="O Homem Que Destruiu o Mundo">
                                <span className="date">24/02/2013</span><br/> O Homem Que Destruiu o Mundo
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2013/02/23/sem-titulo-3/" title="(sem título)">
                                <span className="date">23/02/2013</span><br/> (sem título)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2013/01/01/sem-titulo-2/" title="(sem título)">
                                <span className="date">01/01/2013</span><br/> (sem título)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/08/30/hoje-es-magia/"
                               title="Hoje, és magia">
                                <span className="date">30/08/2012</span><br/> Hoje, és magia
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/07/30/id/" title="id">
                                <span className="date">30/07/2012</span><br/> id
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/07/05/o-parque-tentativa-1/"
                               title="O Parque (tentativa #1)">
                                <span className="date">05/07/2012</span><br/> O Parque (tentativa #1)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/06/26/time-waits-for-no-one/"
                               title="“Time Waits For No One”">
                                <span className="date">26/06/2012</span><br/> “Time Waits For No One”
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/06/13/coisas-que-me-irritam-neste-momento/"
                               title="Coisas que me irritam neste preciso momento">
                                <span className="date">13/06/2012</span><br/> Coisas que me irritam neste preciso
                                momento
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/06/13/o-lugar/" title="O Lugar">
                                <span className="date">13/06/2012</span><br/> O Lugar
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/06/04/1422/" title="(sem título)">
                                <span className="date">04/06/2012</span><br/> (sem título)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/05/12/as-vezes-sonho-demais/"
                               title="Às vezes sonho demais">
                                <span className="date">12/05/2012</span><br/> Às vezes sonho demais
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/04/27/dialogo/" title="Diálogo">
                                <span className="date">27/04/2012</span><br/> Diálogo
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/03/24/ha-luzes-no-meu-ceu/"
                               title="Há luzes no meu céu">
                                <span className="date">24/03/2012</span><br/> Há luzes no meu céu
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/02/16/sem-titulo/" title="(sem título)">
                                <span className="date">16/02/2012</span><br/> (sem título)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2012/02/08/ja-te-esqueceste/"
                               title="Já te esqueceste?">
                                <span className="date">08/02/2012</span><br/> Já te esqueceste?
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/12/27/destino/" title="Destino">
                                <span className="date">27/12/2011</span><br/> Destino
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/12/13/mudo/" title="Mudo">
                                <span className="date">13/12/2011</span><br/> Mudo
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/11/06/chuva/" title="Chuva">
                                <span className="date">06/11/2011</span><br/> Chuva
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/10/19/entreacto/" title="Entreacto">
                                <span className="date">19/10/2011</span><br/> Entreacto
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/10/02/a-harmonia-do-nada/"
                               title="A Harmonia do Nada">
                                <span className="date">02/10/2011</span><br/> A Harmonia do Nada
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/09/24/ruido/" title="Ruído">
                                <span className="date">24/09/2011</span><br/> Ruído
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/09/09/187/" title="187">
                                <span className="date">09/09/2011</span><br/> 187
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/08/27/a-desventura-de-viver/"
                               title="A Desventura de Viver">
                                <span className="date">27/08/2011</span><br/> A Desventura de Viver
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/08/25/a-incerteza-da-verdade/"
                               title="A Incerteza da Verdade">
                                <span className="date">25/08/2011</span><br/> A Incerteza da Verdade
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/08/24/as-explosoes-da-mente/"
                               title="A Incerteza da Verdade">
                                <span className="date">24/08/2011</span><br/> As Explosões da Mente
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/08/23/a-queda-das-memorias/"
                               title="A Queda das Memórias">
                                <span className="date">23/08/2011</span><br/> A Queda das Memórias
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/08/22/o-ruido-do-silencio/"
                               title="O Ruído do Silêncio">
                                <span className="date">22/08/2011</span><br/> O Ruído do Silêncio
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/08/09/carta-aberta-para-ti/"
                               title="Carta Aberta Para “Ti” (sim, para “ti”, tu sabes quem és)">
                                <span className="date">09/08/2011</span><br/> Carta Aberta Para “Ti” (sim, para “ti”, tu
                                sabes quem és)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/08/01/uma-tarde-de-verao/"
                               title="Uma Tarde de Verão">
                                <span className="date">01/08/2011</span><br/> Uma Tarde de Verão
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/07/22/o-sopro-de-uma-noite/"
                               title="O Sopro de uma Noite">
                                <span className="date">22/07/2011</span><br/> O Sopro de uma Noite
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/07/01/voar-em-terra/" title="Voar em Terra">
                                <span className="date">01/07/2011</span><br/> Voar em Terra
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/05/20/escuridao/" title="Escuridão">
                                <span className="date">20/05/2011</span><br/> Escuridão
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/05/11/lagrimas/" title="Lágrimas">
                                <span className="date">11/05/2011</span><br/> Lágrimas
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2011/04/16/o-sonho/" title="O Sonho">
                                <span className="date">16/04/2011</span><br/> O Sonho
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2010/08/27/deixa-me-voar-so-mais-um-pouco/"
                               title="Deixa-me voar, só mais um pouco…">
                                <span className="date">27/08/2010</span><br/> Deixa-me voar, só mais um pouco…
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2010/08/09/como-destruir-a-razao/"
                               title="Como Destruir a Razão">
                                <span className="date">09/08/2010</span><br/> Como Destruir a Razão
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2010/07/23/miragem/" title="Miragem">
                                <span className="date">23/07/2010</span><br/> Miragem
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2010/04/13/loop/" title="Loop">
                                <span className="date">13/04/2010</span><br/> Loop
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2010/03/21/neve/" title="Neve">
                                <span className="date">21/03/2010</span><br/> Neve
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2010/01/06/disperso/" title="Disperso">
                                <span className="date">06/01/2010</span><br/> Disperso
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/11/14/5/" title="éden (5)">
                                <span className="date">14/11/2009</span><br/> éden (5)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/10/17/longe/" title="Longe">
                                <span className="date">17/10/2009</span><br/> Longe
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/10/05/waltz/" title="Waltz">
                                <span className="date">05/10/2009</span><br/> Waltz
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/09/09/lack-of-color/" title="Lack of Color">
                                <span className="date">09/09/2009</span><br/> Lack of Color
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/08/12/algo/" title="Algo">
                                <span className="date">12/08/2009</span><br/> Algo
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/08/08/4/" title="éden (4)">
                                <span className="date">08/08/2009</span><br/> éden (4)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/07/17/3/" title="éden (3)">
                                <span className="date">17/07/2009</span><br/> éden (3)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/07/07/interludio/"
                               title="éden (interlúdio)">
                                <span className="date">07/07/2009</span><br/> éden (interlúdio)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/07/07/eden-2/" title="éden (2)">
                                <span className="date">07/07/2009</span><br/> éden (2)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/07/04/eden/" title="éden (1)">
                                <span className="date">04/07/2009</span><br/> éden (1)
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/06/01/manifesto-de-liberdade/"
                               title="Manifesto de Liberdade">
                                <span className="date">01/06/2009</span><br/> Manifesto de Liberdade
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/05/17/um-alem/" title="Um Além">
                                <span className="date">17/05/2009</span><br/> Um Além
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2009/02/17/sombra-de-um-abraco/"
                               title="Sombra de um Abraço">
                                <span className="date">17/02/2009</span><br/> Sombra de um Abraço
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2008/12/31/queres-ver-para-alem-das-nuvens/"
                               title="Queres ver para além das núvens?">
                                <span className="date">31/12/2008</span><br/> Queres ver para além das núvens?
                            </a>
                        </li>
                    </ul>
                    <ul className="item">
                        <li>
                            <a href="https://voaremterra.wordpress.com/2008/09/24/morning-haze/"
                               title="Morning Haze (Prólogo)">
                                <span className="date">24/09/2008</span><br/> Morning Haze (Prólogo)
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </Layout>
    )
};

Index.propTypes = propTypes;

export default Index;
