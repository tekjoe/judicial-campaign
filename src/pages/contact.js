import React from "react"
import Contact from "../components/organisms/Contact"
import Footer from "../components/organisms/Footer"

import SEO from "../utils/seo"

const ContactPage = ({ location }) => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Check here to get involved, get in touch, or contribute to the campaign."
      />
      <Contact queryParams={location.search} />
      <Footer />
    </>
  )
}

export default ContactPage
