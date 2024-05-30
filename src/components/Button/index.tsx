import React, { ReactNode } from "react";
import { NewButton } from "./styles";
import { ConfigProvider } from "antd";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    widthSize?: string
    backgroundColor?: string
    color?:string
    hover?:string
    
    ghost?: boolean
    danger?: boolean 
   disabled?:boolean
   icon?: ReactNode
   iconPosition?: 'star' | 'end'
   loading?:boolean 


}
export function Button({children, ghost = false,widthSize, danger,disabled,icon,iconPosition,loading, backgroundColor, color,hover} : Props) { 
    return <> 
    <ConfigProvider 
     theme={{
        components: {
            Button: {
                defaultHoverBg: `{${hover}}`,
                defaultHoverBorderColor: undefined,
                defaultHoverColor: 'white'

            },
        },
      }}>
    <NewButton  $widthSize={widthSize} ghost={ghost}  danger={danger} disabled={disabled} icon={icon} iconPosition={iconPosition} loading={loading} $backgroundColor={backgroundColor} 
    $color={color} $hover={hover}>{children}</NewButton>
    </ConfigProvider>
    </>
}