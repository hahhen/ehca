"use client"

import { createContext, useState, Dispatch, SetStateAction } from "react";
import FourBits from "@/components/fourBits";
import Op from "@/components/op";
import { Separator } from "@/components/ui/separator";

export const bitsContext = createContext<{a:number, setA:Dispatch<SetStateAction<number>>, b:number, setB:Dispatch<SetStateAction<number>>} | null>(null)
export const opContext = createContext<{ opState: string, setOp: Dispatch<SetStateAction<string>>, ops: string[], literalOps: {"+":string, "-":string, "*":string, "/":string} } | null>(null)

export default function Bin() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const [opState, setOp] = useState("+")
  const ops = ["+", "-", "*", "/"]
  const literalOps = {
    "+": "Adição",
    "-": "Subtração",
    "*": "Multiplicação",
    "/": "Divisão"
  }

  //{ n: n, setN: setN, m: m, setM: setM }
  const bitsStates = { a: a, setA: setA, b: b, setB: setB }
  const opStates = { opState: opState, setOp: setOp, ops: ops, literalOps: literalOps }

  // useEffect(() => {
  //   console.log(a);
  //   console.log(b);
  // }, [a, b])

  return (

    <main className="font-mono w-fit m-auto flex items-end">
      <bitsContext.Provider value={bitsStates}>
        <FourBits v={"a"} />
        <opContext.Provider value={opStates}>
          <section className="flex flex-col gap-2 font-mono">
            {ops.map((e,i) => <Op key={i} op={e} />)}
            <span className="m-auto mt-4 text-3xl">
              {opState}
            </span>
          </section>
        </opContext.Provider>
        <FourBits v={"b"} />
      </bitsContext.Provider>
      <Separator orientation="vertical" className="min-h-full"/>
      {Math.floor(eval(a.toString() + opState + b.toString()))}
      {(Math.floor(eval(a.toString() + opState + b.toString())) != eval(a.toString() + opState + b.toString()) && b != 0) ? "r" : ""}
    </main>



  );
}
