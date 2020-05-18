import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({children}) => {

  return (
    <>
      <h1 className="mb-1 text-lg lg:text-2xl">{children}</h1>
      <hr className="mb-4 border-none h-1 bg-grey-600 w-16"/>
    </>
  )
};

SectionHeading.propTypes = {
  children: PropTypes.string.isRequired
};

export default SectionHeading;