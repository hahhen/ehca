"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import React, { createContext, useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import Bit from "@/components/fourBits";
import { Separator } from "../ui/separator";
import FourBits from "@/components/fourBits";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import Op from "../op";
import FourBitsResult from "../bitsResults";
import BitsResults from "../bitsResults";
import OpResult from "../opResult";

export const bitsContext = createContext<{ a: number, setA: any, b: number, setB: any } | null>(null)

export const opContext = createContext<{ opState: string, setOp: any, ops: string[], literalOps: object } | null>(null)

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
      quotient: (b != 0 ? Math.floor(a / b) : "Indefinido"),
      remainder: (b != 0 ? a % b : "Indefinido")
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
      <OpResult op="Subtração" v={results.sub} bits={4}/>
      <OpResult op="Multiplicação" v={results.mult} bits={8}/>
      <OpResult op="Quociente" v={results.quotient} bits={4}/>
      <OpResult op="Resto" v={results.remainder} bits={4}/>
      

    </main>



  );
}
