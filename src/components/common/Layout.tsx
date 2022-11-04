import { css } from 'linaria';
import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../../styles/app.css';

import * as dayjs from 'dayjs';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/pt'


dayjs.extend(localizedFormat);
dayjs.locale('pt');

import DefaultMeta from "./meta/DefaultMeta";

interface Props {
    showLogo?: boolean
    children: React.ReactNode
    data: {
        allGhostSettings: {
            edges: Array<{
                node: {
                    codeinjection_styles: string
                }
            }>
        }
    }
}

export const settingsQuery = graphql`
    query GhostSettings {
        allGhostSettings {
            edges {
                node {
                    ...GhostSettingsFields
                }
            }
        }
    }
`;

const containerStyles = css`
    display: flex;
    justify-content: center;

    min-height: 100%;
    margin: 0;
    padding: 0;

    background-color: #fafafa;
`

const logoSectionStyles = css`
    max-width: 31.25rem;

    margin-top: 5rem;
    margin-bottom: 20rem;
    margin-right: 8%;
    margin-left: 8%;

    @media (max-width: 31.25rem) {
        margin-top: 2rem;
    }
`

const logolessSection = css`
    max-width: 31.25rem;

    margin-top: 2rem;
    margin-bottom: 20rem;
    margin-right: 8%;
    margin-left: 8%;

    @media (max-width: 31.25rem) {
        margin-top: 2rem;
    }
`

const Layout = ({ showLogo = true, data, children }: Props) => {
    const sectionStyles = showLogo ? logoSectionStyles : logolessSection;

    return (
        <main className={containerStyles}>
            <DefaultMeta customStyles={data.allGhostSettings.edges[0].node.codeinjection_styles} />

            <section className={sectionStyles}>
                {children}
            </section>

            <script type="text/javascript">
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "bfed0vq0uj");
            </script>
        </main>
    )
}

export default (props) => (
    <StaticQuery query={settingsQuery} render={data => <Layout data={data} {...props} />} />
);
