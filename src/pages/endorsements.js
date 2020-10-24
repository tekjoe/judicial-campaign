import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import SEO from "../utils/seo"
import PageHeader from "../components/organisms/PageHeader"

const EndorsementsPage = () => (
  <>
    <SEO title="Endorsements" />
    <PageHeader subtitle="my supporters" title="Endorsements" />
    <SignUp />
    <Footer />
  </>
)

export default EndorsementsPage
