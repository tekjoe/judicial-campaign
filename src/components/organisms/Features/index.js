import React from "react"
import styled from "styled-components"
import ContentContainer from "../../atoms/ContentContainer"
import FeatureImage1 from "../../atoms/FeatureImage1"

const FeaturesSection = styled.section`
  background: #d4ddea;
  padding: 4rem 0;
  @media (min-width: 1024px) {
    padding: 8rem 0;
  }
`
const FlexBoxes = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Feature = styled.div`
  flex: 1;
  flex-basis: 300px;
  overflow: hidden;
  position: relative;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    &:not(:last-of-type) {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
  @media (min-width: 1024px) {
    flex-basis: auto;
    height: 400px;
  }
`

Feature.Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: hsla(0, 0%, 45%, 20%);
  transition: background 0.3s ease-in-out;
  &:hover {
    background: hsla(0, 0%, 15%, 80%);
    & > div {
      opacity: 1;
    }
  }
  span {
    transition: all 0.3s ease-in-out;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    display: block;
  }
  @media (min-width: 1024px) {
    span {
      font-size: 2.5rem;
    }
  }
`

const OverlayDetails = styled.div`
  color: white;
  font-size: 1.125rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`

const Features = () => {
  return (
    <FeaturesSection>
      <ContentContainer>
        <FlexBoxes>
          <Feature>
            <FeatureImage1 style={{ height: "100%" }} />
            <Feature.Overlay>
              <span>Independence</span>
              <OverlayDetails>
                Independence is the bedrock of our legal system and without it
                our system fails. I pledge to continue to apply the law fairly
                and impartially.
              </OverlayDetails>
            </Feature.Overlay>
          </Feature>
          <Feature>
            <FeatureImage1 style={{ height: "100%" }} />
            <Feature.Overlay>
              <span>Hard Work</span>
              <OverlayDetails>
                Doing the job right means making sure each case receives a
                thorough analysis and diligent review of the record and the law.
                I commit to bring my passion for the law to work every day.
              </OverlayDetails>
            </Feature.Overlay>
          </Feature>
          <Feature>
            <FeatureImage1 style={{ height: "100%" }} />
            <Feature.Overlay>
              <span>Experience</span>
              <OverlayDetails>
                I have over three decades of real world, practical experiences
                that I bring to the job. I commit to bring my passion for the
                law to work every day.
              </OverlayDetails>
            </Feature.Overlay>
          </Feature>
        </FlexBoxes>
      </ContentContainer>
    </FeaturesSection>
  )
}

export default Features
