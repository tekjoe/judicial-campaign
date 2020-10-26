import React from "react"
import styled from "styled-components"
import ContentContainer from "../../atoms/ContentContainer"
import { Columns, Column } from "../../atoms/Columns"
import checkMark from "../../../images/checkmark-outline.svg"
import Testimonial from "../../molecules/Testimonial"

const Grid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  display: grid;
  margin: 3rem 0;
  @media (min-width: 1024px) {
    margin: 6rem 0;
  }
`

const EndorsementsTitle = styled.h5`
  grid-column: 1/-1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.blue};
`

const EndorsementsGrid = styled(Columns)`
  grid-column: 1/-1;

  @media (min-width: 1024px) {
    grid-column: 2/-2;
  }
`

const EndorsementsList = styled.ul`
  list-style-type: none;
  margin-bottom: 1.25rem;
  li {
    font-size: ${({ theme }) => theme.typography.h6};
    display: flex;
    align-items: center;
    &:before {
      content: "";
      display: inline-block;
      height: 1.25rem;
      width: 1.25rem;
      background-image: url(${checkMark});
      background-repeat: no-repeat;
      background-position: center center;
      margin-right: 0.5rem;
    }
    &:not(:last-of-type) {
      margin-bottom: 1.25rem;
    }
  }
  @media (min-width: 1024px) {
    li {
      font-size: ${({ theme }) => theme.typography.h6};
    }
  }
`

const Endorsements = () => {
  return (
    <>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>Elected Officials</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Judge Ralph Ramirez</li>
                <li>Gov. Tony Evers</li>
                <li>John Doe</li>
                <li>John Doe</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Judge Ralph Ramirez</li>
                <li>Gov. Tony Evers</li>
                <li>John Doe</li>
                <li>John Doe</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Judge Ralph Ramirez</li>
                <li>Gov. Tony Evers</li>
                <li>John Doe</li>
                <li>John Doe</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <Testimonial />
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>Organizations</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Rotary</li>
                <li>Gov. Tony Evers</li>
                <li>Wisconsin Organization</li>
                <li>John Doe</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Rotary</li>
                <li>Wisconsin Organization</li>
                <li>Something Else</li>
                <li>John Doe</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Rotary</li>
                <li>National Organization</li>
                <li>John Doe</li>
                <li>John Doe</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
    </>
  )
}

export default Endorsements
