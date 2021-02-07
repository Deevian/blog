import * as React from 'react';
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

        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://fonts.gstatic.com/s/ptserif/v12/EJRTQgYoZZY2vCFuvAFT_r21cg.woff2"/>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://fonts.gstatic.com/s/ptserif/v12/EJRQQgYoZZY2vCFuvAFT9gaQZynfoA.woff2"/>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2"/>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://fonts.gstatic.com/s/ptserif/v12/EJRSQgYoZZY2vCFuvAnt66qSVys.woff2"/>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://fonts.gstatic.com/s/playfairdisplay/v22/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff2"/>

        {customStyles ? <style type="text/css">{customStyles}</style> : null}
    </Helmet>
)
