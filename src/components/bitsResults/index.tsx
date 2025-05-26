"use client"

import {useEffect, useState } from "react";
import BitResult from "../bitResults";

export default function BitsResults(props: { n: number | string, bits: number, isTwosComplement?:unknown }) {

    const n = props.n
    const bits = props.bits

    const [arr, setArr] = useState(new Array(bits))

    useEffect(() => {


        let nBinStr = typeof n == 'number' ? (n >>> 0).toString(2) : ""


        let s = ""

        for (let i = 0; i < bits - nBinStr.length; i++) {
            s += "0"
        }

        nBinStr = s + nBinStr

        const tempArr = new Array(bits)

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