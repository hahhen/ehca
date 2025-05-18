"use client"

import { useContext, useEffect, useState } from "react";
import Bit from "../bit";
import { bitsContext } from "../bin/page";

export default function FourBits(props : {v : string}) {
  const context = useContext(bitsContext)

  const a = context?.a

  const b = context?.b

  const [n, setN] = useState([0,0,0,0])

  useEffect(() => {
    let tempN = 0

    for (let i = n.length - 1; i >= 0; i--) {
      tempN += n[i] * 2 ** i
    }

    if (props.v === "a") {
      context?.setA?.(tempN);
    } else {
      context?.setB?.(tempN);
    }

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