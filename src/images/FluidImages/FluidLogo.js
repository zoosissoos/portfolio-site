import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FluidLogo = () => {
  const data = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "main-logo.png" }) {
              childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
}

export default FluidLogo
