import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import Layout from "../utils/layout"
import PageHeader from "../components/organisms/PageHeader"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import MastheadImage from "../components/atoms/MastheadImage"

import SEO from "../utils/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader subtitle="About" title="Meet Judge Jeff Davis" withImage />
    <BlogLayout>
      <Blog.Image isHeader>
        <MastheadImage style={{ maxHeight: "475px" }} />
      </Blog.Image>
      <Blog.Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa
          eget nisi, justo, ipsum. Fermentum volutpat rhoncus, praesent in
          adipiscing sapien ligula nulla. Vitae at nisl maecenas quis tellus.
          Mauris integer maecenas pulvinar aliquet consectetur erat. Posuere
          tincidunt augue sed nec nam proin tincidunt id. In aliquet non mattis
          libero. Nibh lectus fermentum cursus id. Vitae lacus, vitae lorem
          viverra vitae sit velit, felis massa. Amet magna sed dictum risus sit
          dolor. Sit nisl tristique mauris eu maecenas pellentesque. Aliquam
          quisque sollicitudin consectetur aliquam id.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa
          eget nisi, justo, ipsum. Fermentum volutpat rhoncus, praesent in
          adipiscing sapien ligula nulla. Vitae at nisl maecenas quis tellus.
          Mauris integer maecenas pulvinar aliquet consectetur erat. Posuere
          tincidunt augue sed nec nam proin tincidunt id. In aliquet non mattis
          libero. Nibh lectus fermentum cursus id. Vitae lacus, vitae lorem
          viverra vitae sit velit, felis massa. Amet magna sed dictum risus sit
          dolor. Sit nisl tristique mauris eu maecenas pellentesque. Aliquam
          quisque sollicitudin consectetur aliquam id.
        </p>
      </Blog.Text>
      <Blog.Image>
        <MastheadImage style={{ maxHeight: "475px" }} />
      </Blog.Image>
      <Blog.Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa
          eget nisi, justo, ipsum. Fermentum volutpat rhoncus, praesent in
          adipiscing sapien ligula nulla. Vitae at nisl maecenas quis tellus.
          Mauris integer maecenas pulvinar aliquet consectetur erat. Posuere
          tincidunt augue sed nec nam proin tincidunt id. In aliquet non mattis
          libero. Nibh lectus fermentum cursus id. Vitae lacus, vitae lorem
          viverra vitae sit velit, felis massa. Amet magna sed dictum risus sit
          dolor. Sit nisl tristique mauris eu maecenas pellentesque. Aliquam
          quisque sollicitudin consectetur aliquam id.
        </p>
      </Blog.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </Layout>
)

export default AboutPage
