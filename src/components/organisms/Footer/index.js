import React from "react"
import styled from "styled-components"

import ContentContainer from "../../atoms/ContentContainer"
import { Link } from "gatsby"

const FooterSection = styled.footer`
  background: #264577;
  color: white;
  padding: 4rem 0;
`

const FooterNav = styled.nav`
  margin-bottom: 2rem;
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    flex-wrap: wrap;
    flex-basis: 100%;
    li {
      margin: 0.5rem;
    }
  }
  @media (min-width: 1024px) {
  }
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`

const FooterBody = styled.div`
  margin: 0 auto;
  @media (min-width: 1024px) {
    max-width: 40%;
  }
`
const FooterCopy = styled.div`
  text-transform: uppercase;
  border: 1px solid white;
  padding: 1rem 2rem;
  text-align: center;
  letter-spacing: 1px;
`

const Footer = () => {
  return (
    <FooterSection>
      <ContentContainer>
        <FooterBody>
          <FooterNav>
            <ul>
              <li>
                <NavLink to="/">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/">About Jeff</NavLink>
              </li>
              <li>
                <NavLink to="/">Get Involved</NavLink>
              </li>
            </ul>
          </FooterNav>
          <FooterCopy>Paid for by Citizens for Judge Jeff Davis</FooterCopy>
        </FooterBody>
      </ContentContainer>
    </FooterSection>
  )
}

export default Footer
