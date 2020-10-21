import React from "react"
import styled from "styled-components"
import ContentContainer from "../../atoms/ContentContainer"

import MastheadImage from "../../atoms/MastheadImage"

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
    background: hsla(0, 0%, 40%, 25%);
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
    top: 25%;
    margin-left: 20%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 0.5rem;
  }
`

const Input = styled.input`
  font-size: ${({ theme }) => theme.typography.paragraph};
  padding: 1rem;
  -moz-appearance: none;
  border: none;
`

const Button = styled.button`
  background: #f3304a;
  padding: 1rem;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  font-size: 1.125rem;
  cursor: pointer;
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
          <Form>
            <Input type="email" placeholder="Email Address" />
            <Button type="submit" onClick={e => e.preventDefault()}>
              Stay Connected
            </Button>
          </Form>
        </ContentContainer>
      </Masthead.CTA>
    </Masthead>
  )
}

export default MastheadSection
