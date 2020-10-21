import React from "react"
import styled from "styled-components"
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

const Contact = () => {
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
            <ContactForm>
              <h1>Contact Us</h1>
              <Label>
                <p>First Name</p>
                <Input name="firstName" required />
              </Label>
              <Label>
                <p>Last Name</p>
                <Input name="lastName" required />
              </Label>
              <Label>
                <p>Email Address</p>
                <Input name="email" required />
              </Label>
              <Label>
                <p>How would you like to get involved?</p>
                <div>
                  <Select id="budget" required name="budget">
                    <option value="" selected disabled hidden>
                      Select here
                    </option>
                    <option value="event">Host an event</option>
                    <option value="signs">Get yard signs</option>
                    <option value="endorse">Endorse</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
              </Label>
              <Label>
                <p>Your Message (Optional)</p>
                <TextArea></TextArea>
              </Label>
              <Button type="submit" onClick={e => e.preventDefault()}>
                Submit
              </Button>
            </ContactForm>
          </Column>
        </Columns>
      </ContentContainer>
    </ContactSection>
  )
}

export default Contact
