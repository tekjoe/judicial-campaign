import React from "react"
import styled from "styled-components"
import ContentBlock from "../../atoms/ContentBlock"
import GetInvolvedImage from "../../atoms/GetInvolvedImage"
import LinkButton from "../../atoms/LinkButton"

const GetInvolvedSection = styled.section`
  display: flex;
  flex-direction: column;
  background: #264577;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

GetInvolvedSection.Image = styled.div`
  flex: 1;
`
GetInvolvedSection.Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`

const GetInvolved = () => {
  return (
    <GetInvolvedSection>
      <GetInvolvedSection.Image>
        <GetInvolvedImage style={{ height: "100%" }} />
      </GetInvolvedSection.Image>
      <GetInvolvedSection.Content>
        <ContentBlock align="center" inverse={true}>
          <h3>Your support makes all the difference</h3>
          <p>
            I work hard every day to serve the great state of Wisconsin and its
            people. It's my sincere desire to continue my work as an appellate
            judge, but I am going to need your help. Find out how you can
            support the campaign.
          </p>
          <LinkButton to="/contact/">Get Involved</LinkButton>
        </ContentBlock>
      </GetInvolvedSection.Content>
    </GetInvolvedSection>
  )
}

export default GetInvolved
