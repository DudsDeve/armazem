import { Divider } from '../../../components/Divider'
import { Header } from './components/Header'
import { Tables } from './components/Table'
import { Container, Main } from './styles'

export function TodosOsProdutos() {
  return (
    <>
      <Container className="body">
        <Main>
          <Header />
          <Divider />
          <Tables />
        </Main>
      </Container>
    </>
  )
}
