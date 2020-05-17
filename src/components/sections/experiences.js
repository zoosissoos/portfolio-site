import React from 'react';
import { graphql, useStaticQuery } from "gatsby";




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
              }
          }
      }
  `);

  return (
    <section className="flex flex-col bg-gray-500 p-8 md:p-16">
      <h1 className="mb-2">Recent Experiences</h1>
      <div className="container flex flex-row justify-between">
        {
          allExperienceJson.nodes.map(({name, id, description, background}, index) => {
            return (
              <div className="flex flex-col" key={`${index}-${id}`}>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <h4>{background}</h4>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};


export default Experiences;