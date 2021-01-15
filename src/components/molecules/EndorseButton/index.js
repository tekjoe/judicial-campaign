import React from "react"
import styled from "styled-components"
import LinkButton from "../../atoms/LinkButton"

const EndorseButton = styled(LinkButton)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  min-width: calc(100% - 4rem);
  display: ${({ isHidden }) => (isHidden ? "none" : "block")};
  @media (min-width: 768px) {
    min-width: 200px;
  }
`

export default () => {
  return (
    <EndorseButton to="/contact?involved=endorse" draggable="false">
      Endorse Jeff
    </EndorseButton>
  )
}
