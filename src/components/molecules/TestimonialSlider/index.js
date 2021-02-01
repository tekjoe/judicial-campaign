import React, { useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"
import reilly from "../../../images/reilly.jpg"
import ziegler from "../../../images/ziegler.jpg"

const Section = styled.section`
  padding: 2rem 2rem 3rem 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
  @media (min-width: 1200px) {
    padding: 1rem 2rem 4rem 2rem;
  }
`

const Testimonial = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
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
  max-width: 60ch;
  padding: 0 1rem;
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.h5};
    margin: 1rem 0;
    max-width: 45ch;
  }
  @media (min-width: 1200px) {
    max-width: 80ch;
  }
`

const Attribution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

Attribution.Body = styled.div`
  @media (min-width: 768px) {
    margin-left: 1rem;
    text-align: left;
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

const Position = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 400;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.paragraph};
`

const Controls = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  top: calc(50% - 1rem);
  left: 1rem;
  justify-content: space-between;
  z-index: 4;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

const Prev = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1;
  background: transparent;
  svg {
    height: 2rem;
    width: 2rem;
  }
  @media (min-width: 768px) {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`

const Next = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1;
  background: transparent;
  svg {
    height: 2rem;
    width: 2rem;
  }
  @media (min-width: 768px) {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`

const testimonials = [
  {
    quote:
      "Judge Jeff Davis has demonstrated a commitment to the rule of law by his judicial decision making. Judge Davis knows that judges must not be an activist and that legislation does not come from the bench. He has an exemplary depth and breath of private practice and judicial experience which imminently qualifies him to serve as a District II Appellate Court judge.",
    attestant: "Justice Annette K. Ziegler",
    position: "Wisconsin Supreme Court",
    image: ziegler,
  },
  {
    quote:
      "Judge Davis has been a great addition to our court. He is thoughtful, collegial and smart. His breadth of real world experience, combined with his deep knowledge of the law and analytical ability, has been an enormous asset to us and makes him uniquely qualified for his current position.",
    attestant: "Hon. Paul F. Reilly",
    position: "Wisconsin Court of Appeals, District II",
    image: reilly,
  },
]

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default () => {
  const [[page, direction], setPage] = useState([0, 0])
  const testimonialIndex = wrap(0, testimonials.length, page)
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }
  return (
    <Section>
      <AnimatePresence initial={false} custom={direction}>
        <Testimonial
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <QuoteMark>"</QuoteMark>
          <Quote>{testimonials[testimonialIndex].quote}</Quote>
          <QuoteMark>"</QuoteMark>
          <Attribution>
            <Attribution.Image>
              <img
                src={testimonials[testimonialIndex].image}
                alt="Attestant Portrait"
              />
            </Attribution.Image>
            <Attribution.Body>
              <Attestant>{testimonials[testimonialIndex].attestant}</Attestant>
              <Position>{testimonials[testimonialIndex].position}</Position>
            </Attribution.Body>
          </Attribution>
        </Testimonial>
      </AnimatePresence>
      <Controls>
        <Prev onClick={() => paginate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"
              fill="#264577"
            />
          </svg>
        </Prev>
        <Next onClick={() => paginate(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
              fill="#264577"
            />
          </svg>
        </Next>
      </Controls>
    </Section>
  )
}
