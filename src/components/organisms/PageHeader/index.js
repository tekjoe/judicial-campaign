import React from "react"
import styled from "styled-components"
import ContentContainer from "../../atoms/ContentContainer"

const Header = styled.header`
  background: #264577;
  padding: ${({ withImage }) => (withImage ? "5rem 0 6rem 0" : "5rem 0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 1024px) {
    padding: ${({ withImage }) => (withImage ? "5rem 0 8rem 0" : "5rem 0")};
  }
`

const Subtitle = styled.p`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  color: #c4c4c4;
  font-size: 1rem;
  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.h6};
  }
`

const Title = styled.h1`
  color: white;
  font-size: ${({ theme }) => theme.typography.h3};
  max-width: 15ch;
  font-weight: 800;
  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.h1};
  }
`

const PageHeader = ({ subtitle, title, withImage }) => {
  return (
    <Header withImage={withImage}>
      <ContentContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </ContentContainer>
    </Header>
  )
}

export default PageHeader
