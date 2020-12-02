import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import PageHeader from "../components/organisms/PageHeader"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import DavisCouple from "../components/atoms/DavisCouple"
import InvestitureImage from "../components/atoms/InvestitureImage"

import SEO from "../utils/seo"

const AboutPage = () => (
  <>
    <SEO
      title="About"
      description="Judge Jeff Davis brings over 30 years of legal experience to the Wisconsin Court of Appeals. Learn more about Judge Davis."
    />
    <PageHeader
      subtitle="Experienced. Practical."
      title="Meet Judge Jeff Davis"
      withImage
    />
    <BlogLayout withImage>
      <Blog.Figure isHeader>
        <DavisCouple style={{ maxHeight: "475px" }} />
      </Blog.Figure>
      <Blog.Text>
        <p>
          My husband is Court of Appeals Judge Jeff Davis. I was so moved by his
          investiture and proud of his compelling remarks, and I want to tell
          you more about him.
        </p>
        <p>
          Our families, especially the kids, had not seen Jeff in his element
          like that before, nor did they fully appreciate what this role is all
          about &mdash; they saw their son, dad, step-dad and brother in a whole
          new light. Jeff’s philosophy on the law and being a judge is shared on
          this website and I encourage you to read it to find out more about
          him.
        </p>
        <p>
          Maybe it was moving to Milwaukee from Alabama at age 14, or then
          moving to Cleveland for his senior year of high school, or being the
          oldest of three brothers &mdash; whatever the combination of factors
          and experiences, the result is a thoughtful, quietly competitive,
          analytical and creative man who was a well-respected lawyer and who
          has truly found his calling as a judge on the Court of Appeals.
        </p>
        <p>
          Sure, I’m biased but I’m in good company if you look at his impressive
          endorsement list. Jeff is smart, hardworking and even-tempered. He’s
          also fair, kind and pragmatic. He exemplifies the competence,
          integrity and character we should demand of all our judges.
        </p>
        <p>
          Please vote to retain Jeff on the Court of Appeals. Be assured that
          you are supporting someone who is in it for the right reasons, is
          nonpartisan and who understands the role of the intermediate appellate
          court &mdash; to apply the law, be fair and provide practical clarity
          to litigants, law enforcement, lawyers and judges.
        </p>
        <p>Warmly,</p>
        <p>Rachel</p>
      </Blog.Text>
      <Blog.Figure>
        <InvestitureImage style={{ maxHeight: "475px" }} />
        <Blog.Caption>
          December 3, 2019, Ceremonial Investiture: Judge Davis and family
        </Blog.Caption>
      </Blog.Figure>
      <Blog.Text>
        <h4>About Jeff</h4>
        <p>
          Jeff brings a unique perspective to the Court of Appeals with his
          extensive civil law experience, including complex business litigation.
        </p>
        <p>
          Prior to joining the bench, Jeff practiced law for more than 30 years
          at the national law firm of Quarles & Brady LLP in its Litigation
          Practice Group. In cases before the Wisconsin Supreme Court and
          elsewhere, Jeff secured precedent setting legal decisions such as
          Plastics Engineering v. Liberty Mutual and multi-million-dollar
          judgements on behalf of his clients in disputes arising out of
          asbestos and other long tail insurance claims.
        </p>
        <p>
          Jeff has lectured and served as an adjunct professor at Marquette
          University Law School. He earned his J.D. from The Ohio State
          University Moritz College of Law and his B.S. from Miami University in
          Ohio.
        </p>
      </Blog.Text>
      <Blog.Text>
        <h4>Recognition & Court Admissions</h4>
        <ul>
          <li>Martindale-Hubbel AV&reg; Peer Review Rated</li>
          <li>
            Listed in The Best Lawyers in America (2013-2019: Insurance Law)
          </li>
          <li>
            Listed in Wisconsin Super Lawyers&reg; (2005-2019: Business
            Litigation)
          </li>
          <li>U.S. Supreme Court, 2004</li>
          <li>U.S. Court of Appeals, 11th Circuit, 2000</li>
          <li>U.S. Court of Appeals, Federal Circuit, 1992</li>
          <li>U.S. Court of Appeals, 7th Circuit, 1988</li>
          <li>U.S. District Court, Western District of Wisconsin, 1988</li>
          <li>U.S. District Court, Eastern District of Wisconsin, 1988</li>
        </ul>
      </Blog.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </>
)

export default AboutPage
