import React from "react"
import Contact from "../components/organisms/Contact"
import Footer from "../components/organisms/Footer"
import Layout from "../utils/layout"

import SEO from "../utils/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
