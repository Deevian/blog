import { Layout, Header } from '../components/common';
import PostBody from "../components/common/PostBody";

export default () => (
    <Layout>
        <Header />

        <section>
            <PostBody
                title={'Sobre Mim'}
                html={`
                    <p style="margin-top: -1rem">
                        Olá. O meu nome é João. E eu sou... eu. Pessoa de meia-tijela que não sabe nada
                        sobre nada, e que volta e meia se perde nas coisas estranhas que populam este ponto
                        laranja. Autor prolífero de blogs defuntos, ando agora à procura das deambulações
                        de uma sombra cansada de si mesma que fugiu sem que eu desse por ela.
                    </p>
                    <p>Não sei.</p>
                    <p>Enfim.</p>
                `}
            />
        </section>
    </Layout>
);
