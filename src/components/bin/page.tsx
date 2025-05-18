"use client"

import { createContext, useEffect, useState, Dispatch, SetStateAction } from "react";
import FourBits from "@/components/fourBits";

export const bitsContext = createContext<{a:number, setA:Dispatch<SetStateAction<number>>, b:number, setB:Dispatch<SetStateAction<number>>} | null>(null)

export default function Bin() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  //{ n: n, setN: setN, m: m, setM: setM }
  const bitsStates = {a: a, setA: setA, b: b, setB: setB}

  useEffect(() => {
    console.log(a);
    console.log(b);
    
    
  }, [a,b])

  return (
    <bitsContext.Provider value={bitsStates}>
      <main className="font-mono w-fit m-auto flex">
        <FourBits v={"a"}/>
        <FourBits v={"b"}/>
      </main>
    </bitsContext.Provider>


  );
}
