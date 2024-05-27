import React, { ReactNode } from "react"
import { NewInput } from "./styles"


interface InputProps {
    suffix?:ReactNode,
    maxLength?: number, 
    variant?:string, //outlined | borderless | filled
    disabled?: boolean,
    id?: string,
  
    $whidth?:string, //%
    mask?:string,
    placeholder?:string

}
export function Inputt ({
        suffix,
        maxLength = 0,
        variant,
        disabled,
        id,
        
        $whidth ,
       
        mask,
        placeholder, 
        }:InputProps
) {

    return <> 
    
<NewInput suffix={suffix} maxLength={maxLength} variant={variant} disabled={disabled} id={id}  $width={$whidth} 
 mask={mask} placeholder={placeholder}  />
 
 </>
}