import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../../styles/app.css';

const propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayout = ({ data, children }) => {
    const site = data.allGhostSettings.edges[0].node;

    return (
        <Fragment>
            <Helmet>
                <html lang="pt" />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet" />

                <style type="text/css">{`${site.codeinjection_styles}`}</style>
            </Helmet>

            {children}

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-51942336-2" />
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'UA-51942336-2');
            </script>
        </Fragment>
    );
};

DefaultLayout.propTypes = propTypes;

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery
