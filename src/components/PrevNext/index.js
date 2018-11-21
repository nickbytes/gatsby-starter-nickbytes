import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 80px 0;
  padding: 0;
`;

const PrevNext = ({ previous, next }) => (
  <Wrapper>
    {previous && (
      <p>
        Previous:
        <Link to={previous.fields.slug} rel="prev">
          {previous.frontmatter.title}
        </Link>
      </p>
    )}

    {next && (
      <p>
        Next:
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </Link>
      </p>
    )}
  </Wrapper>
);

export default PrevNext;
