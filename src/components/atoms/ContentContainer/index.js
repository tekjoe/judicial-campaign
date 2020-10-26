import React from "react"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: ${({ isFullWidth }) => (isFullWidth ? 0 : "0 2rem")};
  max-width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "75rem")};
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`

const ContentContainer = ({ children, isFullWidth }) => {
  return <Container isFullWidth={isFullWidth}>{children}</Container>
}

export default ContentContainer
