import { Input } from "antd";
import styled, { css } from "styled-components";

type InputProps = { 
    $whidth:string
  

}

export const NewInput = styled(Input)<InputProps>`

${({ $width  }) => css`
    width: ${$width},
   
    
  `}
 
`