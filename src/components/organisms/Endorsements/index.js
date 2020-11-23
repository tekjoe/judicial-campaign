import React from "react"
import styled from "styled-components"
import ContentContainer from "../../atoms/ContentContainer"
import { Columns, Column } from "../../atoms/Columns"
import checkMark from "../../../images/checkmark-outline.svg"

const Grid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  display: grid;
  margin: 3rem 0;
  @media (min-width: 1024px) {
    margin: 4rem 0;
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
    font-size: 1.125rem;
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
          <EndorsementsTitle>Wisconsin Supreme Court</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Chief Justice Patience Roggensack</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Justice Annette Ziegler</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Justice David Prosser (Ret'd)</li>
                <li>Justice Jon Wilcox (Ret'd)</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>Wisconsin Court of Appeals</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Hon. William W. Brash, III</li>
                <li>Hon. Kitty K. Brennan (Ret'd)</li>
                <li>Chief Judge Richard S. Brown (Ret'd)</li>
                <li>Hon. M. Joseph Donald</li>
                <li>Hon. Timothy J. Dugan</li>
                <li>Hon. Neal Nettesheim (Ret'd)</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Lisa Neubauer</li>
                <li>Hon. Paul Reilly</li>
                <li>Hon. Maxine A. White</li>
                <li>Hon. Michael R. Fitzpatrick</li>
                <li>Hon. JoAnne F. Kloppenburg</li>
                <li>Hon. Jennifer E. Nashold</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Brian W. Blanchard</li>
                <li>Hon. Rachel A. Graham</li>
                <li>Hon. Thomas M. Hruz</li>
                <li>Hon. Mark A. Seidl</li>
                <li>Hon. Lisa K. Stark</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>
            Wisconsin Circuit Court Justices
          </EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Hon. David M. Bastianelli (Ret'd)</li>
                <li>Hon. Anthony G. Milisauskas</li>
                <li>Hon. Robert Dewane</li>
                <li>Hon. Jerilyn Dietz (Ret'd)</li>
                <li>Hon. Jerome Fox (Ret'd)</li>
                <li>Hon. Mark Rohrer</li>
                <li>Hon. Jon Frederickson</li>
                <li>Hon. L. Edward Stengel</li>
                <li>Hon. Angela Sutkiewicz</li>
                <li>Hon. David M. Reddy</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Sandra Giernoth</li>
                <li>Hon. Andrew T. Gonring (Ret'd)</li>
                <li>Hon. Todd K. Martens</li>
                <li>Hon. James K. Muehlbauer</li>
                <li>Hon. James G. Pouros</li>
                <li>Hon. Kathryn Foster (Ret'd)</li>
                <li>Hon. Patrick C. Haughney (Ret'd)</li>
                <li>Hon. James R. Kieffer (Ret'd)</li>
                <li>Hon. Robert Mawdsley (Ret'd)</li>
                <li>Hon. Ralph M. Ramirez</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Phillip A. Koss</li>
                <li>Hon. Teresa S. Basiliere</li>
                <li>Hon. John ("Jigger") A. Jorgensen</li>
                <li>Hon. Barbara Hart Key</li>
                <li>Hon. Karen Siefert</li>
                <li>Hon. Ellen A. Brostrom</li>
                <li>Hon. Christopher Dee</li>
                <li>Hon. Gregory B. Gill, Jr.</li>
                <li>Hon. Dennis P. Moroney (Ret'd)</li>
                <li>Hon. David C. Swanson</li>
                <li>Hon. Patrick J. Fiedler (Ret'd)</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>Elected Officials</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>District Attorney Mark D. Bensen, Washington County</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Senator Alberta Darling, State of Wisconsin</li>
                <li>Sheriff Christopher Schmaling, Racine County</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Mayor Shawn Reilly, City of Waukesha</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>Lawyers</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Atty. Tonit Calaway</li>
                <li>Atty. Thomas L. Doerr (Ret'd)</li>
                <li>Atty. Michael W. Grebe</li>
                <li>Atty. Tina Jones</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Atty. Paul Jones (Ret'd)</li>
                <li>Atty. Jennie Kent</li>
                <li>Atty. Susan Lovern</li>
                <li>Atty. Jeffrey Mohr</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Atty. David Muth</li>
                <li>Atty. Jay Starrett</li>
                <li>Atty. Brent Walters</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
    </>
  )
}

export default Endorsements
