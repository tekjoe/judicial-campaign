import React from "react"
import styled from "styled-components"
import { darken } from "polished"

const _Button = styled.button`
  background: #f3304a;
  padding: 1rem;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  font-size: 1.125rem;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: ${darken(0.1, "#f3304a")};
  }
`

const Button = ({ children, ...rest }) => {
  return <_Button {...rest}>{children}</_Button>
}

export default Button
