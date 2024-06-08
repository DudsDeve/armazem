import { Space } from 'antd'
import styled, { css } from 'styled-components'

type Props = {
  $height: string
}

export const Spaces = styled(Space)<Props>`
  ${({ $height }) => css`
    height: ${$height};
  `}
`
