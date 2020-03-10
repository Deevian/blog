"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

function buildTrackingCode() {
  var html = "\n var _paq = window._paq || [];\n_paq.push(['trackPageView']);\n_paq.push(['enableLinkTracking']);\n(function() {\nvar u='https://stats.opontolaranja.pt/';\n_paq.push(['setTrackerUrl', u+'js/']);\n_paq.push(['setSiteId', '1']);\nvar d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\ng.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'js/'; s.parentNode.insertBefore(g,s);\n})();\n"
  return _react.default.createElement("script", {
    key: "script-gatsby-plugin-matomo",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

function buildTrackingCodeNoJs() {
    var html = '<img src="https://stats.opontolaranja.pt/js/?idsite=1&amp;rec=1" style="border:0;" alt="" />';
  return _react.default.createElement("noscript", {
    key: "noscript-gatsby-plugin-matomo",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

function buildHead(pluginOptions) {
  return _react.default.createElement("link", {
    rel: "preconnect",
    href: pluginOptions.matomoUrl,
    key: "preconnect-gatsby-plugin-matomo"
  });
}

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents,
      pathname = _ref.pathname;
  var isProduction = process.env.NODE_ENV === 'production';
  var excludePaths = ['/offline-plugin-app-shell-fallback/'];

  if (pluginOptions && typeof pluginOptions.exclude !== 'undefined') {
    pluginOptions.exclude.map(function (exclude) {
      excludePaths.push(exclude);
    });
  }

  var isPathExcluded = excludePaths.some(function (path) {
    return pathname === path;
  });

  if ((isProduction || pluginOptions && pluginOptions.dev === true) && !isPathExcluded) {
    setHeadComponents([buildHead(pluginOptions)]);
    setPostBodyComponents([buildTrackingCode(pluginOptions), buildTrackingCodeNoJs(pluginOptions, pathname)]);
  }
};

exports.onRenderBody = onRenderBody;
