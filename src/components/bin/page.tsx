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
import { Separator } from "@radix-ui/react-separator";
import { Toggle } from "@/components/ui/toggle";
import Bit from "@/components/fourBits";
import FourBits from "@/components/fourBits";

export const bitsContext = createContext<{a:number, setA:any, b:number, setB:any} | null>(null)

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
