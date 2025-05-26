"use client"

interface BitProps {
    arr: number[]
    i: number,
    isTwosComplement? : unknown
}

export default function BitResult({ arr, i, isTwosComplement }: BitProps) {    
    return (<section className="flex flex-col w-fit m-1">
        <button className={`px-2 rounded text-xl ${arr[i] == 0 ? "bg-zinc-950 text-zinc-200" : "bg-zinc-200 text-zinc-950"}`}>
            {arr[i]}
        </button>
        <span className={`text-center transition ${arr[i] == 0 ? "opacity-15" : ""}`}>
            {/* +{2**i} */}
            {((isTwosComplement && (i==arr.length-1) ? `-${2**i}` : `+${2**i}`))}
        </span>
    </section>)
}