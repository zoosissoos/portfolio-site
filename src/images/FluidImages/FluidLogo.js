import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const FluidLogo = () => {
  const data = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "main-logo.png" }) {
              childImageSharp {
                  gatsbyImageData(width: 500)
              }
          }
      }
  `)
  const image = getImage(data.placeholderImage.childImageSharp)
  return <GatsbyImage image={image} alt={""}/>
}

export default FluidLogo
