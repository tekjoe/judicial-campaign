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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nunc
            vitae quam diam urna maecenas arcu arcu. Ornare ac curabitur eu
            netus ridiculus libero erat elementum ut. Et ultricies habitasse
            volutpat erat id mattis augue amet, quis. Non vestibulum, facilisi
            cursus in quam dictum eget fringilla. Magna enim odio augue sed
            ipsum nulla mi elit elementum. Ullamcorper cursus pharetra aliquet
            egestas lectus id ultricies integer turpis. Augue phasellus amet
            odio id ornare pellentesque molestie eget. Ipsum, lacus tincidunt
            sollicitudin ut mauris ipsum gravida urna.
          </p>
          <LinkButton to="/about">Meet Jeff Davis</LinkButton>
        </ContentBlock>
      </ContentContainer>
    </AboutSection>
  )
}

export default About
