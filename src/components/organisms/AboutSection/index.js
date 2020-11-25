import React from "react"
import styled from "styled-components"
import ContentContainer from "../../atoms/ContentContainer"
import ContentBlock from "../../atoms/ContentBlock"
import LinkButton from "../../atoms/LinkButton"

const AboutSection = styled.section`
  padding: 4rem 0;
  @media (min-width: 1024px) {
    padding: 8rem 0;
  }
  @media (min-width: 1200px) {
    padding: 10rem 0;
  }
`

const About = () => {
  return (
    <AboutSection>
      <ContentContainer>
        <ContentBlock align="center">
          <h2>Experience you can count on</h2>
          <p>
            With over 30 years of legal experience, Judge Jeff Davis has a track
            record that the Wisconsin Court of Appeals needs and he's proven it
            during his time on the bench. Judge Davis does not take his work as
            an appellate judge lightly. It is with great honor and integrity
            that Judge Davis serves the citizens of District II of the Court of
            Appeals and the state.
          </p>
          <LinkButton to="/about">Meet Jeff Davis</LinkButton>
        </ContentBlock>
      </ContentContainer>
    </AboutSection>
  )
}

export default About
