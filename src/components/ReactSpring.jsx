// src/ReactSpring.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const ReactSpring = () => {
  // Hook useSpring untuk membuat animasi
  const props = useSpring({
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(100px)' },
    config: { tension: 200, friction: 15 }, // Mengatur kecepatannya
  });

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">React Spring Animation</h2>
      <animated.div style={props} className="bg-gray-100 p-4 rounded-md shadow-md">
        <h3 className="text-xl text-center text-gray-700">This is an animated component</h3>
      </animated.div>
    </div>
  );
};

export default ReactSpring;
