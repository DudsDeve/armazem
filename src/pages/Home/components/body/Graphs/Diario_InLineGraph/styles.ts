import { LineChart } from 'recharts'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
type Props = {
  $widthSize: string
}
export const LineGraph = styled(LineChart)<Props>`
  ${({ $widthSize }) => css`
    width: ${$widthSize};
  `}
`
