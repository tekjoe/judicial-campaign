import React from "react"
import styled from "styled-components"
import masthead from "../../../images/sign-up-background.png"
import { Column, Columns } from "../../atoms/Columns"
import ContentContainer from "../../atoms/ContentContainer"
import OutboundLinkButton from "../../atoms/OutboundLinkButton"
import { darken } from "polished"

const EndorseSection = styled.section`
  display: ${props => (props.centered ? "flex" : "block")};
  justify-content: center;
  position: relative;
  align-items: center;
  background: linear-gradient(
      to right,
      hsla(217, 52%, 31%, 90%),
      hsla(217, 52%, 31%, 15%)
    ),
    url(${masthead}) top right/cover;
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
    line-height: 1.1;
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

const EndorseButton = styled(OutboundLinkButton)`
  background: #f3304a;
  padding: 1rem;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  font-size: 1.125rem;
  min-width: 250px;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: ${darken(0.1, "#f3304a")};
  }
`

const Endorse = () => {
  return (
    <EndorseSection centered>
      <ContentContainer>
        <Columns>
          <Column>
            <EndorseSection.CTA>
              <p>Add your name in support of Judge Jeff Davis</p>
              <EndorseButton href="https://docs.google.com/forms/d/e/1FAIpQLSdtcFHg9GlDFTqgqJ-gebSWJUtuGpk4QSQIhwlMwkHe0PayUw/viewform?gxids=7628">
                Endorse Jeff
              </EndorseButton>
            </EndorseSection.CTA>
          </Column>
          <Column></Column>
        </Columns>
      </ContentContainer>
    </EndorseSection>
  )
}

export default Endorse
