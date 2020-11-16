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
      subtitle="Honor. Independence. Respect."
      title="My Judicial Philosophy"
      withImage
    />
    <BlogLayout>
      <Blog.Image isHeader>
        <MastheadImage style={{ maxHeight: "475px" }} />
      </Blog.Image>
      <Blog.Text>
        <p>
          It has been an <strong>incredible honor</strong> to serve as one of
          the four judges in the District II Court of Appeals. In seeking to
          retain this position, I want to reiterate the commitments I made to
          the citizens of the District and the State of Wisconsin upon my formal
          investiture.
        </p>
        <p>
          My first commitment is <strong>independence</strong>. A judge's role
          is to apply the law fairly and impartially. That means we must apply
          the law the same regardless of who the parties are, or the lawyers, or
          our own personal biases or what we did in private practice. To quote
          Chief Justice Roberts, there are no "Obamas judges or Trump judges,
          Bush Judges or Clinton judges". Rather, "what we have is an
          extraordinary group of dedicated judges doing their level best to do
          equal right to those appearing before them." You hear judges say how
          important this is all the time. I think we need to keep saying it.
          Simply put, independence is the bedrock of our legal system; without
          it, our system fails. The judicial branch is not a partisan branch of
          government. To the contrary it is a firewall against the political and
          societal pressures that often drive the decision-making of the other
          branches. I will always continue to do my part to keep it that way.
        </p>
        <p>
          Second, I committed to a <strong>strong work ethic</strong>. I can say
          without any hesitation that this is a big part of the job description.
          Doing the job right means making sure each case receives a thorough
          analysis and diligent review of the record and the law to ensure that
          the result we reach is sound and well reasoned. While this is hard
          work, I count myself among those who genuinely enjoy the challenges it
          presents. It is a passion and it is a passion I commit to bring to my
          work each and every day.
        </p>
        <p>
          Third, I committed to showing <strong>humility and respect</strong>{" "}
          for those who come before the court as well as for the trial courts
          whose decisions we review. I strive to listen to the parties and their
          arguments and appreciate the fact that the parties know their cases
          better than anyone else, As for the decisions we review, I fully
          understand and appreciate the role of the trial judge and the jury,
          and their superior role in making factual findings, while also
          understanding the important role our court plays in correcting any
          legal error made in connection with these findings. In that regard, I
          have been enormously impressed with the level of quality found in the
          trial courts of this district. Can they make mistakes? Of course--that
          is inevitable where dozens of decisions are being made in a single
          day, and that is why appellate courts exist. We too can get it wrong,
          or apply law that is in need of change, and if and when that happens,
          our supreme court will let us know. It is all part of an ecosystem
          designed to achieve justice in the best way our society knows how. I
          am humbled to play a small role in that ecosystem.
        </p>
      </Blog.Text>
      <Blog.Image>
        <MastheadImage style={{ maxHeight: "475px" }} />
      </Blog.Image>
      <Blog.Text>
        <p>
          Fourth, and finally, I committed to bringing a{" "}
          <strong>real world perspective</strong> to this position because for
          the last thirty two years, I have spent my career in, well, the real
          world. While I am a bit of what some might call a "law geek"
          (seriously, I could spend all day talking about the Economic Loss
          Doctrine) I am also someone who was in the trenches, practicing law
          for 32 years. I've been in boardrooms and general counsel's offices
          helping solve complex legal issues with enormous stakes. I've also met
          with clients in prisons and sat across from clients and parties at pro
          bono legal clinics and mediations helping them deal with problems
          where the issues can be just as complex, and the stakes, at least for
          them, every bit as high. I've tried cases and handled appeals
          throughout Wisconsin and the country, experiencing first hand what
          clients and lawyers expect of the judges hearing their cases.
        </p>
        <p>
          I've not left those experiences behind. While alot of what we do is
          necessarily technical, requiring the parsing of words contained in
          detailed contracts, statutes and decades of legal precedent, I think
          its important that we be practical too. The officer on the street who
          makes a 3 a.m. stop does not have time to try to decipher what factors
          give rise to reasonable suspicion or probable cause. He or she simply
          needs to know when it is and when it is not, permissible to pull over
          a vehicle, or order a blood test without a warrant, or what needs to
          be said to a just awakened judge in order to obtain a warrant, and
          needs to know this in as clear terms as possible. I certainly know
          from my own experiences that businesses need rules that, in a fast
          paced, dynamic world, are easy to apply, while incentivizing honesty,
          prudence and fair dealing. So what does this mean for a judge
          interested in doing justice in a well developed, if not entirely
          perfect, legal system like ours? I think it means that my opinons need
          to convey the rules that govern these situations as clearly as
          possible. We need to be "user friendly" and understand that our
          audience is not necessarily limited to lawyers and other judges.
        </p>
        <p>
          Frankly, it also means that reaching a decision on how to apply the
          law is not always easy. <strong>A judge is not a bureaucrat.</strong>
          Applying the rule of law requires a judge to be faithful to the law
          whether the judge agrees with it or not. It requires intellectual
          honesty, both to the law and the factual record before us. It requires
          thoughtful and thorough analysis and that one be cognizant of public
          policy and long term practical consequences for the people who will be
          affected by our decisions.
        </p>
        <p>
          <strong>
            My commitment to the citizens of the 12 counties of this District is
            to continue to follow these principles and ideals to the very best
            of ability.
          </strong>
        </p>
      </Blog.Text>
    </BlogLayout>
    <SignUp />
    <Footer />
  </>
)

export default JudicialPhilosophyPage
