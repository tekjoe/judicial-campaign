import React from "react"
import styled from "styled-components"

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

const Test = styled.div`
  max-width: 60ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 1200px) {
    max-width: 80ch;
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
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.h6};
  line-height: 1.3;
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.h5};
    margin: 1rem 0;
  }
  @media (min-width: 1200px) {
    line-height: 1.05;
    font-size: ${({ theme }) => theme.typography.h3};
  }
`

const Attestant = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.paragraph};
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.typography.h6};
  }
`

const Testimonial = () => {
  return (
    <Section>
      <Test>
        <QuoteMark>"</QuoteMark>
        <Quote>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dicta
          minus pariatur perferendis dignissimos tenetur!
        </Quote>
        <QuoteMark>"</QuoteMark>
        <Attestant>Joe Ramirez, Local Leader</Attestant>
      </Test>
    </Section>
  )
}

export default Testimonial
