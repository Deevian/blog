import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://assets.opontolaranja.pt/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff2"/>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://assets.opontolaranja.pt/EJRTQgYoZZY2vCFuvAFT_r21cg.woff2"/>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://assets.opontolaranja.pt/EJRVQgYoZZY2vCFuvAFWzr8.woff2"/>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous"
              href="https://assets.opontolaranja.pt/EJRSQgYoZZY2vCFuvAnt66qSVys.woff2"/>

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}