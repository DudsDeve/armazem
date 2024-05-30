import { Button } from "antd";
import styled, { css } from "styled-components";


type Props = {
   width:boolean
   $backgroundColor: string
   $color: string 
   $hover: string
   }
    
export const NewButton = styled(Button)<Props>`


${({  width, $backgroundColor, $color, $hover}) => css`
    width: ${width ? '100%' : ''};
    background-color: ${$backgroundColor};
    color: ${$color};
    &:hover {
    background-color: ${$hover};}
    `}
    
  
   

   
`