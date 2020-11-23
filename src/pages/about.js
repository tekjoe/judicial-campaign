import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import PageHeader from "../components/organisms/PageHeader"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import DavisCouple from "../components/atoms/DavisCouple"

import SEO from "../utils/seo"

const AboutPage = () => (
  <>
    <SEO title="About" />
    <PageHeader subtitle="About" title="Meet Judge Jeff Davis" withImage />
    <BlogLayout withImage>
      <Blog.Image isHeader>
        <DavisCouple style={{ maxHeight: "475px" }} />
      </Blog.Image>
      <Blog.Text>
        <p>
          My husband is Appellate Judge Jeff Davis. I was so moved by his
          investiture and proud of his compelling remarks I wanted to speak on
          his behalf.
        </p>
        <p>
          Our families, especially the kids, had not seen Jeff in his element
          like that before, nor did they fully appreciate what this role is all
          about - they saw their son, dad, step-dad and brother in a whole new
          light. Jeff’s philosophy on the law and being a judge is shared on
          this website and I encourage you to read it to find out more about
          him.
        </p>
        <p>
          Maybe it was moving to Milwaukee from Alabama at age 14, and/or then
          moving to Cleveland for his senior year of high school, and/or being
          the oldest of three brothers - whatever the combination of factors and
          experiences, the result is a thoughtful, quietly competitive,
          analytical and creative man who was a well-respected lawyer and who
          has truly found his calling as a judge on the Court of Appeals.
        </p>
        <p>
          Sure, I’m biased and I’m in good company if you look at his impressive
          endorsement list. Jeff is smart, hardworking and even-tempered. He’s
          also fair, kind and pragmatic. He exemplifies the competence,
          integrity and character we should demand of all our judges.
        </p>
        <p>
          Please vote to retain Jeff on the Court of Appeals. Be assured that
          you are supporting someone who is in it for the right reasons, is
          nonpartisan and who understands the role of the intermediate appellate
          court - to apply the law, be fair and provide practical clarity to
          litigants, law enforcement, lawyers and judges.
        </p>
        <p>Warmly,</p>
        <p>Rachel Schneider (Davis)</p>
      </Blog.Text>
      <Blog.Text>
        <h4>Court Admissions</h4>
        <ul>
          <li>U.S. Supreme Court, 2004</li>
          <li>U.S. Court of Appeals, 11th Circuit, 2000</li>
          <li>U.S. Court of Appeals, Federal Circuit, 1992</li>
          <li>U.S. Court of Appeals, 7th Circuit, 1988</li>
          <li>U.S. District Court, Western District of Wisconsin, 1988</li>
          <li>U.S. District Court, Eastern District of Wisconsin, 1988</li>
        </ul>
      </Blog.Text>
      <Blog.Text>
        <h4>Professional and Civic Activities</h4>
        <ul>
          <li>State Bar of Wisconsin (Member)</li>
          <li>
            Milwaukee Bar Association (Member; Bench Bar Committee, 1995-1997)
          </li>
          <li>American Bar Association (Member)</li>
          <li>
            State Bar of Wisconsin (Treasurer, Appellate Practice Section,
            2000-2002; State Bar Program Co-chair, 2001-2002; Chairperson-Elect,
            2003; Chair, 2004-2005)
          </li>
          <li>
            State Bar of Wisconsin High School Mock Trial Tournament (Milwaukee
            region, Co-coordinator, 1995-2009)
          </li>
          <li>
            Fox Point Foundation (Board Member, 1992-1997; Treasurer, 1995-1997)
          </li>
          <li>Fox Point Village Ethics Board (2005-2007)</li>
          <li>Fox Point Village Trustee (2007-2009)</li>
        </ul>
      </Blog.Text>
      <Blog.Text>
        <h4>Professional Recognition</h4>
        <ul>
          <li>
            Named a 2014 BTI Client Service All-Star by The BTI Consulting
            Group, Inc.
          </li>
          <li>Martindale-Hubbell AV® Peer Review Rated</li>
          <li>
            Listed in The Best Lawyers in America® (2013-present: Insurance Law)
          </li>
          <li>
            Selected for inclusion in the 2005–present Wisconsin Super Lawyers®
            lists (Business Litigation)
          </li>
        </ul>
      </Blog.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </>
)

export default AboutPage
