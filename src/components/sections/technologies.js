import React from 'react';


const Technologies = () => {


  const techList = [
    "Javascript",
    "React",
    "Redux",
    "Redux Saga",
    "MongoDB",
    "Gatsby",
    "GraphQL",
    "Node",
    "Express",
    "Git",
    "Github",
    "Bitbucket",
    "AWS CloudFront",
    "AWS Amplify",
    "AWS Lambda",
    "AWS CloudFormation",
    "AWS S3",
    "AWS EC2",
    "AWS CloudWatch",
    "Bootstrap",
    "Tailwind"
  ]

  const rows = [...Array( Math.ceil(techList.length / 4) )];

  const techListRows = rows.map( (row, idx) => techList.slice(idx * 4, idx * 4 + 4));

  const content = techListRows.map((row, idx) => (
    <div className="flex text-center flex-row flex-wrap w-full" key={idx}>
      { row.map( tech => <div key={tech} className="flex text-xs sm:text-sm w-2/4 md:w-1/4">{ tech }</div> ) }
    </div> )
  );

  return (
    <section className="flex flex-col bg-gray-300 p-8 md:p-16">
      <h1 className="mb-2">Familiar Techs and Tooling: </h1>
      { content }
    </section>
  );
};



export default Technologies;