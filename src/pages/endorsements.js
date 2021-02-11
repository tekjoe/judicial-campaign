import React from "react"
import Footer from "../components/organisms/Footer"
import SEO from "../utils/seo"
import PageHeader from "../components/organisms/PageHeader"
import Endorsements from "../components/organisms/Endorsements"
import Endorse from "../components/organisms/Endorse"
import EndorseButton from "../components/molecules/EndorseButton"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import RoggensackPhoto from "../components/atoms/RoggensackPhoto"

const EndorsementsPage = () => (
  <>
    <SEO
      title="Endorsements"
      description="Judge Jeff Davis brings experience, hard work, and independence to the Wisconsin Court of Appeals. Hear it from his supporters."
    />
    <PageHeader subtitle="my supporters" title="Endorsements" withImage />
    <BlogLayout withImage isTestimonial>
      <Blog.Figure isHeader isTestimonial>
        <RoggensackPhoto style={{ maxHeight: "475px" }} />
        <Blog.Caption>
          Judge Jeff Davis with Chief Justice Patience D. Roggensack, WI Supreme
          Court
        </Blog.Caption>
      </Blog.Figure>
      <Blog.Text>
        <p style={{ fontWeight: 600 }}>
          <em>
            "Jeff's decades of experience, particularly in business litigation,
            serves the Appellate II judicial team well. Additionally, his
            thoughtfulness and fairness to all who appear before him is
            reflected by his commitment to deciding cases based on the law and
            facts, not by his personal preferences."
          </em>
        </p>
        <p>&mdash; Chief Justice Patience D. Roggensack, WI Supreme Court</p>
      </Blog.Text>
    </BlogLayout>
    <Endorsements />
    <Endorse />
    <EndorseButton />
    <Footer />
  </>
)

export default EndorsementsPage
