"use client"

import { useSpring, animated } from "react-spring";

type LetterProps = {
  left: number;
  top: number;
  letter: string;
};

const AnimatedLetter: React.FC<LetterProps> = ({ left, top, letter }) => {
  const spring = useSpring({
    to: { top: top },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        position: "absolute",
        top: spring.top,
        left: left,
      }}
    >
      <p>{letter}</p>
    </animated.div>
  );
};

export default AnimatedLetter;