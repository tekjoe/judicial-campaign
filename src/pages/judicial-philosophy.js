import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import PageHeader from "../components/organisms/PageHeader"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import MastheadImage from "../components/atoms/MastheadImage"

import SEO from "../utils/seo"

const JudicialPhilosophyPage = () => (
  <>
    <SEO title="Judicial Philosophy" />
    <PageHeader
      subtitle="Independence. Hard Work. Respect."
      title="My Judicial Philosophy"
    />
    <BlogLayout>
      <Blog.Text>
        <h2>A Message to District II Residents</h2>
        <p>
          It has been an incredible honor to serve you. In seeking to retain
          this position, I want to reiterate the commitments I made during my
          formal investiture December 3, 2019.
        </p>
        <p>
          <strong>Independence.</strong> I pledge to continue to apply the law
          fairly and impartially. Independence is the bedrock of our legal
          system and without it our system fails. The judicial branch is not a
          partisan branch of government. To the contrary it is a firewall
          against the political and societal pressures that often drive the
          decision-making of the other branches. I will continue to do my part
          to preserve this role of the judiciary.
        </p>
        <p>
          <strong>Strong work ethic.</strong> Doing the job right means making
          sure each case receives a thorough analysis and diligent review of the
          record and the law to ensure that the result we reach is sound and
          well-reasoned. While this is hard work, I count myself among those who
          genuinely enjoy the challenges it presents. I commit to bring my
          passion for the law to work every day.
        </p>
        <p>
          <strong>Humility and respect.</strong> I have been enormously
          impressed with the level of quality found in the trial courts of this
          district. Can legal error occur? Yes--it is inevitable where dozens of
          decisions are being made in a single day, and that is why appellate
          courts exist. The role of the court on which I sit is to apply the law
          as we find it (whether we agree with it or not), while giving great
          deference to the trial court’s superior position as the finder of
          fact. Of course, we too can get the law wrong, or apply law that is in
          need of change, and if and when that happens, our supreme court will
          let us know. It is all part of an ecosystem designed to achieve
          justice in the best way our society knows how. I am humbled to play a
          small role in that ecosystem.
        </p>
      </Blog.Text>
      <Blog.Image>
        <MastheadImage style={{ maxHeight: "475px" }} />
      </Blog.Image>
      <Blog.Text>
        <p>
          <strong>Real legal world experience.</strong> While I am the first to
          admit that I am a bit of a law nerd (seriously, I could spend all day
          talking about the Economic Loss Doctrine), I also have over three
          decades of real world, practical experiences that I bring to the job
          as well. During my legal career I have advised corporate boards,
          general counsels, small business owners, individuals and pro bono
          clients to help solve a wide range of legal problems. I regularly
          practiced appellate law before the court on which I now sit, in the
          Wisconsin Supreme Court, and in State and Federal courts around the
          country. I've not left those real world experiences behind--I bring
          them to my job each and every day.
        </p>
        <p>
          <strong>In summary,</strong> a lot of what we do is technical,
          requiring the parsing of words contained in detailed contracts,
          statutes and decades of legal precedent, and I think it is important
          that we be practical too.
        </p>
        <p>
          Frankly, reaching a decision on how to apply the law is not always
          easy. A judge is not a bureaucrat. Applying the rule of law requires a
          judge to be faithful to the law, whether the judge agrees with it or
          not. It requires intellectual honesty, both to the law and the factual
          record before us. It requires thoughtful and thorough analysis and,
          within the confines of the law that we apply, that we be cognizant of
          public policy and long-term practical consequences for the people who
          will be affected by our decisions.
        </p>
        <p>
          My commitment to the citizens of the 12 counties of District II, as
          well as the State at-large, is to continue to follow these principles
          and ideals to the very best of ability.
        </p>
        <p>
          <strong>
            I ask for your Vote of Confidence on Tuesday, April 6, 2021.
          </strong>
        </p>
        <p>Very truly yours,</p>
        <p>Judge Jeffrey O. Davis</p>
      </Blog.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </>
)

export default JudicialPhilosophyPage
