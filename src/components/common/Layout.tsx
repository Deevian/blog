import { ReactNode } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled  from '@emotion/styled'

import '../../styles/app.css';

import * as dayjs from 'dayjs';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/pt'


dayjs.extend(localizedFormat);
dayjs.locale('pt');

import DefaultMeta from "./meta/DefaultMeta";

interface Props {
    children: ReactNode
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

const Container = styled.main`
    display: flex;
    justify-content: center;

    min-height: 100%;
    margin: 0;
    padding: 0;

    background-color: #fafafa;

    font-family: 'PT Serif', serif;
    font-size: 16px;
`

const Section = styled.section`
    max-width: 600px;
    margin: 5rem 8% 20rem;

    @media (max-width: 600px) {
        margin: 2.5rem 8% 20rem;
    }
`

const Layout = ({ data, children }: Props) => (
    <Container>
        <DefaultMeta customStyles={data.allGhostSettings.edges[0].node.codeinjection_styles} />

        <Section>
            {children}
        </Section>
    </Container>
);

export default (props) => (
    <StaticQuery query={settingsQuery} render={data => <Layout data={data} {...props} />} />
);
