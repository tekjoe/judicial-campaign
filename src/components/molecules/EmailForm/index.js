import React, { useState } from "react"
import styled from "styled-components"
import Input from "../../atoms/Input"
import Button from "../../atoms/Button"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 0.5rem;
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const EmailForm = ({ ...rest }) => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = e => {
    setEmail(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...email,
      }),
    })
      .then(() => {
        setEmail("")
        setIsSubmitted(!isSubmitted)
      })
      .catch(error => alert(error))
  }
  return (
    <Form
      {...rest}
      onSubmit={handleSubmit}
      data-netlify="true"
      name="contactForm"
      method="post"
      action="/contact/"
    >
      <Input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={handleChange}
        required
      />
      <Button type="submit">{isSubmitted ? "Sent!" : "Stay Connected"}</Button>
    </Form>
  )
}

export default EmailForm
