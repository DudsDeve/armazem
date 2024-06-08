import { Input } from 'antd'
import styled, { css } from 'styled-components'

type InputProps = {
  $width: string
  $height: string
}

export const NewInput = styled(Input)<InputProps>`
  ${({ $width, $height }) => css`
    width: ${$width};
    height: ${$height};
  `}
`
