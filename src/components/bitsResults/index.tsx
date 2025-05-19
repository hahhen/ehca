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
import { resultsContext } from "../bin/page";
import BitResult from "../bitResults";

export default function BitsResults(props: { n: number, bits: number, isTwosComplement?:any }) {

    const n = props.n
    const bits = props.bits

    const [arr, setArr] = useState(new Array(bits))

    useEffect(() => {


        let nBinStr = (n >>> 0).toString(2)


        let s = ""

        for (let i = 0; i < bits - nBinStr.length; i++) {
            s += "0"
        }

        nBinStr = s + nBinStr

        let tempArr = new Array(bits)

        for(let i = 0; i < bits; i++){
             tempArr[i] = nBinStr.charAt(nBinStr.length-i-1);
            
        }
        
        setArr(tempArr)

    }, [n])

    

    return (
        <main className="font-mono w-fit m-auto flex flex-row mx-7 mt-5">
            
            <div className="flex flex-row-reverse mx-2 w-[20rem]">
                {
                    arr.map((b, i) =>
                        <BitResult key={i} arr={arr} i={i} isTwosComplement={props.isTwosComplement || false} />
                    )
                }
            </div>
            <span className="mt-2 text-2xl ml-2 w-[5rem] text-right">
                {n}
            </span>

        </main>

    )
}