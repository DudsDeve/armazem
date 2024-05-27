import React, { ReactNode } from "react";
import { NewDivider } from "./styles";
interface DividerProps {
orientation?: string //left | right | center
children: ReactNode
}
export function Divider ({orientation, children} : DividerProps) {
    return 
    <>
    <NewDivider orientation={orientation}/> {children}</NewDivider>
   </>
    
}