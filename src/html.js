import React from "react";

const ss = `
  var _paq = window._paq || [];
  _paq.push(["setRequestMethod", "POST"]);
  _paq.push(["setCookieDomain", "opontolaranja.pt"]);
  _paq.push(["setDomains",["opontolaranja.pt"],
  ]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  _paq.push(["enableHeartBeatTimer"]);
  if (document.referrer) {
    _paq.push(["setReferrerUrl", document.referrer]);
  }
  (function () {
    var u = "//e.opontolaranja.pt";
    _paq.push(["setRequestMethod", "POST"]);
    _paq.push(["setTrackerUrl", u]);
    _paq.push(["setSiteId", "1"]);

    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.async = true;
    g.defer = true;
    g.src = "https://opontolaranja.pt/m.js";
    s.parentNode.insertBefore(g, s);
  })();
`;

export default function HTML(props) {
  return (
    <html lang="pt" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

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

        <script async dangerouslySetInnerHTML={{ __html: ss }} />
      </body>
    </html>
  );
}
