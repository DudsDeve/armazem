import { Breadcrumbs } from '../Breadcrumb'
import { Container, Title } from './styles'
import { useLocation } from 'react-router-dom'

export function Header() {
  const { pathname } = useLocation()

  const removePathBase = pathname.replace('/', '').charAt(0).toLocaleUpperCase()
  const restPath = pathname.substring(2).replace(/-/g, ' ')

  return (
    <>
      <Container className="body">
        <Breadcrumbs />
        <Title>{`${removePathBase}${restPath}`}</Title>
      </Container>
    </>
  )
}
