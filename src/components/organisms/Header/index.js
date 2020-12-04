import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../../../images/judge-davis-logo.png"

const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  width: 100%;
  background: white;
  a.active {
    color: #e25252;
  }
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

const Logo = styled.div`
  margin-right: 2rem;
  width: 10rem;
  z-index: 10;
  img {
    display: block;
    height: auto;
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 13rem;
  }
  @media (min-width: 1024px) {
    width: 10rem;
  }
`

Logo.Link = styled(Link)``

const Nav = styled.nav`
  display: none;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      font-size: 0.8rem;
      margin-right: 2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      font-weight: 500;
      &:hover {
        color: #e25252;
      }
    }
  }
  @media (min-width: 1024px) {
    display: block;
    margin-left: auto;
  }
`

Nav.Link = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: inherit;
  position: relative;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #e25252;
  }
`

const CTA = styled.div`
  display: none;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
  }
`

CTA.Button = styled(Link)`
  text-transform: uppercase;
  background: #264577;
  font-size: 0.8rem;
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 2px;
  transition: background 0.3s;
  &:hover {
    background: #e25252;
  }
`

const HamburgerButton = styled.a`
  height: 1.25rem;
  width: 1.25rem;
  z-index: 10;
  margin-left: auto;
  svg {
    path {
      fill: ${({ isToggled }) => (isToggled ? "white" : "black")};
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const MobileNav = styled(motion.nav)`
  position: absolute;
  padding: 1rem;
  height: 100vh;
  width: 100%;
  font-weight: bold;
  display: flex;
  overflow: hidden;
  top: 0;
  left: 0;
  background: #264577;
  justify-content: center;
  align-items: center;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.75rem;
    &:last-of-type {
      padding-top: 0.75rem;
    }
    li {
      &:last-of-type {
        a {
          background: #f3304a;
          padding: 0.5rem 2rem;
          color: white;
          margin-top: 1rem;
          font-weight: bold;
        }
      }
      a {
        padding: 0.75rem 0;
        color: white;
        font-size: ${({ theme }) => theme.typography.h4};
        text-decoration: none;
        display: block;
        font-weight: 800;
      }
    }
    @media (min-width: 768px) {
      top: 5rem;
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
`

const HeaderComponent = () => {
  const [isToggled, setIsToggled] = useState(false)
  const toggleMenu = () => {
    setIsToggled(!isToggled)
  }
  const menu = {
    opened: {
      opacity: 1,
      clipPath: "circle(4000px at top right)",
      transition: {
        type: "spring",
        damping: 15,
        staggerChildren: 0.08,
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
    closed: {
      opacity: 0,
      clipPath: "circle(32px at top right)",
      transition: {
        type: "spring",
        damping: 15,
        staggerChildren: 0.05,
        delayChildren: 0.1,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  }

  const item = {
    opened: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 500 },
  }

  return (
    <Header>
      <Logo>
        <img src={logo} alt="Re-elect Judge Jeff Davis" />
      </Logo>
      <Nav>
        <ul>
          <li>
            <Nav.Link to="/" activeClassName="active">
              Home
            </Nav.Link>
          </li>
          <li>
            <Nav.Link to="/about" activeClassName="active">
              Meet Judge Davis
            </Nav.Link>
          </li>
          <li>
            <Nav.Link to="/judicial-philosophy" activeClassName="active">
              Judicial Philosophy
            </Nav.Link>
          </li>
          <li>
            <Nav.Link to="/endorsements" activeClassName="active">
              Endorsements
            </Nav.Link>
          </li>

          <li>
            <Nav.Link to="/contact" activeClassName="active">
              Get Involved
            </Nav.Link>
          </li>
        </ul>
      </Nav>
      <CTA>
        <CTA.Button to="/donate">Donate</CTA.Button>
      </CTA>
      <HamburgerButton onClick={toggleMenu} isToggled={isToggled}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </HamburgerButton>
      <MobileNav
        initial={false}
        animate={isToggled ? "opened" : "closed"}
        variants={menu}
      >
        <motion.ul>
          <motion.li
            onClick={toggleMenu}
            variants={item}
            whileTap={{ scale: 0.95 }}
          >
            <Nav.Link to="/">Home</Nav.Link>
          </motion.li>
          <motion.li
            onClick={toggleMenu}
            variants={item}
            whileTap={{ scale: 0.95 }}
          >
            <Nav.Link to="/about">Meet Judge Davis</Nav.Link>
          </motion.li>
          <motion.li
            onClick={toggleMenu}
            variants={item}
            whileTap={{ scale: 0.95 }}
          >
            <Nav.Link to="/judicial-philosophy">Judicial Philosophy</Nav.Link>
          </motion.li>
          <motion.li
            onClick={toggleMenu}
            variants={item}
            whileTap={{ scale: 0.95 }}
          >
            <Nav.Link to="/endorsements">Endorsements</Nav.Link>
          </motion.li>
          <motion.li
            onClick={toggleMenu}
            variants={item}
            whileTap={{ scale: 0.95 }}
          >
            <Nav.Link to="/contact">Get Involved</Nav.Link>
          </motion.li>
          <motion.li
            onClick={toggleMenu}
            variants={item}
            whileTap={{ scale: 0.95 }}
          >
            <Nav.Link to="/donate">Donate</Nav.Link>
          </motion.li>
        </motion.ul>
      </MobileNav>
    </Header>
  )
}

export default HeaderComponent
