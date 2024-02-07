import { HTMLProps } from "react";

const CustomLabel=({styleLabel,required,inputLabel}:ICustomLabelProps):ReturnType<React.FC>=>{
    return  <label className={`text-placeholder ${styleLabel} block `}>{inputLabel}{required?'*':''}</label>
    
}
type ICustomLabelProps={
    styleLabel?:HTMLProps<HTMLElement>["className"]
    required?:boolean
    inputLabel:string
}
export default CustomLabel;