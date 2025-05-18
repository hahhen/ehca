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

import { useContext, useEffect, useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import { Toggle } from "@/components/ui/toggle";
import Bit from "../bit";
import { bitsContext } from "../bin/page";

export default function FourBits(props : {v : string}) {
  const context = useContext(bitsContext)

  const a = context?.a
  const setA = context?.setA

  const b = context?.b
  const setB = context?.setB

  const [n, setN] = useState([0,0,0,0])

  useEffect(() => {
    let tempN = 0

    for (let i = n.length - 1; i >= 0; i--) {
      tempN += n[i] * 2 ** i
    }

    props.v == "a"? setA(tempN) : setB(tempN)

  }, [n])

  

  return (
    <main className="font-mono w-fit m-auto flex flex-col mx-7">
      <div className="flex flex-row-reverse">
        {
          n.map((b, i) =>
            <Bit key={i} arr={n} i={i} set={setN} />
          )
        }
      </div>
      <span className="m-auto">
        {props.v == "a"? a : b}
      </span>
    </main>

  )
}