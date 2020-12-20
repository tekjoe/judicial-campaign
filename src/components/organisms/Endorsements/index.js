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

const courtOfAppeals = [
  "Hon. Rachel A. Graham",
  "Hon. Thomas M. Hruz",
  "Hon. JoAnne F. Kloppenburg",
  "Hon. Jennifer E. Nashold",
  "Hon. Neal P. Nettesheim*",
  "Chief Judge Lisa S. Neubauer",
  "Hon. Paul F. Reilly",
  "Hon. Mark A. Seidl",
  "Hon. Kitty K. Brennan*",
  "Chief Judge Richard S. Brown*",
  "Hon. Patricia S. Curley*",
  "Hon. M. Joseph Donald",
  "Hon. Timothy J. Dugan",
  "Hon. Charles P. Dykman*",
  "Hon. Lisa K. Stark",
  "Hon. Maxine A. White",
  "Hon. Brian W. Blanchard",
  "Hon. William W. Brash, III",
  "Hon. Michael R. Fitzpatrick",
]

const supremeCourt = [
  "Chief Justice Patience D. Roggensack",
  "Justice Annette K. Ziegler",
  "Justice David T. Prosser, Jr.*",
  "Justice Jon P. Wilcox*",
]

const districtTwo = [
  "Hon. Teresa S. Basiliere",
  "Hon. David M. Bastianelli*",
  "Hon. Michael O. Bohren",
  "Hon. Robert P. Dewane",
  "Hon. Jerilyn M. Dietz",
  "Hon. Dale L. English",
  "Hon. Faye M. Flancher",
  "Hon. Kathryn W. Foster*",
  "Hon. Jerome L. Fox*",
  "Hon. Jon E. Fredrickson",
  "Hon. Sandra Jo Giernoth",
  "Hon. James R. Kieffer*",
  "Hon. Barbara A. Kluka*",
  "Hon. Phillip A. Koss",
  "Hon. Todd K. Martens",
  "Hon. Robert G. Mawdsley*",
  "Hon. Anthony G. Milisauskas",
  "Hon. James K. Muehlbauer",
  "Hon. Emily S. Mueller",
  "Hon. Christine E. Ohlis",
  "Hon. James G. Pouros",
  "Hon. Gerald P. Ptacek*",
  "Hon. Ralph M. Ramirez",
  "Hon. David M. Reddy",
  "Hon. Mark R. Rohrer",
  "Hon. Karen L. Siefert",
  "Hon. L. Edward Stengel",
  "Hon. Angela W. Sutkiewicz",
  "Hon. Mary Kay Wagner",
  "Hon. Robert J. Wirtz",
  "Hon. Andrew T. Gonring*",
  "Hon. Patrick C. Haughney*",
  "Hon. Kent R. Hoffmann",
  "Hon. John A. Jorgensen",
  "Hon. Chad G. Kerkman",
  "Hon. Barbara Hart Key",
]

const electedOfficials = [
  "DA Mark D. Bensen",
  "Hon. Ellen A. Brostrom",
  "Sen. Alberta Darling",
  "Hon. T. Christopher Dee",
  "Hon. Daniel T. Dillon",
  "Hon. Patrick J. Fiedler*",
  "Hon. Gregory B. Gill, Jr.",
  "Hon. Dennis P. Moroney*",
  "Mayor Shawn Reilly",
  "Sheriff Christopher K. Schmaling",
  "Sheriff Martin Schulteis",
  "Hon. Michael A. Schumacher",
  "Hon. David C. Swanson",
]

const leaders = [
  "Michael Aldana",
  "Brad C. Backer",
  "Chess Barbatelli",
  "William J. Barrett",
  "Steve J. Berryman",
  "Ave M. Bie",
  "Joanne M. Bischmann",
  "Patrick M. Blaney",
  "Keith A. Bruett",
  "John A. Busch",
  "Tonit M. Calaway",
  "Brian Christensen",
  "James R. Clark",
  "Peter L. Coffey",
  "Michael J. Cohen",
  "Gerald E. Connolly",
  "Ignacio A. Cortina",
  "Brian E. Cothroll",
  "John W. Daniels, Jr.",
  "John A. Dickens",
  "Thomas L. Doerr",
  "Robert A. Dudek",
  "Daniel T. Flaherty",
  "Mark P. Fogarty",
  "Michelle M. Friedman",
  "James D. Friedman",
  "Carol A. Gehl",
  "Brandon R. Gutschow",
  "Douglas M. Hagerman",
  "Aaron E. Hall",
  "Scott W. Hansen",
  "Emery K. Harlan",
  "David Hecker",
  "Thomas C. Hofbauer",
  "Bryan B. House",
  "Jonathan R. Ingrisano",
  "Stephen T. Jacobs",
  "Kurt Janavitz",
  "Jerry Jendusa",
  "Tina Jones",
  "Paul J. Jones",
  "Jeffrey A. Joerres",
  "Christopher E. Kaltenbach",
  "Olivia M. Kelley",
  "Ted D. Kellner",
  "Daniel J. Kennedy",
  "John P. Kennedy",
  "Rebecca F. Kennedy",
  "Jennie J. Kent",
  "Khalaf M. Khalaf",
  "John L. Kirtley",
  "Thomas F. Kissinger",
  "Daniel J. La Fave",
  "Michael A. Levey",
  "Kevin M. Long",
  "Susan E. Lovern",
  "Vincent P. Lyles",
  "Natalie G. Maciolek",
  "Quinn W. Martin",
  "L. Katie Mason",
  "Eric W. Matzke",
  "Todd R. Meyer",
  "James W. Mohr",
  "Jeffrey T. Mohr",
  "David P. Muth",
  "Deni D. Naumann",
  "Michael E. Naumann",
  "William Nitkowski",
  "Barbara A. O’Brien",
  "John V. O'Connor",
  "Jerome D. Okarma",
  "Randy M. Pavlick",
  "Thomas C. Pence",
  "Lisa Preston",
  "Bruce Prom",
  "Austin Ramirez",
  "Jay O. Rothman",
  "John A. Rothstein",
  "Christopher M. Scherer",
  "William P. Schultz",
  "Sara P. Scullen",
  "Sean M. Scullen",
  "Lee M. Seese",
  "John G. Shannon",
  "Thomas L. Shriner, Jr.",
  "Brian R. Smigelski",
  "Jesse Sondreal",
  "Thomas L. Spero",
  "Jeffrey K. Spoerk",
  "Jay R. Starrett",
  "James F. Stern",
  "William J. Toman",
  "Xuan Thi Tran",
  "Joseph B. Tyson, Jr.",
  "Thomas E. Valentyn",
  "Julie Van Cleave",
  "Daniel G. Vliet",
  "Heidi L. Vogt",
  "Eric J. Van Vugt",
  "Nicholas P. Wahl",
  "Brent Walters",
  "Blair Wangman",
  "Ralph A. Weber",
  "Monte E. Weiss",
  "Patricia M. Whaley",
  "Mark C. Witt",
]

const sortEndorsementsByLastName = endorsements => {
  function compare(a, b) {
    //split the names as strings into arrays
    let aName = a.split(" ")
    let bName = b.split(" ")
    // get the last names by selecting
    // the last element in the name arrays
    // using array.length - 1 since full names
    // may also have a middle name or initial
    let aLastName = aName[aName.length - 1]
    let bLastName = ""

    // Handle suffixes
    if (
      bName[bName.length - 1] === "III" ||
      bName[bName.length - 1] === "Jr."
    ) {
      bLastName = bName[bName.length - 2]
    } else {
      bLastName = bName[bName.length - 1]
    }

    // compare the names and return either
    // a negative number, positive number
    // or zero.
    if (aLastName < bLastName) return -1
    if (aLastName > bLastName) return 1
    return 0
  }
  return endorsements.sort(compare)
}

const distributeEndorsementsEvenly = sortedEndorsements => {
  const numberOfColumns = 3
  const result = [[], [], []]

  const namesPerList = Math.ceil(sortedEndorsements.length / numberOfColumns)

  for (let line = 0; line < numberOfColumns; line++) {
    for (let i = 0; i < namesPerList; i++) {
      const value = sortedEndorsements[i + line * namesPerList]
      if (!value) continue //avoid adding "undefined" values
      result[line].push(value)
    }
  }
  return result
}

const Endorsements = () => {
  const courtOfAppealsList = distributeEndorsementsEvenly(
    sortEndorsementsByLastName(courtOfAppeals)
  )
  const supremeCourtList = distributeEndorsementsEvenly(
    sortEndorsementsByLastName(supremeCourt)
  )
  const districtTwoList = distributeEndorsementsEvenly(
    sortEndorsementsByLastName(districtTwo)
  )
  const electedList = distributeEndorsementsEvenly(
    sortEndorsementsByLastName(electedOfficials)
  )
  const leadersList = distributeEndorsementsEvenly(
    sortEndorsementsByLastName(leaders)
  )
  return (
    <>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>Wisconsin Supreme Court</EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                {supremeCourtList[0].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {supremeCourtList[1].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {supremeCourtList[2].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
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
                {courtOfAppealsList[0].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {courtOfAppealsList[1].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {courtOfAppealsList[2].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>
            District II Circuit Court & Municipal Judges
          </EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                {districtTwoList[0].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {districtTwoList[1].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {districtTwoList[2].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
          </EndorsementsGrid>
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid>
          <EndorsementsTitle>
            Other Elected Officials & Judges
          </EndorsementsTitle>
          <EndorsementsGrid>
            <Column>
              <EndorsementsList>
                {electedList[0].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {electedList[1].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {electedList[2].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
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
                {leadersList[0].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {leadersList[1].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
              </EndorsementsList>
            </Column>
            <Column>
              <EndorsementsList>
                {leadersList[2].map(endorsement => (
                  <li key={endorsement}>{endorsement}</li>
                ))}
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
