import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 3rem 2rem;
  margin-top: ${({ withImage }) => (withImage ? "6rem" : 0)};
  @media (min-width: 1200px) {
    padding: 1rem 2rem 4rem 2rem;
    margin-top: ${({ withImage }) => (withImage ? "10rem" : 0)};
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

const TestimonialImageWrapper = styled.div`
  width: clamp(320px, 780px, 80%);
  margin-top: ${({ withImage }) => (withImage ? "-6rem" : 0)};
  position: relative;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.blue};
    width: 4rem;
    height: 4rem;
    z-index: -1;
    display: block;
    left: -0.5rem;
    top: -0.5rem;
  }
  &::after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.blue};
    width: 4rem;
    height: 4rem;
    z-index: 2;
    display: block;
    right: -0.5rem;
    bottom: -0.5rem;
  }
`

export default ({ testimonial, attestant, position, withImage, children }) => {
  return (
    <Section withImage={withImage}>
      {withImage ? (
        <TestimonialImageWrapper withImage={withImage}>
          {children}
        </TestimonialImageWrapper>
      ) : null}
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
