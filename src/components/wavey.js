import React from 'react';
import PropTypes from 'prop-types';

const Wavey = props => {
  return (
    <Wave fill="url(#gradient1)"
          paused={isTyping}
          options={{
            height: 20,
            amplitude: 25,
            speed: 0.15,
            points: 3
          }}
    >
      <defs>
        <linearGradient spreadMethod="pad" id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="20%"  stopColor="#696969" />
          <stop offset="40%"  stopColor="#7D7D7D" />
          <stop offset="60%"  stopColor="#9E9E9E" />
          <stop offset="80%"  stopColor="#BDBDBD" />
          <stop offset="90%"  stopColor="#D3D3D3" />
        </linearGradient>
      </defs>
    </Wave>
  );
};

export default Wavey;