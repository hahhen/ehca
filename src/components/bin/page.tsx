"use client"

import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import FourBits from "@/components/fourBits";
import Op from "@/components/op";
import { Separator } from "@/components/ui/separator";
import OpResult from "../opResult";

export const bitsContext = createContext<{a:number, setA:Dispatch<SetStateAction<number>>, b:number, setB:Dispatch<SetStateAction<number>>} | null>(null)
export const opContext = createContext<{ opState: string, setOp: Dispatch<SetStateAction<string>>, ops: string[], literalOps: {"+":string, "-":string, "*":string, "/":string} } | null>(null)

export const resultsContext = createContext<{ sum: number, sub: number, mult: number, quotient: number, remainder: number } | null>(null)

export default function Bin() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const [results, setResults] = useState({
    sum: 0,
    sub: 0,
    mult: 0,
    quotient: 0,
    remainder: 0
  })

  const [binResults, setBinResults] = useState({
    sum: [0, 0, 0, 0, 0],
    sub: [0, 0, 0, 0],
    mult: [0, 0, 0, 0, 0, 0, 0, 0],
    quotient: [0, 0, 0, 0],
    remainder: [0, 0, 0, 0]
  })

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
  const resultStates = { sum: results.sub, sub: results.sub, mult: results.mult, quotient: results.quotient, remainder: results.remainder }

  useEffect(() => {
    setResults({
      sum: a + b,
      sub: a - b,
      mult: a * b,
      quotient: (b != 0 ? Math.floor(a / b) : "Indef."),
      remainder: (b != 0 ? a % b : "Indef.")
    })
  }, [a, b])

  return (

    <main className="font-mono w-fit m-auto flex flex-col mt-20">
      <section className="flex mb-5">
        <bitsContext.Provider value={bitsStates}>
          <FourBits v={"a"} />
          {/* <opContext.Provider value={opStates}>
            <section className="flex flex-col gap-2 font-mono">
              {ops.map((e, i) => <Op op={e} key={i} />)}
              <span className="m-auto mt-4 text-3xl">
                {opState}
              </span>
            </section>
          </opContext.Provider> */}
          <FourBits v={"b"} />
        </bitsContext.Provider>
      </section>
      {/* <div className="h-20">
        <Separator />
        <div className="flex items-center">
          <span>
          Adição
          </span>
          <BitsResults n={results.sum} bits={5} />
        </div>
      </div> */}

      <OpResult op="Adição" v={results.sum} bits={5}/>
      <OpResult op="Subtração" v={results.sub} bits={5} isTwosComplement={true}/>
      <OpResult op="Multiplicação" v={results.mult} bits={8}/>
      <OpResult op="Quociente" v={results.quotient} bits={4}/>
      <OpResult op="Resto" v={results.remainder} bits={4}/>
      <span className="opacity-25">
        Indef. significa "indefinido" (divisão por zero)
      </span>
      

    </main>



  );
}
