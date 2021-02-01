import React from "react"
import AboutSection from "../components/organisms/AboutSection/"
import CallToAction from "../components/organisms/CallToAction"
import Features from "../components/organisms/Features"
import GetInvolved from "../components/organisms/GetInvolved"
import MastheadSection from "../components/organisms/Masthead"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import TestimonialSlider from "../components/molecules/TestimonialSlider"
import SEO from "../utils/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <MastheadSection />
    <CallToAction />
    <AboutSection />
    <GetInvolved />
    <Features />
    <TestimonialSlider />
    <SignUp />
    <Footer />
  </>
)

export default IndexPage
