import React from 'react';
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeading from "../headings/sectionHeading";




const Experiences = () => {

  const { allExperienceJson } = useStaticQuery(graphql`
      {
        allExperienceJson {
                nodes {
                    background
                    description
                    id
                    link
                    name
                    img {
                        alt
                        src {
                            childImageSharp {
                                fixed(width: 20, height: 20) {
                                    ...GatsbyImageSharpFixed_withWebp
                                }
                            }
                        }
                    }
                }
          }
      }
  `);
  console.log(allExperienceJson)

  return (
    <section className="flex flex-col bg-gray-500 p-8 md:p-16">
      <SectionHeading>Professional Experience</SectionHeading>
      <div className="container flex flex-col">
        {
          allExperienceJson.nodes.map(({name, id, description, background, img}, index) => {
            return (
              <div className="flex w-full flex-row border-solid border-4 border-gray-600 bg-gray-300 rounded-md p-8 shadow-lg mb-3" key={`${index}-${id}`}>
                <div className="flex w-2/4 flex-col">
                  <GatsbyImage
                    className="w-5 h-5 mr-5"
                    {...img.src.childImageSharp}
                    alt={img.alt}
                  />
                  <h2 className="text-bold">{name}</h2>
                  <h3 className="text-sm">{description}</h3>
                </div>


                <h4 className="text-sm">{background}</h4>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};


export default Experiences;