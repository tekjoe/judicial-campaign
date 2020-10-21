import React from "react"
import styled from "styled-components"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import Layout from "../utils/layout"
import PageHeader from "../components/organisms/PageHeader"
import MastheadImage from "../components/atoms/MastheadImage"
import SEO from "../utils/seo"

const BlogLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1140px;
  margin: 0 2rem;
  padding: 0 0 4rem 0;
  @media (min-width: 1024px) {
    margin: 0 auto;
    padding: 0 0 5rem 0;
  }
`

BlogLayout.Text = styled.div`
  grid-column: 1/-1;
  margin-bottom: 3rem;
  p:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1024px) {
    margin-bottom: 5rem;
    grid-column: 3/-3;
  }
  @media (min-width: 1200px) {
    grid-column: 3/-3;
  }
`

BlogLayout.Image = styled.div`
  grid-column: 1/-1;
  margin-bottom: 3rem;
  margin-top: ${({ isHeader }) => (isHeader ? "-4rem" : 0)};
  position: relative;
  @media (min-width: 1024px) {
    margin-bottom: 5rem;
    grid-column: 2/-2;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader subtitle="About" title="Meet Judge Jeff Davis" withImage />
    <BlogLayout>
      <BlogLayout.Image isHeader>
        <MastheadImage style={{ maxHeight: "475px" }} />
      </BlogLayout.Image>
      <BlogLayout.Text>
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
      </BlogLayout.Text>
      <BlogLayout.Image>
        <MastheadImage style={{ maxHeight: "475px" }} />
      </BlogLayout.Image>
      <BlogLayout.Text>
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
      </BlogLayout.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </Layout>
)

export default AboutPage
