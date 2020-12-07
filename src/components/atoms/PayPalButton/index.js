import React from "react"
import styled from "styled-components"
import paypal from "../../../images/paypal.png"

const PayPalButton = styled.a`
  img {
    max-width: 250px;
  }
`

export default () => {
  return (
    <PayPalButton href="https://www.paypal.com/donate?hosted_button_id=6664543JHLNTJ">
      <img src={paypal} alt="PayPal Donate Button" />
    </PayPalButton>
  )
}
