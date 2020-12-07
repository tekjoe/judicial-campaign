import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import PageHeader from "../components/organisms/PageHeader"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import SEO from "../utils/seo"
import OutboundLinkButton from "../components/atoms/OutboundLinkButton"
import nominationPapers from "../images/jeff-davis-nomination-papers.pdf"
import PayPalButton from "../components/atoms/PayPalButton"

const DonatePage = () => (
  <>
    <SEO
      title="Donate"
      description="Your support ensures that Judge Jeff Davis retains his seat on the Wisconsin Court of Appeals, District II. Donate now."
    />
    <PageHeader subtitle="Support Judge Davis" title="Donate" />
    <BlogLayout>
      <Blog.Text>
        <h2>Stand with Judge Jeff Davis</h2>
        <p>
          Make this campaign a success and donate today. The Wisconsin Court of
          Appeals District II deserves a judge who is experienced, hardworking,
          and independent. Jeff Davis is that judge.
        </p>
        <p>
          <PayPalButton />
        </p>
        <p>
          <strong>All contributions are greatly appreciated</strong>
          <br />
          This solicitation of funds is made by the registered campaign
          committee “Citizens for Judge Jeff Davis” not by Jeff Davis himself.
          Donations are not tax deductible. Individuals and PACs may contribute
          up to $5,000. Contribution limitations apply cumulatively to the
          entire primary and election campaign (December 2020 - April 2021).
        </p>
        <p>
          <strong>Contribution Rules</strong>
          <ol>
            <li>I am at least 18 years old.</li>
            <li>
              This contribution is made from my own funds, and funds are not
              being provided to me by another person or entity for the purpose
              of making this contribution.
            </li>
            <li>
              I am making this contribution with my own personal credit card and
              not with a corporate or business credit card or a card issued to
              another person.
            </li>
            <li>
              I am a U.S. citizen or lawfully admitted permanent resident (i.e.
              green card holder).
            </li>
          </ol>
        </p>
      </Blog.Text>
      <Blog.Text>
        <h3>Looking for other ways to get involved?</h3>
        <p>
          <strong>
            We need your help gathering signatures on Jeff's nomination papers.
          </strong>
        </p>
        <p>
          Any adult in your office, home, or neighborhood, provided they are
          eligible District II voters, can sign. Every signature is important!
        </p>
        <p>
          <OutboundLinkButton href={nominationPapers}>
            Download Nomination Papers
          </OutboundLinkButton>
        </p>
      </Blog.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </>
)

export default DonatePage
