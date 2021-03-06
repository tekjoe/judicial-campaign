import React, { useRef } from "react"
import SignUp from "../components/organisms/SignUp"
import Footer from "../components/organisms/Footer"
import PageHeader from "../components/organisms/PageHeader"
import BlogLayout, { Blog } from "../components/organisms/BlogLayout"
import SEO from "../utils/seo"
import jdWvp from "../images/jd-wvp.pdf"
import floridaGov from "../images/letter-to-florida-gov.pdf"
import reillyLetter from "../images/judge-reilly-letter.pdf"
import gasLetter from "../images/judge-gasiorkiewicz-letter.pdf"
import gonringLetter from "../images/judge-gonring-letter.pdf"
import fitzLetter from "../images/judge-fitzpatrick-letter.pdf"
import clarkOpinion from "../images/clark-opinion.pdf"
import maherLetter from "../images/maher-to-judge-davis04022021.pdf"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Button from "../components/atoms/Button"

const AboutPage = () => {
  const opinionsRef = useRef()
  const scrollToOpinions = () => {
    opinionsRef.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <SEO
        title="Know the Facts"
        description="Judge Jeff Davis brings over 30 years of legal experience to the Wisconsin Court of Appeals. Learn more about Judge Davis."
      />
      <PageHeader subtitle="" title="Know the Facts" />
      <BlogLayout>
        <Blog.Text>
          <h4>Bipartisan Support for this Nonpartisan Office</h4>
          <p>
            <strong>
              Jeff's endorsement list includes four conservatively leaning
              Supreme Court justices, 22 current and retired court of appeals
              judges and dozens of current and retired trial court judges
              throughout the district (ten appointed by Governor Walker).
            </strong>
          </p>
          <p>
            The justices and judges endorsing Judge Davis know that his
            experience handling hundreds of cases in the trial and appellate
            courts matters and they know that, as a sitting appellate judge, he
            has strived to apply the law-whether it be a statute, case law, or
            the Constitution-as it exists without bias and in a clear,
            well-reasoned manner.
          </p>
          <p>
            <Button onClick={scrollToOpinions}>Read his opinions</Button>
          </p>
          <h4>Grogan's Lack of Experience</h4>
          <p>
            <strong>
              Grogan is a career entry level clerk willing to play politics and
              mislead in an attempt to get a better job for which she is not
              qualified. No governor, Republican or Democrat, has ever been
              willing to appoint her to be a judge.
            </strong>
          </p>
          <p>
            Judge Davis's opponent, Shelley Grogan, is a career law clerk, which
            is an entry level position in the court system. She applied for the
            appointment with Governor Evers, and was passed over without an
            interview. She has refused to make her application public but we
            know she cited iconic liberal jurists, e.g., Ruth Bader Ginsburg, as
            those she most admired, while now claiming to be a highly
            conservative "Constitutionalist". She was previously passed over for
            a judicial appointment by Gov. Walker without so much as an
            interview.
          </p>
          <p>
            Despite this sound bi-partisan rejection, Grogan has repeatedly
            touted her experience as a law clerk as akin to actually being a
            sitting Supreme Court justice, claiming that she "performs the same
            tasks" as the justice she works for and that she "may be the most
            qualified candidate to ever run for the court of appeals" in its 43
            year history, thus calling into question her trustworthiness,
            thoughtfulness and humility &mdash; qualities that are essential to
            being an effective judge.
          </p>
          <h4>Davis's Real-World Experience</h4>
          <p>
            <strong>
              In contrast Davis took an enormous pay cut in order to provide a
              public service and bring to the bench real world experience needed
              so that Wisconsin businesses can thrive, in order to provide good
              paying jobs.
            </strong>
          </p>
          <p>
            Jeff was chosen and appointed by Governor Evers because of the
            extensive real-world experience he brought to the bench, including
            in high stakes business law cases that set landmark precedents in
            the Wisconsin Supreme Court. Accomplished private practice attorneys
            often don't consider the judiciary because they have thriving
            practices, and frankly, because of the difference in pay. Judge
            Davis had reached a point in his career where he felt it was time to
            give back - this was his calling.
          </p>

          <h4>Grogan Hasn't Tried a Case or Handled an Appeal</h4>
          <p>
            To put the difference in experience in context, according to CCAP,
            Judge Davis is shown as counsel of record in 107 Wisconsin state
            trial court cases, and 77 appeals in the court of appeals and
            supreme court since that data began to be collected in 1996. This
            does not include federal or non-Wisconsin cases (where Judge Davis
            had a very active practice) or any cases where he was counsel of
            record in the nine years he practiced prior to 1996. The same
            numbers for Ms. Grogan are zero-there is no evidence that she has
            tried a case, handled an appeal, or been hired by a client.
          </p>
          <h4>Death Penalty Case</h4>
          <p>
            <strong>
              As a young lawyer, and at the request of the American Bar
              Association, Davis spent countless hours, unpaid, seeking to get
              life in prison rather than death for a man who did not shoot
              anyone, but was involved in a failed prison break.
            </strong>
          </p>
          <p>
            The death penalty case that is the subject of attack ads against
            Judge Davis concerned a death row inmate, William Van Poyck, who was
            executed in 2013. Davis became involved in this case at the
            post-conviction stage in an effort to have the sentence reduced to
            life in prison, at the request of the American Bar Association,
            which has a program to recruit pro bono counsel from large law firms
            to handle these complex cases. Van Poyck's conviction and sentence
            was based on a finding by the jury and sentencing judge that was
            later proven false: that he killed a prison guard. In reality Van
            Poyck had participated in a botched attempt to assist a friend in
            escaping from a prison transport van in West Palm Beach, during
            which an accomplice, Frank Valdes, shot and killed a guard. (Valdes
            was subsequently beaten to death in his prison cell by eight Florida
            State Prison guards.) The appellate issues that were raised included
            the questionable grounds for imposing death and the shoddy
            representation Van Poyck had received at trial and the results were
            close, losing twice by narrow 4-3 votes in the Florida Supreme
            Court, and in multiple proceedings in federal district and appellate
            courts. <OutboundLink href={floridaGov}>Here</OutboundLink> is the
            letter Jeff wrote to the then Governor of Florida on the day of Van
            Poyck's execution and <OutboundLink href={jdWvp}>here</OutboundLink>{" "}
            is the letter Van Poyck sent to Judge Davis the day before his
            execution. Quarles & Brady received a national pro bono award from
            the American Bar Association in large part because of this case.
          </p>
          <p>
            <OutboundLink href={maherLetter}>Here</OutboundLink> is a letter
            from the former director of the American Bar Association Death
            Penalty Representation project commending Judge Davis for the work
            he did on this case, and explaining why such work is important to
            the legal system. As you can see Judge Davis is in good company in
            handling this type of case &mdash; others having done so include
            Chief Justice John Roberts, former U.S. Solicitor Generals Kenneth
            Starr and Donald Verilli, and U.S. Senators Ted Cruz and Tim Kaine.
          </p>
          <p>
            In light of the above, it comes as no surprise that Politifact gave
            Grogan's campaign a "Half True" in its assessment as to its
            accuracy.{" "}
            <OutboundLink
              href="https://www.politifact.com/factchecks/2021/mar/30/shelley-grogan/attack-ad-overreaches-state-appeals-court-race/"
              target="_blank"
            >
              See the Politifact piece here to obtain the truth about this
              misleading ad campaign.
            </OutboundLink>
          </p>
          <h4>People Who Know the Legal System Support Davis</h4>
          <p>
            Judge Davis's endorsement list includes numerous judges, justices
            and former clerks who are very familiar with Shelley Grogan and her
            work (including Judge Kitty Brennan, for whom Ms. Grogan clerked but
            does not mention in any of her campaign materials discussing her
            prior experience). In contrast, Shelley Grogan's endorsers-who
            largely consist of politicians and strong affiliates of the
            Republican party-do not know Judge Davis, have never worked with
            him, and none have professed any knowledge or familiarity with, or
            criticism of, his work as an attorney or judge. Their endorsements
            are clearly based on political expediency rather than the
            qualifications of the candidates, a fact made all the more
            remarkable since <span ref={opinionsRef}>Judge Davis</span> has
            never belonged to a party or been actively involved in politics and
            Grogan filed an unsuccessful application with Governor Evers in
            which she apparently sought to portray herself as liberal.
          </p>
          <h4>Read Davis's Decisions Yourself</h4>
          <p>
            Judge Davis has 20 authored opinions since joining the bench, in
            addition to numerous non-authored summary disposition orders and per
            curiams, covering a wide array of issues, including insurance,
            property tax, criminal, open records, contracts, commitment issues,
            and termination of parental rights, to name just a few. Judge
            Davis's work has received widespread public praise in the form of
            endorsement quotes from his colleagues on the bench, including from
            Chief Justice Roggensack, Justice Ziegler, Judges Neubauer, Reilly
            and Fitzpatrick at the court of appeals, as well as many trial
            judges. Letters of support have been sent by judges to numerous
            local papers including from{" "}
            <OutboundLink target="_blank" href={gasLetter}>
              Racine County Judge Gene Gasiorkiewicz
            </OutboundLink>
            ,{" "}
            <OutboundLink target="_blank" href={gonringLetter}>
              Washington County Judge Andrew Gonring
            </OutboundLink>
            ,{" "}
            <OutboundLink target="_blank" href={fitzLetter}>
              Court of Appeals Judge Michael R. Fitzpatrick
            </OutboundLink>
            , and{" "}
            <OutboundLink target="_blank" href={reillyLetter}>
              Court of Appeals Judge Paul Reilly
            </OutboundLink>{" "}
            (Judge Reilly is the presiding judge of the court on which Judge
            Davis sits).
          </p>
          <p>Links to Judge Davis's authored opinions are listed below.</p>
          <ul>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=308165"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=287927"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=287941"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=273166"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=265185"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=264273"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=261924"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=261986"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=259665"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=256774"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=253396"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=319690"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=307830"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=301349"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=296051"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=287927"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=275253"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=346287"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                href="https://www.wicourts.gov/ca/opinion/DisplayDocument.pdf?content=pdf&seqNo=348669"
              >
                Link to document
              </OutboundLink>
            </li>
            <li>
              <OutboundLink target="_blank" href={clarkOpinion}>
                Link to document
              </OutboundLink>
            </li>
          </ul>
        </Blog.Text>
      </BlogLayout>
      <SignUp />
      <Footer />
    </>
  )
}

export default AboutPage
