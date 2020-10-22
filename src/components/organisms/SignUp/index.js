import React from "react"
import styled from "styled-components"
import masthead from "../../../images/masthead-placeholder.jpg"
import EmailForm from "../../molecules/EmailForm"

import ContentContainer from "../../atoms/ContentContainer"

const SignUpSection = styled.section`
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
    height: 800px;
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
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1200px) {
  }
`

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Column = styled.div`
  flex: 1;
  padding: 1rem;
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
