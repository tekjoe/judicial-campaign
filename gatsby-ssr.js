import React from "react"
import { ThemeProvider } from "styled-components"
import { baseTheme } from "./src/utils/theme"
import { GlobalStyle } from "./src/utils/global"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={baseTheme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
