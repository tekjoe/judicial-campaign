import React from "react"
import styled from "styled-components"

export const Blog = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1140px;
  margin: 0 2rem;
  padding: 0 0 4rem 0;
  @media (min-width: 1024px) {
    margin: 0 auto;
    padding: 0 0 5rem 0;
  }
`

Blog.Text = styled.div`
  grid-column: 1/-1;
  margin-bottom: 3rem;
  p:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1024px) {
    margin-bottom: 5rem;
    grid-column: 3/-3;
  }
  @media (min-width: 1200px) {
    grid-column: 3/-3;
  }
`

Blog.Image = styled.div`
  grid-column: 1/-1;
  margin-bottom: 3rem;
  margin-top: ${({ isHeader }) => (isHeader ? "-4rem" : 0)};
  position: relative;
  @media (min-width: 1024px) {
    margin-bottom: 5rem;
    grid-column: 2/-2;
  }
`

const BlogLayout = ({ children }) => {
  return <Blog>{children}</Blog>
}

export default BlogLayout
