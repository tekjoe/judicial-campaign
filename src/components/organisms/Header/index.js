import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../../../images/judge_davis_logo.png"

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
  img {
    display: block;
    height: auto;
    width: 100%;
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
      letter-spacing: 2px;
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
  @media (min-width: 1024px) {
    display: none;
  }
`

const MobileNav = styled(motion.nav)`
  position: absolute;
  padding: 1rem;
  width: 100%;
  font-weight: bold;
  z-index: 1;
  overflow: hidden;
  top: 5rem;
  left: 0;
  background: white;
  ul {
    list-style-type: none;
    padding-bottom: 0.75rem;
    &:last-of-type {
      padding-top: 0.75rem;
    }
    li {
      a {
        padding: 0.75rem 0;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 2px;
        display: block;
        font-weight: 400;
      }
    }
  }
  @media (min-width: 768px) {
    top: 5rem;
  }
`

export default () => {
  const [isToggled, setIsToggled] = useState(false)
  const toggleMenu = () => {
    setIsToggled(!isToggled)
  }
  const variants = {
    open: {
      height: "auto",
      width: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.1,
        staggerChildren: 0.03,
        delayChildren: 0.2,
        staggerDirection: -1,
      },
      transitionEnd: {
        display: "block",
      },
    },
    closed: {
      height: 0,
      opacity: 0.1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.03,
        staggerDirection: 1,
        when: "afterChildren",
      },
      transitionEnd: { display: "none" },
    },
  }
  const item = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
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
            <Nav.Link to="/endorsements" activeClassName="active">
              Endorsements
            </Nav.Link>
          </li>
        </ul>
      </Nav>
      <CTA>
        <CTA.Button to="/contact">Get Involved</CTA.Button>
      </CTA>
      <HamburgerButton onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </HamburgerButton>
      <MobileNav
        animate={isToggled ? "open" : "closed"}
        variants={variants}
        initial={false}
      >
        <motion.ul>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/">Home</Nav.Link>
          </motion.li>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/about">Meet Judge Davis</Nav.Link>
          </motion.li>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/endorsements">Endorsements</Nav.Link>
          </motion.li>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/contact">Get Involved</Nav.Link>
          </motion.li>
        </motion.ul>
      </MobileNav>
    </Header>
  )
}
