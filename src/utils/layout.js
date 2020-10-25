import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { GlobalStyle } from "../utils/global"
import { baseTheme } from "../utils/theme"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/organisms/Header"

const duration = 0.2

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Main = styled(motion.main)`
  padding-top: 5rem;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <AnimatePresence exitBeforeEnter>
        <Main
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={location.pathname}
        >
          {children}
        </Main>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default Layout
