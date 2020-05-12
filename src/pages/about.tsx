import Helmet from 'react-helmet'
import { Layout, Header } from '../components/common';
import PostBody from "../components/common/PostBody";

export default () => (
    <Layout>
        <Helmet>
            <title>Sobre Mim</title>
        </Helmet>

        <Header />

        <section>
            <PostBody
                title={'Sobre Mim'}
                html={`
                    <p style="margin-top: -1rem">
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
