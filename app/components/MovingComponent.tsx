"use client"
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const MovingComponent: React.FC = () => {
  const [position, setPosition] = useState(0);

  const springProps = useSpring({
    to: { left: position },
    config: { tension: 120, friction: 25 },
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      setPosition((prevPosition) => prevPosition + 30);
    } else if (event.key === 'ArrowLeft') {
      setPosition((prevPosition) => prevPosition - 30);
    }
  };

  return (
    <animated.div
      style={{
        position: 'absolute',
        ...springProps,
        top: 50,
        width: 50,
        height: 50,
        background: 'red',
      }}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    ></animated.div>
  );
};

export default MovingComponent;
