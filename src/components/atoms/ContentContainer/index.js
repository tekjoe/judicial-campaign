import React from "react"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 0 2rem;
  max-width: 75rem;
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default ContentContainer
