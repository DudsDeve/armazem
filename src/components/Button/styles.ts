import { Button } from 'antd'
import styled, { css } from 'styled-components'

type Props = {
  $width: string
  $backgroundColor: string
  $color: string
  $hover: string
}

export const NewButton = styled(Button)<Props>`
  ${({ $width, $backgroundColor, $color, $hover }) => css`
    width: ${$width};
    background-color: ${$backgroundColor};
    color: ${$color};
    &:hover {
      background-color: ${$hover};
    }
  `}
`
