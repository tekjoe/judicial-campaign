import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ style }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "get_involved.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, maxHeight: 900) {
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
    <Img fluid={data.placeholderImage.childImageSharp.fluid} style={style} />
  )
}

export default Image
