import React from 'react';
import FluidSelf from '../../images/FluidImages/FluidSelf'


const About = () => {
  return (
    <section className="flex flex-col md:flex-row bg-gray-300 p-8 md:p-16">
        <div className="flex flex-col w-2/6 m-auto">
          <FluidSelf />
        </div>
        <div className="flex flex-col w-full md:w-4/6 p-4">
          <h1 className="mb-3 text-lg lg:text-2xl">The person behind the&nbsp;IDE</h1>
          <p className="mb-2">Began tinkering at a young age trying to escape the confines of a&nbsp;crib.</p>
          <p className="mb-2">Now finds himself working on responsive web apps and marketing&nbsp;sites.</p>
          <p>In his free time always trying to learn more about mountain bikes, DIY electronics and a new beer to&nbsp;brew.</p>
        </div>
    </section>
  );
};


export default About;