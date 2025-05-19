import BitsResults from "../bitsResults";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function OpResult(props: { op: string, v: number, bits: number, isTwosComplement?: any }) {

    return <div className="h-20">
        <Separator />
        <div className="flex items-center">
            <span className="w-20">

                {
                    props.isTwosComplement ?
                        <Dialog>
                            <DialogTrigger className="underline">{props.op}</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>📘 O que é o complemento de 2?</DialogTitle>
                                    <DialogDescription>
                                        <p className="mb-4">
                                            É uma forma que os computadores usam para representar <strong>números negativos</strong> e realizar <strong>subtrações apenas com somas</strong>.
                                        </p>

                                        <h3 className="text-lg font-semibold mb-2">🔢 Como funciona?</h3>
                                        <p className="mb-4">
                                            Para subtrair um número binário de outro (por exemplo, <code>A - B</code>), o computador transforma o número <code>B</code> em seu <strong>complemento de 2</strong>, e depois <strong>soma com A</strong>.
                                        </p>

                                        <h3 className="text-lg font-semibold mb-2">🧮 Passos para calcular o complemento de 2:</h3>
                                        <ol className="list-decimal list-inside mb-4 space-y-1">
                                            <li>Inverta todos os bits (0 vira 1 e 1 vira 0) – isso é o <strong>complemento de 1</strong>.</li>
                                            <li>Some 1 ao resultado.</li>
                                        </ol>

                                        <h3 className="text-lg font-semibold mb-2">✔️ Exemplo:</h3>
                                        <p className="mb-2">Para subtrair <code>5 (0101)</code> de <code>13 (1101)</code>:</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Inverta <code>0101</code> → <code>1010</code></li>
                                            <li>Some 1 → <code>1011</code> (esse é o complemento de 2 de 5)</li>
                                            <li>Agora some com <code>1101</code> (13): <code>1101 + 1011 = 11000</code></li>
                                            <li>O resultado correto está nos últimos 4 bits: <code>1000</code>, que é <strong>8</strong>!</li>
                                        </ul>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        // <Popover>
                        //     <PopoverTrigger className="underline">{props.op}</PopoverTrigger>
                        //     <PopoverContent>
                        //             <h2 className="text-2xl font-bold mb-4">📘 O que é o complemento de 2?</h2>
                        //             <p className="mb-4">
                        //                 É uma forma que os computadores usam para representar <strong>números negativos</strong> e realizar <strong>subtrações apenas com somas</strong>.
                        //             </p>

                        //             <h3 className="text-xl font-semibold mb-2">🔢 Como funciona?</h3>
                        //             <p className="mb-4">
                        //                 Para subtrair um número binário de outro (por exemplo, <code>A - B</code>), o computador transforma o número <code>B</code> em seu <strong>complemento de 2</strong>, e depois <strong>soma com A</strong>.
                        //             </p>

                        //             <h3 className="text-xl font-semibold mb-2">🧮 Passos para calcular o complemento de 2:</h3>
                        //             <ol className="list-decimal list-inside mb-4 space-y-1">
                        //                 <li>Inverta todos os bits (0 vira 1 e 1 vira 0) – isso é o <strong>complemento de 1</strong>.</li>
                        //                 <li>Some 1 ao resultado.</li>
                        //             </ol>

                        //             <h3 className="text-xl font-semibold mb-2">✔️ Exemplo:</h3>
                        //             <p className="mb-2">Para subtrair <code>5 (0101)</code> de <code>13 (1101)</code>:</p>
                        //             <ul className="list-disc list-inside space-y-1">
                        //                 <li>Inverta <code>0101</code> → <code>1010</code></li>
                        //                 <li>Some 1 → <code>1011</code> (esse é o complemento de 2 de 5)</li>
                        //                 <li>Agora some com <code>1101</code> (13): <code>1101 + 1011 = 11000</code></li>
                        //                 <li>O resultado correto está nos últimos 4 bits: <code>1000</code>, que é <strong>8</strong>!</li>
                        //             </ul>
                        //     </PopoverContent>
                        // </Popover> 

                        : `${props.op}`
                }





            </span>
            <BitsResults n={props.v} bits={props.bits} isTwosComplement={props.isTwosComplement || false} />
        </div>
    </div>
}