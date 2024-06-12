import { Button } from 'antd'
import styled, { css } from 'styled-components'

type Props = {
  $width: string
  $backgroundColor: string
  $color: string
  $hover: string
  $hoverText: string
}

export const NewButton = styled(Button)<Props>`
  ${({ $width, $backgroundColor, $color, $hover, $hoverText }) => css`
    width: ${$width};
    background-color: ${$backgroundColor};
    color: ${$color};
    &:hover {
      background-color: ${$hover};
      color: ${$hoverText};
    }
  `}
`
