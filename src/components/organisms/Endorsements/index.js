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
                <li>Chief Justice Patience D. Roggensack</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Justice Annette K. Ziegler</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Justice David T. Prosser, Jr.*</li>
                <li>Justice Jon P. Wilcox*</li>
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
                <li>Hon. Brian W. Blanchard</li>
                <li>Hon. William W. Brash, III</li>
                <li>Hon. Kitty K. Brennan*</li>
                <li>Chief Judge Richard S. Brown*</li>
                <li>Hon. M. Joseph Donald</li>
                <li>Hon. Timothy J. Dugan</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Charles P. Dykman*</li>
                <li>Hon. Michael R. Fitzpatrick</li>
                <li>Hon. Rachel A. Graham</li>
                <li>Hon. Thomas M. Hruz</li>
                <li>Hon. JoAnne F. Kloppenburg</li>
                <li>Hon. Jennifer E. Nashold</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Neal P. Nettesheim*</li>
                <li>Chief Judge Lisa S. Neubauer</li>
                <li>Hon. Paul F. Reilly</li>
                <li>Hon. Mark A. Seidl</li>
                <li>Hon. Lisa K. Stark</li>
                <li>Hon. Maxine A. White</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>
            District II Circuit Court Judges
          </EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Hon. Teresa S. Basiliere</li>
                <li>Hon. David M. Bastianelli*</li>
                <li>Hon. Robert P. Dewane</li>
                <li>Hon. Jerilyn M. Dietz</li>
                <li>Hon. Dale L. English</li>
                <li>Hon. Faye M. Flancher</li>
                <li>Hon. Kathryn W. Foster*</li>
                <li>Hon. Jerome L. Fox*</li>
                <li>Hon. Jon E. Frederickson</li>
                <li>Hon. Sandra Jo Giernoth</li>
                <li>Hon. Andrew T. Gonring*</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Patrick C. Haughney*</li>
                <li>Hon. Kent Hoffmann</li>
                <li>Hon. John A. Jorgensen</li>
                <li>Hon. Chad G. Kerkman</li>
                <li>Hon. Barbara Hart Key</li>
                <li>Hon. James R. Kieffer*</li>
                <li>Hon. Barbara A. Kluka*</li>
                <li>Hon. Phillip A. Koss</li>
                <li>Hon. Todd K. Martens</li>
                <li>Hon. Robert G. Mawdsley*</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Anthony G. Milisauskas</li>
                <li>Hon. James K. Muehlbauer</li>
                <li>Hon. James G. Pouros</li>
                <li>Hon. Ralph M. Ramirez</li>
                <li>Hon. David M. Reddy</li>
                <li>Hon. Mark R.Rohrer</li>
                <li>Hon. Karen L. Siefert</li>
                <li>Hon. L. Edward Stengel</li>
                <li>Hon. Angela W. Sutkiewicz</li>
                <li>Hon. Mary Kay Wagner</li>
                <li>Hon. Robert J. Wirtz</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>Other Elected Officials</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>DA Mark D. Bensen</li>
                <li>Hon. Ellen A. Brostrom</li>
                <li>Sen. Alberta Darling</li>
                <li>Hon. Christopher Dee</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Hon. Daniel T. Dillon</li>
                <li>Hon. Patrick J. Fiedler*</li>
                <li>Hon. Gregory B. Gill, Jr.</li>
                <li>Hon. Dennis P. Moroney*</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Mayor Shawn Reilly</li>
                <li>Sheriff Christopher K. Schmaling</li>
                <li>Hon. David C. Swanson</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>
            Business, Community & Law Leaders
          </EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                <li>Atty. Michael Aldana</li>
                <li>Steve J. Berryman</li>
                <li>Atty. Ave M. Bie</li>
                <li>Joanne Bischmann </li>
                <li>Tonit M. Calaway</li>
                <li>Atty. John A. Dickens</li>
                <li>Thomas L. Doerr </li>
                <li>Atty. Daniel T. Flaherty</li>
                <li>Mark P. Fogarty</li>
                <li>Michelle M. Friedman</li>
                <li>Atty. James D. Friedman</li>
                <li>Atty. Carol A. Gehl</li>
                <li>Atty. Brandon R. Gutschow</li>
                <li>Douglas M. Hagerman</li>
                <li>Atty. Scott W. Hansen</li>
                <li>Atty. Bryan B. House</li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Atty. Jonathan R. Ingrisano</li>
                <li>Tina Jones</li>
                <li>Paul J. Jones </li>
                <li>Ted D. Kellner</li>
                <li>John P. Kennedy</li>
                <li>Jennie Kent</li>
                <li>Atty. John Kirtley</li>
                <li>Thomas F. Kissinger</li>
                <li>Atty. Kevin M. Long</li>
                <li>Atty. Susan E. Lovern</li>
                <li>Atty. Quinn W. Martin </li>
                <li>Atty. Eric W. Matzke</li>
                <li>Jeffrey Mohr</li>
                <li>Atty. David P. Muth</li>
                <li>Jerome D. Okarma</li>
                <li>Atty. Thomas C. Pence </li>
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                <li>Atty. Lisa Preston</li>
                <li>Atty. Jay O. Rothman</li>
                <li>Atty. John A. Rothstein</li>
                <li>Atty. William P. Schultz</li>
                <li>Atty. Sara P. Scullen</li>
                <li>Atty. Sean Scullen</li>
                <li>Tom Spero</li>
                <li>Atty. Jeffrey K. Spoerk</li>
                <li>Atty. Jay R. Starrett</li>
                <li>Atty. Joe Tyson</li>
                <li>Thomas E. Valentyn</li>
                <li>Atty. Nicholas P. Wahl</li>
                <li>Brent Walters</li>
                <li>Atty. Ralph A. Weber</li>
                <li>Patricia M. Whaley</li>
                <li>Atty. Mark C. Witt</li>
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
        <Grid>
          <EndorsementsGrid>
            <Column>
              <p>* Indicates Former or Retired</p>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
    </>
  )
}

export default Endorsements
