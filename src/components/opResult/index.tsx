import BitsResults from "../bitsResults";
import { Separator } from "../ui/separator";

export default function OpResult(props : {op : string, v: number, bits : number}){

    return <div className="h-20">
        <Separator />
        <div className="flex items-center">
          <span>
          {props.op}
          </span>
          <BitsResults n={props.v} bits={props.bits} />
        </div>
      </div>
}