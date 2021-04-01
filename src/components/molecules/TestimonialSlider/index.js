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
  height: 700px;
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
      "Judge Jeff Davis has demonstrated a commitment to the rule of law by his judicial decision making. Judge Davis knows that judges must not be an activist and that legislation does not come from the bench. He has an exemplary depth and breadth of private practice and judicial experience which eminently qualifies him to serve as a District II Appellate Court judge.",
    attestant: "Justice Annette K. Ziegler",
    position: "Wisconsin Supreme Court",
    image: ziegler,
  },
  {
    quote:
      "Judge Davis has been a great addition to our court. He is thoughtful, collegial and smart. His breadth of real world experience, combined with his deep knowledge of the law and analytical ability, has been an enormous asset to us and makes him uniquely qualified for his current position.",
    attestant: "Hon. Paul F. Reilly",
    position: "Presiding Judge, Wisconsin Court of Appeals, District II",
    image: reilly,
  },
  {
    quote:
      "Judge Davis has the experience needed to continue serving on the Court of Appeals. Additionally, he has shown himself to be a fair and impartial judge who will apply the law and not be swayed solely by a single ideology. His impressive endorsement list includes people with a wide variety of political views, demonstrating both his independence and his good reputation. Let's keep partisan politics out of non-partisan elections!",
    attestant: "Charles C. Adams",
    position: "Attorney",
  },
  {
    quote:
      "Judge Davis is extremely measured and thoughtful, which are key qualities for a member of the bench.",
    attestant: "Shannon A. Allen",
    position: "Attorney",
  },
  {
    quote:
      "I have known Jeff in various legal capacities for over twenty years. I have had no reason to question his honesty, trustworthiness or commitment to the law. I believe he is above the rancor of partisanship, and the voters of this state should not only support but also re-elect him.",
    attestant: "Nathaniel Cade, Jr.",
    position: "Attorney",
  },
  {
    quote:
      "I have known Jeff for years as an extremely knowledgeable and skilled attorney. From working with him on the same side, litigating against him, and joining him as a CLE lecturer, I have found him to be courteous and fair. By temperament, ethics, and knowledge, he meets all the requirements of a superb judge.",
    attestant: "Bob Corris",
    position: "Attorney",
  },
  {
    quote:
      "Jeff brings great experience as a practicing attorney working with Wisconsin Businesses during his career at Quarles & Brady. Jeff is highly ethical, fair minded, and a devoted scholar of the law. He is extremely qualified to represent our District as a Court of Appeals Judge.",
    attestant: "Mitchel Cox",
    position: "",
  },
  {
    quote:
      "As a lawyer with over 40 years of  experience in the court system I know the importance of having capable judges on the court of appeals. Experience and integrity matter and Judge Davis has both. Inexperienced judges with a political agenda are prone to bad decisions that hurt the people who turn to the courts to resolve disputes. Judge Davis will apply the law fairly and impartiality. Those who know the court system know Judge Davis is the right choice.",
    attestant: "Patrick Dunphy",
    position: "Attorney",
  },
  {
    quote:
      "The appointment of Jeff Davis to the Court of Appeals was a wonderful example of how the appointment process should work, placing a highly qualified person in a vital and non-partisan judicial position without regard for political agendas. ",
    attestant: "Hon. John Franke",
    position: "Attorney & Former Judge",
  },
  {
    quote:
      "I've known Jeff for over 20 years and there are few people I've encountered in my life better suited for the role of an appellate court judge. He is hard-working, thoughtful, deliberative, fair, and dedicated to his role in following the law. Having been a business lawyer for decades before assuming the bench, he also brings a much needed practical business perspective to the commercial cases that come before him.",
    attestant: "Brian G. Gilpin",
    position: "Attorney",
  },
  {
    quote:
      "Jeff is smart, thoughtful, independent, and fair. His years of courtroom experience, both as an advocate and more recently as an appellate judge, makes supporting him an easy choice.",
    attestant: "William H. Harbeck",
    position: "Attorney",
  },
  {
    quote:
      "I've known Jeff for years and he is a quality guy. He is always honest and fair, even on the tennis court.",
    attestant: "John Hess",
    position: "",
  },
  {
    quote:
      "The public rightfully expects their judges to be fair minded, hard working, and committed to the rule of law.  Court of Appeals Judge, Jeff Davis, exemplifies those very qualities, and that's why he has earned the respect of his judicial colleagues, as well as bi-partisan support across the political spectrum. Judge Davis is thoughtful, experienced and balanced, with unquestioned integrity. And that's why he deserves your vote on Tuesday, April 6th.",
    attestant: "Hon. Mary Kuhnmuench",
    position: "",
  },
  {
    quote:
      "Jeff is highly prepared with over thirty years of practicing law in our Wisconsin courts - he was not and is not a politician. He is highly committed, independent and fair.",
    attestant: "Chief Judge Lisa S. Neubauer",
    position: "Wisconsin Court of Appeals",
  },
  {
    quote:
      "I am endorsing Judge Davis to retain his seat on the Court of Appeals because he has the business law experience and expertise that is greatly needed in our courts.  As a business owner, it gives me comfort to know that the business cases that end up in the court of appeals will be decided by judges who include among their ranks lawyers with real-world experience representing businesses, and an appreciation for the implications their decisions have for the business community.",
    attestant: "Austin Ramirez",
    position: "President/CEO Husco International",
  },
  {
    quote:
      "Jeff's decades of experience, particularly in business litigation, serves the Appellate II judicial team well. Additionally, his thoughtfulness and fairness to all who appear before him is reflected by his commitment to deciding cases based on the law and facts, not by his personal perferences.",
    attestant: "Chief Justice Patience D. Roggensack",
    position: "Wisconsin Supreme Court",
  },
  {
    quote:
      "Your extensive experience in the court system as a practitioner and jurist are impressive.",
    attestant: "Gene Toboyek",
    position: "Professor, University of Wisconsin-Whitewater",
  },
  {
    quote:
      "As General Counsel for Cities & Villages Mutual Insurance Company, the liability insurer for cities in District 2 like Kenosha, Racine, and Sheboygan, I know that CVMIC municipalities value judges who faithfully apply the law and refrain from legislating from the bench. In Jeff Davis I am confident we have such a judge and I fully support his candidacy.",
    attestant: "Patrick Nolan",
    position: "",
  },
  {
    quote:
      "Jeff Davis's practical experience and work ethic uniquely qualify him for the judiciary.",
    attestant: "Conrad Goodkind",
    position: "",
  },
  {
    quote:
      "Back in 2008, when an F3 Tornado destroyed our home, I called Quarles & Brady for help. Even though they did not specialize in 'Home Owners' they still transferred me to their Attorney Jeff Davis. Attorney Davis not only wrote a brief and helped us scheduled a court date before a Judge to hear our grievances, but then actually drove from Milwaukee to Kenosha to represent us before this judge. (Until we could find an attorney who did specialize in homeowners.) When I asked what we owed him for his services, he told me not to worry about it. Pro Bono. You don't find many Attorneys like this! He truly fights for the little people. And definitely HAS MY VOTE !!",
    attestant: "Angela Brooks",
    position: "",
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
            {testimonials[testimonialIndex].image ? (
              <Attribution.Image>
                <img
                  src={testimonials[testimonialIndex].image}
                  alt="Attestant Portrait"
                />
              </Attribution.Image>
            ) : null}
            <Attribution.Body>
              <Attestant>{testimonials[testimonialIndex].attestant}</Attestant>
              <Position>{testimonials[testimonialIndex].position}</Position>
            </Attribution.Body>
          </Attribution>
        </Testimonial>
      </AnimatePresence>
      <Controls>
        <Prev onClick={() => paginate(-1)} aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"
              fill="#264577"
            />
          </svg>
        </Prev>
        <Next onClick={() => paginate(1)} aria-label="Next">
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
