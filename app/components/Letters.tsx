"use client"

import { useEffect, useState } from "react"
import AnimatedLetter from "./AnimatedLetter";

interface Letter{
  left: number,
  top: number,
  letter: string,
}

type Props = {
  time: number;
  topCord: number;
  leftCord: number;
};

export default function Letters( {time, topCord, leftCord}: Props ) {
  const [letterList, setLetterList] = useState<Letter[]>([{left:0, top: 0, letter: 'm'}]);

  useEffect(  
    ()=>{
      setLetterList(filtredArray);
      if(time%1===0){
        const left = Math.floor(Math.random() * window.innerWidth) + 1;
        const letter: Letter = { left: left, top: 0, letter: "f" };
        setLetterList((prevLetterList) => [...prevLetterList, letter]);
      }
      

    },[time]
  )

  const updatedArray: Letter[] = letterList.map((element: Letter) => {
      return {left:element.left, top: element.top + 50, letter: element.letter};
    });

  const filtredArray: Letter[] = updatedArray.filter((element: Letter)=>{
      return !((element.top>=topCord && element.top<=topCord + 70)&&(element.left>=leftCord && element.left<=leftCord + 50)) && !(element.top>=topCord + 800);
    });

  return (
    <div>
      {letterList.map((item) => (        
      <AnimatedLetter key={item.left} left={item.left} top={item.top} letter={item.letter} />
      ))}
    </div>
  )
}
