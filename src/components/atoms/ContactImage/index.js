import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ style }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jeff-davis-contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={style}
      imgStyle={{ objectPosition: "25% 25%" }}
    />
  )
}

export default Image
