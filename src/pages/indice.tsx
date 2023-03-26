import * as React from 'react';
import { Fragment } from "react";
import { css } from "@linaria/core";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as dayjs from "dayjs";

import { Layout, Divider, Header } from "../components/common";

interface Props {
  data: {
    allGhostPost: {
      edges: Array<{
        node: {
          published_at: string;
          id: string;
          slug: string;
          title: string;
          tags?: Array<{ name: string }>;
        };
      }>;
    };
  };
}

const indexContainerStyles = css`
  margin-top: 4rem;
`;

const listStyles = css`
  padding-left: 1.5rem;
`;

const listItemStyles = css`
  font-family: serif;
  font-weight: normal;

  line-height: 1.2rem;

  margin: 0;
  margin-bottom: 1rem;

  list-style-position: outside;
  list-style-type: none;
`;

const itemLinkStyles = css`
  color: #333;
  text-decoration: none;

  &:hover {
    color: #111;
    text-decoration: underline;
  }
`;

const itemDateStyles = css`
  display: block;
  margin-top: -0.1rem;

  font-size: 0.7rem;
  color: #999;
`;

export default ({ data }: Props) => {
  let lastYear;

  return (
    <Layout>
      <Helmet>
        <title>Índice</title>
        <meta property="og:title" content="O Ponto Laranja // Índice" />
        <meta property="og:url" content="https://opontolaranja.pt/indice/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://opontolaranja.pt/indice/" />
      </Helmet>

      <Header />

      <main className={indexContainerStyles}>
        {data.allGhostPost.edges.map(({ node }) => {
          const date = dayjs(node.published_at);
          const year = date.year();
          const tags = node.tags;

          const isPersonal =
            tags && tags.some((tag) => tag.name === "personal");
          if (isPersonal) return null;

          const post = (
            <Fragment key={node.id}>
              {lastYear !== year ? <Divider year={date.year()} /> : null}

              <ul className={listStyles}>
                <li className={listItemStyles}>
                  <a
                    className={itemLinkStyles}
                    href={`/${node.slug}`}
                    title={node.title}
                  >
                    {node.title} <br />
                    <span className={itemDateStyles}>{date.format("LL")}</span>
                  </a>
                </li>
              </ul>
            </Fragment>
          );

          lastYear = year;

          return post;
        })}
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allGhostPost(sort: { published_at: DESC }) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
