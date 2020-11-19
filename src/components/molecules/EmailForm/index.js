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
  const [email, setEmail] = useState({ email: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = e => {
    setEmail({ email: e.target.value })
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
        setEmail({ email: "" })
        form.reset()
        setIsSubmitted(!isSubmitted)
      })
      .catch(error => alert(error))
  }
  return (
    <Form
      {...rest}
      onSubmit={handleSubmit}
      data-netlify="true"
      name="emailForm"
      method="post"
      action="/contact/"
    >
      <Input
        type="email"
        placeholder="Email Address"
        onChange={handleChange}
        name="email"
        id="email"
        required
      />
      <input type="hidden" name="form-name" value="emailForm" />
      <Button type="submit">{isSubmitted ? "Sent!" : "Stay Connected"}</Button>
    </Form>
  )
}

export default EmailForm
