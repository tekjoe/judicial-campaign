import React from "react"
import styled from "styled-components"
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

const Box = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #133987;
  color: white;
  &:nth-of-type(2n) {
    background: #264577;
  }
  &:last-of-type {
    background: #f3304a;
  }
  svg {
    height: 2rem;
    width: 2rem;
  }
  p {
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: bold;
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
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z"
                fill="#fff"
              />
            </svg>
            <p>Philosophy</p>
          </Box>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"
                fill="#fff"
              />
            </svg>
            <p>Facebook</p>
          </Box>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                fill="#fff"
              />
            </svg>
            <p>Volunteer</p>
          </Box>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
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
