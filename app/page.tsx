"use client"
import { useEffect, useState } from "react";
import Letters from "./components/Letters";
import MovingComponent from "./components/MovingComponent";

export default function Home() {

  const [time, setTime] = useState(0);
  const [leftCord, setLeftCord] = useState(0);
  const topCord = window.innerHeight / 3 * 2 ;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevprevTime) => prevprevTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <div>
      <Letters time={time} topCord={topCord} leftCord={leftCord}/>
      <MovingComponent topCord={topCord} setLeftCord={setLeftCord}/>
    </div>
  )
}
