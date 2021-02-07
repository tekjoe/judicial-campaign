import React from "react"
import styled from "styled-components"
import { darken } from "polished"
import { Link } from "gatsby"
import ContentContainer from "../../atoms/ContentContainer"

const CTASection = styled.section`
  background: #aabcd9;
  padding-bottom: 4rem;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

const FlexBoxes = styled.div`
  display: flex;
  position: relative;
  @media (min-width: 768px) {
    margin-top: -2rem;
    padding: 0 1rem;
  }
  @media (min-width: 1200px) {
    margin-top: -4rem;
  }
`

const Box = styled(Link)`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #133987;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:nth-of-type(2n) {
    background: #264577;
    &:hover {
      background: ${darken(0.1, "#264577")};
    }
  }
  &:last-of-type {
    background: #f3304a;
    &:hover {
      background: ${darken(0.1, "#f3304a")};
    }
  }
  svg {
    height: 2rem;
    width: 2rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: bold;
  }
  &:hover {
    background: ${darken(0.1, "#133987")};
  }
  @media (min-width: 1024px) {
    padding: 3rem;
    svg {
      height: 3rem;
      width: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`

const CallToAction = () => {
  return (
    <CTASection>
      <ContentContainer>
        <FlexBoxes>
          <Box to="/judicial-philosophy/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z"
                fill="#fff"
              />
            </svg>
            <p>Philosophy</p>
          </Box>
          <Box to="/about/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"
                fill="#fff"
              />
            </svg>
            <p>Meet Jeff</p>
          </Box>
          <Box to="/contact/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                fill="#fff"
              />
            </svg>
            <p>Support</p>
          </Box>
          <Box to="/endorsements/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
                fill="#fff"
              />
            </svg>
            <p>Endorse</p>
          </Box>
        </FlexBoxes>
      </ContentContainer>
    </CTASection>
  )
}

export default CallToAction
