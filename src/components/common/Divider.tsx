import * as React from 'react';
import { css } from "@linaria/core";

interface Props {
  year: number;
}

const dividerStyles = css`
  text-align: left;

  width: 100%;
  font-size: 0.8rem;

  color: #666;

  margin: 2rem 0 1rem;

  border-bottom: 1px solid #aaa;
`;

export default ({ year }: Props) => (
  <>
    <div className={dividerStyles}>
      <span>{year}</span>
    </div>
  </>
);
