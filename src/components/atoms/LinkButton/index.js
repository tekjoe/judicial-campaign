import React from "react"
import styled from "styled-components"
import { darken } from "polished"
import { Link } from "gatsby"

const Button = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  background: #f3304a;
  padding: 1rem;
  color: white;
  display: ${({ fullwidth }) => (fullwidth ? "block" : "inline-block")};
  font-weight: bold;
  letter-spacing: 1px;
  min-width: 300px;
  font-size: 1.125rem;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: ${darken(0.1, "#f3304a")};
  }
`

const LinkButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}

export default LinkButton
