import React from 'react';
import Typist from "react-typist";
import FluidLogo from "../images/FluidImages/FluidLogo";


const Hero = () => {

  return (
    <section className="flex-row justify-center text-center bg-black pt-4 xl:px-16 min-h-screen">
      <div className="w-6/6 m-auto sm:w-3/6">
        <FluidLogo/>
        <Typist>
          <span className="text-2xl text-gray-600 ">React Developer</span>
          <Typist.Backspace count={15} delay={200} />
          <span className="text-2xl text-gray-600">Web Developer</span>
          <Typist.Backspace count={13} delay={200} />
          <span className="text-2xl font-bold text-brand-gold">Problem Solver.</span>
        </Typist>
      </div>
    </section>
  );
};


export default Hero;