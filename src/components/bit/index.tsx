"use client"

import { Separator } from "@radix-ui/react-separator";

interface BitProps {
    arr: number[]
    i: number
    set(arr:number[]):void
}

export default function Bit({ arr, i, set }: BitProps) {

    function handleToggleBit(arr: number[], i: number) {
        const tempArr = [...arr]
        const tempE = arr[i]
        tempArr[i] = tempE == 0 ? 1 : 0
        set(tempArr)
    }

    return (<section className="flex flex-col w-fit m-1">
        <button className={`px-2 rounded ${arr[i] == 0 ? "bg-zinc-950 text-zinc-200" : "bg-zinc-200 text-zinc-950"}`} onClick={() => { handleToggleBit(arr, i) }}>
            {arr[i]}
        </button>
        <Separator />
        <span className={`text-center transition ${arr[i] == 0 ? "opacity-15" : ""}`}>
            +{2 ** i}
        </span>
    </section>)
}