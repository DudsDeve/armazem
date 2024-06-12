import { MagnifyingGlass } from '@phosphor-icons/react'
import { Inputs } from '../../../../../components/Inputs'
import { Container, SearchContainer } from './styles'
import { DatePickers } from '../../../../../components/DatePicker'
import { Divider } from '../../../../../components/Divider'
import { Tree } from './components/Tree'

export function Header() {
  return (
    <>
      <Container>
        <span>Filtrar produtos por:</span>

        <SearchContainer>
          <span>Data de entrada :</span>

          <DatePickers />

          <Divider type="vertical" />

          <span>Categoria:</span>

          <Tree whidthSize="30%" maxTagCount={4} maxTagTextLength={10} />

          <span>Nome do produto :</span>

          <Inputs
            width="20%"
            height="32px"
            suffix={<MagnifyingGlass size={22} />}
            placeholder="Buscar produto"
          />
        </SearchContainer>
      </Container>
    </>
  )
}
