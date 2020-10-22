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
  justify-content: center;
  align-items: center;
  background: hsla(0, 0%, 65%, 20%);
  &:hover > span {
    transform: translateY(-500px);
    opacity: 0;
  }
  span {
    transition: all 0.3s ease-in-out;
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }
  @media (min-width: 1024px) {
    span {
      font-size: 2.5rem;
    }
  }
`

const Features = () => {
  return (
    <FeaturesSection>
      <ContentContainer>
        <FlexBoxes>
          <Feature>
            <FeatureImage1 style={{ height: "100%" }} />
            <Feature.Overlay>
              <span>Experience</span>
            </Feature.Overlay>
          </Feature>
          <Feature>
            <FeatureImage1 style={{ height: "100%" }} />
            <Feature.Overlay>
              <span>Equality</span>
            </Feature.Overlay>
          </Feature>
          <Feature>
            <FeatureImage1 style={{ height: "100%" }} />
            <Feature.Overlay>
              <span>Integrity</span>
            </Feature.Overlay>
          </Feature>
        </FlexBoxes>
      </ContentContainer>
    </FeaturesSection>
  )
}

export default Features
