import React from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import PageHeader from "../components/organisms/PageHeader"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import danBiceJanuary from "../images/DanBiceJanuary.pdf"
import danBiceFebruary from "../images/DanBiceFebruary.pdf"
import westBendDailyNews from "../images/westBendDailyNews.pdf"
import SEO from "../utils/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const AboutPage = () => (
  <>
    <SEO
      title="In the News"
      description="Judge Jeff Davis brings over 30 years of legal experience to the Wisconsin Court of Appeals. Learn more about Judge Davis."
    />
    <PageHeader subtitle="Read the Latest" title="In the News" />
    <BlogLayout>
      <Blog.Text>
        <h4>News & Articles</h4>
        <ul>
          <li>
            <OutboundLink href="https://www.riponpress.com/editorial/vote-for-davis-for-wis-appeals-court-judge/article_c59ac980-872c-11eb-858e-6b7d193f8005.html">
              Vote for Davis for Wis. Appeals Court judge
            </OutboundLink>{" "}
            - <em>Rippon Press</em>
          </li>
          <li>
            <OutboundLink href="https://journaltimes.com/opinion/letters/gasiorkiewicz-retain-judge-jeff-davis/article_40ed61f6-e9a3-5337-9624-070ac2cf34a7.html">
              Gasiorkiewicz: Retain Judge Jeff Davis
            </OutboundLink>{" "}
            - <em>The Journal Times</em>
          </li>
          <li>
            <OutboundLink href="https://www.ozaukeepress.com/content/press-editorial-political-attack-judge-has-familiar-ring">
              PRESS EDITORIAL: Political attack on judge has a familiar ring
            </OutboundLink>{" "}
            - <em>Ozaukee Press</em>
          </li>
          <li>
            <OutboundLink href={danBiceJanuary}>
              Appeals Court candidate rips opponent for landing Tony Evers
              appointment she also sought
            </OutboundLink>{" "}
            - <em>Milwaukee Journal Sentinel</em>
          </li>
          <li>
            <OutboundLink href={danBiceFebruary}>
              Appeals court race explodes in angry dispute between major GOP
              donors and former Gov. Scott Walker's family
            </OutboundLink>{" "}
            - <em>Milwaukee Journal Sentinel</em>
          </li>
          <li>
            <OutboundLink href={westBendDailyNews}>
              Return Judge Davis to Court of Appeals
            </OutboundLink>{" "}
            - <em>West Bend Daily News</em>
          </li>
        </ul>
      </Blog.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </>
)

export default AboutPage
