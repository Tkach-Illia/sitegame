"use client"

import { useEffect, useState } from "react"

interface Letter{
  left: number,
  top: number,
  letter: string,
}

type Props = {
  time: number;
};

export default function Letters( {time}: Props ) {
  const [letterList, setLetterList] = useState<Letter[]>([{left:0, top: 0, letter: 'm'}]);

  useEffect(  
    ()=>{
      if(time%10===0){
        const left = Math.floor(Math.random() * window.innerWidth) + 1;
        const letter: Letter = { left: left, top: 0, letter: "f" };
        setLetterList((prevLetterList) => [...prevLetterList, letter]);
      }


    },[time]
  )

  return (
    <div>
      {letterList.map((item) => (
        <div 
          key={item.left} 
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
          }}
        >
          <p>{item.letter}</p>
        </div>
      ))}
    </div>
  )
}
