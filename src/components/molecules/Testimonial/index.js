import React from "react"
import styled from "styled-components"
import reilly from "../../../images/reilly.jpg"
import ziegler from "../../../images/ziegler.jpg"

const Section = styled.section`
  background: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 3rem 2rem;
  @media (min-width: 1200px) {
    padding: 1rem 2rem 4rem 2rem;
  }
`

const Testimonial = styled.div`
  max-width: 60ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 1200px) {
    max-width: 100ch;
  }
`

const QuoteMark = styled.span`
  font-size: 56px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.blue};
  font-family: "Passion One", sans-serif;
  &:first-of-type {
    transform: rotate(180deg);
  }
  @media (min-width: 768px) {
    font-size: 80px;
  }
  @media (min-width: 1200px) {
    font-size: 112px;
    line-height: 1.1;
  }
`

const Quote = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  font-style: italic;
  font-size: ${({ theme }) => theme.typography.h6};
  line-height: 1.4;
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.h5};
    margin: 1rem 0;
  }
  @media (min-width: 1200px) {
  }
`

const Attribution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

Attribution.Image = styled.div`
  flex: 1;
  img {
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    object-position: center;
  }
`
Attribution.Body = styled.div``

const Attestant = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.paragraph};
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.typography.h6};
  }
`

const Position = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 400;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.paragraph};
`

export default ({ testimonial, attestant, position, image }) => {
  return (
    <Section>
      <Testimonial>
        <QuoteMark>"</QuoteMark>
        <Quote>{testimonial}</Quote>
        <QuoteMark>"</QuoteMark>
        <Attribution>
          <Attribution.Body>
            <Attestant>{attestant}</Attestant>
            <Position>{position}</Position>
          </Attribution.Body>
        </Attribution>
      </Testimonial>
    </Section>
  )
}
