import React, { useState, useEffect } from "react"
import styled from "styled-components"
import queryString from "query-string"
import { Column, Columns } from "../../atoms/Columns"
import ContentContainer from "../../atoms/ContentContainer"
import ContactImage from "../../atoms/ContactImage"

const ContactSection = styled.section`
  display: ${props => (props.centered ? "flex" : "block")};
  justify-content: center;
  align-items: center;
  padding: 8rem 0 2rem 0;
  position: relative;
  @media (min-width: 1024px) {
    padding: 10rem 0;
    min-height: 75vh;
  }
  @media (min-width: 1400px) {
    padding: 15rem 0 10rem 0;
  }
`

const SectionOverlay = styled(ContactImage)`
  position: absolute;
  top: 0;
  left: 0;
`

const ContactForm = styled.form`
  background: #1a2f51;
  color: white;
  position: relative;
  z-index: 100;
  padding: 2rem;
  h1 {
    font-size: ${({ theme }) => theme.typography.h3};
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: ${({ theme }) => theme.typography.h1};
      margin-bottom: 1.25rem;
    }
    padding: 4rem;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 1rem;
  p {
    font-size: 1.125rem;
    color: white;
    margin-bottom: 0.25rem;
  }
`

const Input = styled.input`
  font-size: ${({ theme }) => theme.typography.paragraph};
  padding: 0.5rem;
  border: none;
  -moz-appearance: none;
  @media (min-width: 1024px) {
    padding: 1rem;
  }
`

const TextArea = styled.textarea`
  font-size: ${({ theme }) => theme.typography.paragraph};
  padding: 0.5rem;
  border: none;
  -moz-appearance: none;
  resize: vertical;
  min-height: 5rem;
  font-family: inherit;
  font-size: inherit;
  @media (min-width: 1024px) {
    padding: 1rem;
  }
`

const Button = styled.button`
  background: #f3304a;
  padding: 1rem;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  min-width: 200px;
`

const Select = styled.select`
  border: none;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  @media (min-width: 1024px) {
    padding: 1rem;
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = ({ queryParams }) => {
  const parsed = queryString.parse(queryParams)
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    involved: "",
  })
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        form.reset()
      })
      .catch(error => alert(error))
  }
  const getValueFromQueryParam = parsed => {
    if (Object.keys(parsed).length) {
      const [name, value] = Object.entries(parsed)[0]
      setState({ ...state, [name]: value })
    }
  }
  useEffect(() => {
    getValueFromQueryParam(parsed)
  }, [])
  return (
    <ContactSection centered>
      <SectionOverlay
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <ContentContainer>
        <Columns>
          <Column></Column>
          <Column>
            <ContactForm
              onSubmit={handleSubmit}
              name="contactForm"
              method="post"
            >
              <h1>Contact Us</h1>
              <Label>
                <p>First Name</p>
                <Input
                  name="firstName"
                  type="text"
                  required
                  onChange={handleChange}
                  value={state.firstName}
                />
              </Label>
              <Label>
                <p>Last Name</p>
                <Input
                  name="lastName"
                  type="text"
                  required
                  onChange={handleChange}
                  value={state.lastName}
                />
              </Label>
              <Label>
                <p>Email Address</p>
                <Input
                  name="email"
                  required
                  type="email"
                  onChange={handleChange}
                  value={state.email}
                />
              </Label>
              <Label>
                <p>How would you like to get involved?</p>
                <div>
                  <Select
                    id="involved"
                    required
                    name="involved"
                    onChange={handleChange}
                    value={state.involved}
                  >
                    <option value="" disabled hidden>
                      Select here
                    </option>
                    <option value="event">Host an event</option>
                    <option value="signs">Get yard signs</option>
                    <option value="endorse">Endorse</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
              </Label>
              <Label>
                <p>
                  Your{" "}
                  {state.involved && state.involved === "endorse"
                    ? "Endorsement (Required)"
                    : "Message (Optional)"}
                </p>
                <TextArea
                  required={state.involved === "endorse" ? true : false}
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                />
              </Label>
              <Button type="submit">Submit</Button>
            </ContactForm>
          </Column>
        </Columns>
      </ContentContainer>
    </ContactSection>
  )
}

export default Contact
