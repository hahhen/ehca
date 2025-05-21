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
        <main className="font-mono w-fit flex flex-col items-end mt-4">
            
            <div className="flex flex-row-reverse mx-2 w-fit">
                {
                    arr.map((b, i) =>
                        <BitResult key={i} arr={arr} i={i} isTwosComplement={props.isTwosComplement || false} />
                    )
                }
            </div>
            <span className=" text-2xl w-[5rem] text-right mr-5">
                {n}
            </span>

        </main>

    )
}