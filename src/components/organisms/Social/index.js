import React from "react"
import styled from "styled-components"
import ContentContainer from "../../atoms/ContentContainer"

const SocialSection = styled.section`
  padding: 5rem 0;
`

SocialSection.Title = styled.h3`
  margin: 0 auto 3rem auto;
  color: #264577;
  font-weight: bold;
  text-align: center;
`

const SocialGrid = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const SocialCard = styled.div`
  flex: 1;
  background: #335c9e;
  color: white;
  padding: 2rem;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  & > *:not(:last-child) {
    margin-bottom: 1.25rem;
  }
  @media (min-width: 768px) {
    &:not(:last-of-type) {
      margin-right: 1rem;
      margin-bottom: 0;
    }
  }
`

SocialCard.Icon = styled.svg``
SocialCard.Body = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`
SocialCard.Footer = styled.div`
  font-weight: bold;
`

const Social = () => {
  return (
    <SocialSection>
      <ContentContainer>
        <SocialSection.Title>Get Social</SocialSection.Title>
        <SocialGrid>
          <SocialCard>
            <SocialCard.Icon height="24" width="24" viewBox="0 0 24 24">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M23.9999 12.6406C23.9999 9.87903 23.9999 6.62049 23.9999 0.600342C20.25 0.600343 15.8757 0.600343 11.9999 0.600343C8.44541 0.600343 2.24999 0.600342 -9.203e-05 0.600343C-9.54216e-05 2.60706 -7.00955e-05 9.5567 -7.00955e-05 12.6406C-7.00955e-05 15.9587 -9.74881e-05 20.4166 -9.66792e-05 24.5351C4.49998 24.5351 7.07805 24.5351 10.1249 24.5351V16.121H7.07805V12.6406H10.1249V9.988C10.1249 6.97088 11.9156 5.30358 14.6577 5.30358C15.9702 5.30358 17.3437 5.53874 17.3437 5.53874V8.50178H15.8296C14.339 8.50178 13.8749 9.43067 13.8749 10.3831V12.6406H17.2031L16.671 16.121H13.8749V24.5351C17 24.4301 19.75 24.5351 23.9999 24.5351C23.9999 21.9217 23.9999 15.2619 23.9999 12.6406Z"
                fill="white"
              />
            </SocialCard.Icon>
            <SocialCard.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo...
            </SocialCard.Body>
            <SocialCard.Footer>1 Day Ago</SocialCard.Footer>
          </SocialCard>
          <SocialCard>
            <SocialCard.Icon height="24" width="24" viewBox="0 0 24 24">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M23.9999 12.6406C23.9999 9.87903 23.9999 6.62049 23.9999 0.600342C20.25 0.600343 15.8757 0.600343 11.9999 0.600343C8.44541 0.600343 2.24999 0.600342 -9.203e-05 0.600343C-9.54216e-05 2.60706 -7.00955e-05 9.5567 -7.00955e-05 12.6406C-7.00955e-05 15.9587 -9.74881e-05 20.4166 -9.66792e-05 24.5351C4.49998 24.5351 7.07805 24.5351 10.1249 24.5351V16.121H7.07805V12.6406H10.1249V9.988C10.1249 6.97088 11.9156 5.30358 14.6577 5.30358C15.9702 5.30358 17.3437 5.53874 17.3437 5.53874V8.50178H15.8296C14.339 8.50178 13.8749 9.43067 13.8749 10.3831V12.6406H17.2031L16.671 16.121H13.8749V24.5351C17 24.4301 19.75 24.5351 23.9999 24.5351C23.9999 21.9217 23.9999 15.2619 23.9999 12.6406Z"
                fill="white"
              />
            </SocialCard.Icon>
            <SocialCard.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo...
            </SocialCard.Body>
            <SocialCard.Footer>2 Days Ago</SocialCard.Footer>
          </SocialCard>
        </SocialGrid>
      </ContentContainer>
    </SocialSection>
  )
}

export default Social
