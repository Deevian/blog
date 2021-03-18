import * as React from 'react';
import Helmet from 'react-helmet';

interface Props {
    customStyles?: string
}

export default ({ customStyles }: Props) => (
    <Helmet>
        <title>O Ponto Laranja</title>

        <meta property="og:site_name" content="O Ponto Laranja" />
        <meta property="og:title" content="O Ponto Laranja" />
        <meta property="fb:app_id" content="699908233987484" />
        <meta property="og:image" content={`https://opontolaranja.pt/orange.png?v=${new Date().getTime()}`} />
        <meta property="og:description" content="As deambulações cansadas de uma sombra demente" />
        <meta name="twitter:card" content="summary_large_image" />

        {customStyles ? <style type="text/css">{customStyles}</style> : null}
    </Helmet>
)
