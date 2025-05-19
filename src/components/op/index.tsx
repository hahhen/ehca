"use client"

import { useContext } from "react"
import { opContext } from "../bin/page"

export default function Op(props: { op: string }) {

    const context = useContext(opContext)

    const op = props.op

    const opState = context?.opState
    const setOp = context?.setOp
    const literalOps = context?.literalOps

    return <button
        onClick={() => setOp?.(op)}
        className={`px-2 h-fit rounded duration-200 ${op != opState ? "bg-zinc-950 text-zinc-200" : "bg-zinc-200 text-zinc-950"}`}>
        {op} {literalOps?.[op as keyof typeof literalOps]}
    </button>
}