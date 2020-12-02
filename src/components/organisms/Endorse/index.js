import React from "react"
import styled from "styled-components"
import masthead from "../../../images/investiture.jpg"
import LinkButton from "../../atoms/LinkButton"
import { Column, Columns } from "../../atoms/Columns"
import ContentContainer from "../../atoms/ContentContainer"

const EndorseSection = styled.section`
  display: ${props => (props.centered ? "flex" : "block")};
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to right,
      hsla(217, 52%, 31%, 60%),
      hsla(217, 52%, 31%, 15%)
    ),
    url(${masthead}) center/cover;
  @media (min-width: 1024px) {
    height: 400px;
  }
  @media (min-width: 1200px) {
    height: 550px;
  }
`

EndorseSection.CTA = styled.div`
  padding: 4rem 1rem;
  h1,
  p {
    color: white;
  }
  p {
    font-size: ${({ theme }) => theme.typography.h3};
    font-weight: 900;
    line-height: 1;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    padding: 4rem 1rem;
  }
  @media (min-width: 1024px) {
    max-width: 400px;
  }
  @media (min-width: 1200px) {
  }
`

const Endorse = () => {
  return (
    <EndorseSection centered>
      <ContentContainer>
        <Columns>
          <Column>
            <EndorseSection.CTA>
              <p>Join Us - Endorse Judge Davis</p>
              <LinkButton to="/contact?involved=endorse">Endorse</LinkButton>
            </EndorseSection.CTA>
          </Column>
          <Column></Column>
        </Columns>
      </ContentContainer>
    </EndorseSection>
  )
}

export default Endorse
