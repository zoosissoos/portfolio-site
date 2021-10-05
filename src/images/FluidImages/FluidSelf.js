import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const FluidLogo = () => {
  const data = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "self.jpg" }) {
              childImageSharp {
                  gatsbyImageData(width: 450)
              }
          }
      }
  `)
  const image = getImage(data.placeholderImage.childImageSharp)
  return <GatsbyImage className="max-w-xs rounded-md" image={image} alt={"Daniel Lewis"}/>
}

export default FluidLogo
