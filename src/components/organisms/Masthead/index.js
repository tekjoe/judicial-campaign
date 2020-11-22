import React from "react"
import styled from "styled-components"
import ContentContainer from "../../atoms/ContentContainer"

import MastheadImage from "../../atoms/MastheadImage"
import EmailForm from "../../molecules/EmailForm"

const Masthead = styled.section`
  background: #264577;
  position: relative;
`

Masthead.Image = styled.div`
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    background: hsla(0, 0%, 20%, 25%);
  }
`

Masthead.CTA = styled.div`
  padding: 4rem 0;
  h1,
  p {
    color: white;
  }
  p {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  h1 {
    font-size: ${({ theme }) => theme.typography.h3};
    font-weight: 900;
    line-height: 1;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    position: absolute;
    top: 10%;
    left: 0;
    max-width: 400px;
    margin-left: 5%;
  }
  @media (min-width: 1024px) {
    top: 15%;
    margin-left: 10%;
    h1 {
      font-size: ${({ theme }) => theme.typography.h2};
    }
  }
  @media (min-width: 1400px) {
    top: 20%;
    margin-left: 20%;
  }
`

const MastheadSection = () => {
  return (
    <Masthead>
      <Masthead.Image>
        <MastheadImage style={{ maxHeight: "800px", objectPosition: "top" }} />
      </Masthead.Image>
      <Masthead.CTA>
        <ContentContainer>
          <p>Proven Commitment to Justice</p>
          <h1>Judge Jeff Davis for Wisconsin Court of Appeals</h1>
          <EmailForm />
        </ContentContainer>
      </Masthead.CTA>
    </Masthead>
  )
}

export default MastheadSection
