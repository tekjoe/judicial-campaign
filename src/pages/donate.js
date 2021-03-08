import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import PageHeader from "../components/organisms/PageHeader"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import SEO from "../utils/seo"
import PayPalButton from "../components/atoms/PayPalButton"
import LinkButton from "../components/atoms/LinkButton"

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
        <p>Click here to contribute via credit/debit card or PayPal.</p>
        <p>
          <PayPalButton />
        </p>
        <p>
          To contribute with a check, please make your check payable to{" "}
          <strong>Citizens for Judge Jeff Davis</strong> and mail to:
          <br />
          <strong>
            <span>Citizens for Judge Jeff Davis</span>
            <br />
            <span>PO Box 308</span>
            <br />
            <span>Thiensville WI, 53092</span>
          </strong>
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
            <li>
              Corporations may not contribute to local or state candidates in
              the State of Wisconsin. WIS. STAT. § 11.1112.
            </li>
            <li>
              Sole-proprietorships may contribute. The contribution must be
              reported under the name of the individual owner. This contribution
              counts toward the contribution limits from that individual to the
              candidate. WIS. STAT. § 11.1113(1).
            </li>

            <li>
              Partnerships may contribute. The contribution must be reported
              under the names of the individual partners. The partnership may
              agree beforehand on how to allocate a portion of the contribution
              to each partner. If the partnership does not inform the candidate
              how the contribution should be allocated between the partners,
              then the contribution should be divided up according to each
              partner’s share of the partnership’s profits. WIS. STAT. §
              11.1113(2).
            </li>

            <li>
              LLCs taxed as a sole-proprietorship or partnership may contribute.
              The contribution must be reported under the name(s) of the
              individual owner(s). If there is more than one owner,
              contributions should be allocated as described in the partnership
              section above. WIS. STAT. § 11.1113(3).
            </li>
          </ol>
        </p>
      </Blog.Text>
      <Blog.Text>
        <h3>Looking for other ways to get involved?</h3>
        <p>
          Get out the vote! Encourage your friends, neighbors, relatives,
          co-workers to vote for Judge Jeff Davis!
        </p>
        <p>
          <strong>Request a yard sign today!</strong>
        </p>
        <LinkButton to="/contact?involved=signs">Request Yard Sign</LinkButton>
      </Blog.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </>
)

export default DonatePage
