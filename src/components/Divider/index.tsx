import { ReactNode } from 'react'
import { NewDivider } from './styles'
interface DividerProps {
  orientation?: string // left | right | center
  children?: ReactNode
  type?: string // vertical
}
export function Divider({ orientation, children, type }: DividerProps) {
  return (
    <>
      <NewDivider orientation={orientation} type={type}>
        {children}
      </NewDivider>
    </>
  )
}
