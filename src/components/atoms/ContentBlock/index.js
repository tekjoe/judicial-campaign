import React from "react"
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === "center" ? "center" : "flex-start")};
  text-align: ${({ align }) => (align === "center" ? "center" : "left")};
  h2 {
    font-size: ${({ theme }) => theme.typography.h3};
    color: ${({ inverse }) => (inverse ? "white" : "inherit")};
    margin-bottom: 2rem;
    font-weight: bold;
    max-width: 15ch;
    line-height: 1;
  }
  h3 {
    color: ${({ inverse }) => (inverse ? "white" : "inherit")};
    margin-bottom: 2rem;
    font-weight: bold;
    line-height: 1;
    font-size: ${({ theme }) => theme.typography.h4};
  }
  p {
    color: ${({ inverse }) => (inverse ? "white" : "inherit")};
    max-width: 65ch;
    &:last-of-type {
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.h2};
  }
`

const ContentBlock = ({ children, align, inverse }) => {
  return (
    <Content align={align} inverse={inverse}>
      {children}
    </Content>
  )
}

export default ContentBlock
