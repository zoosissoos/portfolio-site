import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
                        rounded
                        src {
                            childImageSharp {
                              gatsbyImageData(layout: FIXED width: 100 height: 100)
                            }
                        }
                    }
                }
          }
      }
  `);

  return (
    <section className="flex flex-col bg-gray-500 p-8 md:p-16">
      <SectionHeading>Professional Experience</SectionHeading>
      <div className="sm:container flex flex-col">
        {
          allExperienceJson.nodes.map(({name, id, link, description, background, img}, index) => {
            const image = getImage(img.src.childImageSharp)
            return (
              <div className="flex w-full sm:flex-row flex-col border-solid border-4 border-gray-600 bg-gray-300 rounded-md p-4 shadow-lg mb-3" key={`${index}-${id}`}>
                <div className="flex w-full mb-3 sm:w-1/4 sm:mb-0 justify-center content-center">
                  <a
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex justify-center align-center"
                  >
                    <GatsbyImage
                      className={`w-full h-full ${img.rounded && "rounded-full"}`}
                      image={image}
                      alt={img.alt}
                    />
                  </a>
                </div>
                <div className="flex w-full mb-3 sm:w-2/4 sm:mb-0 justify-center content-center flex-col">
                  <h2 className="text-bold">{name}</h2>
                  <h3 className="text-sm">{description}</h3>
                </div>
                <div className="flex w-full sm:w-1/4 justify-center content-center flex-col">
                  <h4 className="text-sm">{background}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};


export default Experiences;