import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import SectionHeading from "../headings/sectionHeading";


const Technologies = () => {
  const { allTechsJson } = useStaticQuery(graphql`
      {
          allTechsJson {
              nodes {
                  id
                  name
              }
          }
      }
  `);


  const rows = [...Array( Math.ceil(allTechsJson.nodes.length / 4) )];

  const techListRows = rows.map( (row, idx) => allTechsJson.nodes.slice(idx * 4, idx * 4 + 4));

  const content = techListRows.map((row, idx) => (
    <div className="flex text-center flex-row flex-wrap w-full" key={idx}>
      { row.map( tech => <div key={tech.id} className="flex text-xs sm:text-sm w-2/4 md:w-1/4 mb-1">{ tech.name }</div> ) }
    </div> )
  );

  return (
    <section className="flex flex-col bg-gray-300 p-8 md:p-16">
      <SectionHeading>Familiar Techs and Tooling</SectionHeading>
      { content }
    </section>
  );
};



export default Technologies;