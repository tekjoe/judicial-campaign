import React from "react"
import styled from "styled-components"
import OutboundLinkButton from "../../atoms/OutboundLinkButton"

const EndorseButton = styled(OutboundLinkButton)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  background: #f3304a;
  min-width: calc(100% - 4rem);
  display: ${({ isHidden }) => (isHidden ? "none" : "block")};
  @media (min-width: 768px) {
    min-width: 200px;
  }
`

export default () => {
  return (
    <EndorseButton
      href="https://docs.google.com/forms/d/e/1FAIpQLSdtcFHg9GlDFTqgqJ-gebSWJUtuGpk4QSQIhwlMwkHe0PayUw/viewform?gxids=7628"
      draggable="false"
      target="_blank"
    >
      Endorse Jeff Now
    </EndorseButton>
  )
}
