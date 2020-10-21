import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../utils/global"
import { baseTheme } from "../utils/theme"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/organisms/Header"

const Main = styled.main`
  padding-top: 5rem;
`

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

export default Layout
