import React from "react"
import styled from "styled-components"

export const Blog = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1140px;
  margin: 0 2rem;
  padding: ${({ withImage }) => (withImage ? "0 0 4rem 0" : "4rem 0")};
  @media (min-width: 1024px) {
    margin: 0 auto;
    padding: ${({ withImage }) => (withImage ? "0 0 5rem 0" : "5rem 0")};
  }
`

Blog.Text = styled.div`
  grid-column: 1/-1;
  margin-bottom: 3rem;
  p:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: ${({ theme }) => theme.typography.h4};
    margin-bottom: 2rem;
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.h5};
  }
  h3,
  h4 {
    margin-bottom: 1.5rem;
  }
  ul,
  ol {
    list-style-position: inside;
    li {
      line-height: 1.7;
    }
  }
  @media (min-width: 1024px) {
    margin-bottom: 2.5rem;
    &:last-of-type {
      margin-bottom: 5rem;
    }
    grid-column: 3/-3;
    ul {
      font-size: 1.125rem;
    }
    h2 {
      font-size: ${({ theme }) => theme.typography.h3};
    }
    h3 {
      font-size: ${({ theme }) => theme.typography.h4};
    }
  }
`

Blog.Figure = styled.figure`
  grid-column: 1/-1;
  margin-bottom: 3rem;
  margin-top: ${({ isHeader }) => (isHeader ? "-4rem" : 0)};
  position: relative;
  @media (min-width: 1024px) {
    margin-bottom: 5rem;
    grid-column: 2/-2;
  }
`

Blog.Caption = styled.figcaption`
  font-size: ${({ theme }) => theme.typography.small};
  margin-top: 0.5rem;
`

const BlogLayout = ({ children, withImage }) => {
  return <Blog withImage={withImage}>{children}</Blog>
}

export default BlogLayout
