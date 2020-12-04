import React from "react"
import styled from "styled-components"
import masthead from "../../../images/investiture.jpg"
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

SignUpSection.CTA = styled.div`
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

SignUpSection.Overlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  span {
    color: white;
    font-size: ${({ theme }) => theme.typography.small};
  }
`

const SignUp = () => {
  return (
    <SignUpSection centered>
      <SignUpSection.Overlay>
        <span>
          December 3, 2019: Judge Davis and colleagues attending his official
          Investiture ceremony.
        </span>
      </SignUpSection.Overlay>
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
