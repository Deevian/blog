import Helmet from 'react-helmet';

interface Props {
    customStyles?: string
}

export default ({ customStyles }: Props) => (
    <Helmet>
        <html lang="pt" />
        <title>O Ponto Laranja</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
        <meta property="og:site_name" content="O Ponto Laranja" />
        <meta property="og:title" content="O Ponto Laranja" />
        <meta property="fb:app_id" content="699908233987484" />
        <meta property="og:image" content={`https://opontolaranja.pt/orange.png?v=${new Date().getTime()}`} />
        <meta property="og:description" content="As deambulações cansadas de uma sombra demente" />
        <meta name="twitter:card" content="summary_large_image" />

        <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=block" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=block" rel="stylesheet" />

        {customStyles ? <style type="text/css">{customStyles}</style> : null}
    </Helmet>
)
