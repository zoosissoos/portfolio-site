import React from 'react';
import PropTypes from 'prop-types';
import FluidLogo from "../images/FluidImages/FluidLogo";

const Hero = () => {
  return (
    <section className="text-center">
      <FluidLogo />
      <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
        Hey there! Welcome to your first Gatsby site.
      </h2>
    </section>
  );
};


export default Hero;