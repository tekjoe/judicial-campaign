import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Button = styled(OutboundLink)`
  text-transform: uppercase;
  text-align: center;
  padding: 1rem;
  color: white;
  display: inline-block;
  font-weight: bold;
  letter-spacing: 1px;
  min-width: 150px;
  font-size: 1rem;
  transition: background 0.3s ease-in-out;
  text-transform: uppercase;
  background: #264577;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
  &:hover {
    background: #e25252;
  }
`

const OutboundLinkButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}

export default OutboundLinkButton
