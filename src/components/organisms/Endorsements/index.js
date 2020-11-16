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
                <li>Chief Justice Patience Roggensack</li>
                <li>Justice David Prosser (Ret'd)</li>
                <li>Justice Annette Ziegler</li>
                <li>Hon. Lisa Neubauer</li>
                <li>Hon. Paul Reilly</li>
                <li>Hon. Bill Brash</li>
                <li>Hon. Kitty Brennan (Ret'd)</li>
                <li>Hon. Joe Donald</li>
                <li>Hon. Tim Dugan</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Maxine White</li>
                <li>Hon. Mike Fitzpatrick</li>
                <li>Hon. Joanne Kloppenburg</li>
                <li>Hon. Jennifer Nashold</li>
                <li>Hon. Brian Blanchard</li>
                <li>Hon. Rachel Graham</li>
                <li>Hon. Tom Hruz</li>
                <li>Hon. Mark Seidl</li>
                <li>Hon. Lisa Stark</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Andy Gonring</li>
                <li>Hon. Pat Haughney (Ret'd)</li>
                <li>Hon. Jim Kieffer (Ret'd)</li>
                <li>Hon. Ralph Ramirez</li>
                <li>Hon. Ellen Brostrom</li>
                <li>Hon. Dave Swanson</li>
                <li>Hon. Patrick Fiedler (Ret'd)</li>
                <li>Mayor Shawn Reilly</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <Testimonial />
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>Lawyers</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Atty. Tom Doerr</li>
                <li>Atty. Paul Jones</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Atty. Tina Jones</li>
                <li>Atty. Jay Starrett</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Atty. Tonit Calaway</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
    </>
  )
}

export default Endorsements
