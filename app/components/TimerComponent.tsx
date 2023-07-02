import React, { useState, useEffect } from 'react';

type TimerComponentProps = {
  onTick: (seconds: number) => void;
};

const TimerComponent: React.FC<TimerComponentProps> = ({ onTick }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedSeconds = seconds + 1;
      setSeconds(updatedSeconds);
      onTick(updatedSeconds);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [onTick, seconds]);

  return null;
};

export default TimerComponent;
