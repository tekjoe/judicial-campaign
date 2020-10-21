import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import Layout from "../utils/layout"
import SEO from "../utils/seo"
import PageHeader from "../components/organisms/PageHeader"

const EndorsementsPage = () => (
  <Layout>
    <SEO title="Endorsements" />
    <PageHeader subtitle="my supporters" title="Endorsements" />
    <SignUp />
    <Footer />
  </Layout>
)

export default EndorsementsPage
