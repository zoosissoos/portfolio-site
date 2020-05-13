import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FluidLogo = () => {
  const data = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "self.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 450) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return <Img className="max-w-xs rounded-md" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default FluidLogo
