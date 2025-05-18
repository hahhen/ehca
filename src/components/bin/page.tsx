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

export const bitsContext = createContext<{ a: number, setA: any, b: number, setB: any } | null>(null)

export const opContext = createContext<{ opState: string, setOp: any, ops: string[], literalOps: object } | null>(null)

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
            {ops.map(e => <Op op={e} />)}
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
