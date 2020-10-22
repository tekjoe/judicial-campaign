import React from "react"
import Contact from "../components/organisms/Contact"
import Footer from "../components/organisms/Footer"
import Layout from "../utils/layout"

import SEO from "../utils/seo"

const ContactPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Contact queryParams={location.search} />
      <Footer />
    </Layout>
  )
}

export default ContactPage
