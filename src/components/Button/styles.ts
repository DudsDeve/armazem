import { Button } from "antd";
import styled, { css } from "styled-components";


type Props = {
   $widthSize:string
   $backgroundColor: string
   $color: string 
   $hover: string
   }
    
export const NewButton = styled(Button)<Props>`


${({  $widthSize, $backgroundColor, $color, $hover}) => css`
    width: ${$widthSize};
    background-color: ${$backgroundColor};
    color: ${$color};
    &:hover {
    background-color: ${$hover};}
    `}
    
  
   

   
`