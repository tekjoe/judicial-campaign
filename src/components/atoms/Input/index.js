import React from "react"
import styled from "styled-components"

const _Input = styled.input`
  font-size: ${({ theme }) => theme.typography.paragraph};
  padding: 1rem;
  -moz-appearance: none;
  border: none;
`

const Input = ({ children, ...rest }) => {
  return <_Input {...rest}>{children}</_Input>
}

export default Input
