import React from 'react';
import FluidLogo from "../images/FluidImages/FluidLogo";

const Hero = () => {
  return (
    <section className="flex-row justify-center text-center bg-black py-4 xl:px-16 min-h-screen">
      <div className="w-6/6 m-auto sm:w-3/6">
        <FluidLogo/>
      </div>
    </section>
  );
};


export default Hero;