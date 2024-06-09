import { Container } from './styles'

interface Props {
  title: string
  subtitle?: string
}

export function GraphTitle({ title, subtitle }: Props) {
  return (
    <Container>
      <h1>{title}</h1>
      <span>{subtitle}</span>
    </Container>
  )
}
