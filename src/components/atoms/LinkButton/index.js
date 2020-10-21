import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  background: #f3304a;
  padding: 1rem;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  min-width: 300px;
  font-size: 1.125rem;
`

const LinkButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}

export default LinkButton
