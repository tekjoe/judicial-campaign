import React from "react"
import Footer from "../components/organisms/Footer"
import SEO from "../utils/seo"
import PageHeader from "../components/organisms/PageHeader"
import Endorsements from "../components/organisms/Endorsements"
import Endorse from "../components/organisms/Endorse"

const EndorsementsPage = () => (
  <>
    <SEO
      title="Endorsements"
      description="Judge Jeff Davis brings experience, hard work, and independence to the Wisconsin Court of Appeals. Hear it from his supporters."
    />
    <PageHeader subtitle="my supporters" title="Endorsements" />
    <Endorsements />
    <Endorse />
    <Footer />
  </>
)

export default EndorsementsPage
