import React, { ReactNode } from 'react'
import { NewButton } from './styles'
import { ConfigProvider } from 'antd'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  width?: string
  backgroundColor?: string
  color?: string
  hover?: string
  hoverText?: string

  ghost?: boolean
  danger?: boolean
  disabled?: boolean
  icon?: ReactNode
  iconPosition?: 'star' | 'end'
  loading?: boolean
}
// pegar todas as outras props
export function Buttons({
  children,
  ghost = false,
  width,
  danger,
  disabled,
  icon,
  iconPosition,
  loading,
  backgroundColor,
  color,
  hover,
  hoverText,
  type,
}: Props) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBg: `{${hover}}`,
            defaultHoverBorderColor: undefined,
            defaultHoverColor: `{${hoverText}}`,
          },
        },
      }}
    >
      <NewButton
        $width={width}
        ghost={ghost}
        danger={danger}
        disabled={disabled}
        icon={icon}
        iconPosition={iconPosition}
        loading={loading}
        $backgroundColor={backgroundColor}
        $color={color}
        $hover={hover}
        $hoverText={hoverText}
        type={type}
      >
        {children}
      </NewButton>
    </ConfigProvider>
  )
}
