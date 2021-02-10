import React from "react"
import styled from "styled-components"
import masthead from "../../../images/sign-up-background.png"
import EmailForm from "../../molecules/EmailForm"
import { Column, Columns } from "../../atoms/Columns"
import ContentContainer from "../../atoms/ContentContainer"

const SignUpSection = styled.section`
  display: ${props => (props.centered ? "flex" : "block")};
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(
      to right,
      hsla(217, 52%, 31%, 90%),
      hsla(217, 52%, 31%, 1%)
    ),
    url(${masthead}) top right/cover;
  @media (min-width: 1024px) {
    height: 400px;
  }
  @media (min-width: 1200px) {
    height: 550px;
  }
`

SignUpSection.CTA = styled.div`
  padding: 2rem 0;
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

const SignUp = () => {
  return (
    <SignUpSection centered>
      <ContentContainer>
        <Columns>
          <Column>
            <SignUpSection.CTA>
              <p>Stay up to date with the campaign</p>
              <EmailForm />
            </SignUpSection.CTA>
          </Column>
          <Column></Column>
        </Columns>
      </ContentContainer>
    </SignUpSection>
  )
}

export default SignUp
