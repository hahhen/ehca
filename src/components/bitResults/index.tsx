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

interface BitProps {
    arr: number[]
    i: number,
    isTwosComplement? : any
}

export default function BitResult({ arr, i, isTwosComplement }: BitProps) {

    console.log(`${isTwosComplement} - ${i == 0} : ${(isTwosComplement && (i==0)) ? arr : ''}`);
    

    return (<section className="flex flex-col w-fit m-1">
        <button className={`px-2 rounded ${arr[i] == 0 ? "bg-zinc-950 text-zinc-200" : "bg-zinc-200 text-zinc-950"}`}>
            {arr[i]}
        </button>
        <Separator />
        <span className={`text-center transition ${arr[i] == 0 ? "opacity-15" : ""}`}>
            {/* +{2**i} */}
            {((isTwosComplement && (i==arr.length-1) ? `-${2**i}` : `+${2**i}`))}
        </span>
    </section>)
}