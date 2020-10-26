import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import SEO from "../utils/seo"
import PageHeader from "../components/organisms/PageHeader"
import Endorsements from "../components/organisms/Endorsements"

const EndorsementsPage = () => (
  <>
    <SEO title="Endorsements" />
    <PageHeader subtitle="my supporters" title="Endorsements" />
    <Endorsements />
    <SignUp />
    <Footer />
  </>
)

export default EndorsementsPage
