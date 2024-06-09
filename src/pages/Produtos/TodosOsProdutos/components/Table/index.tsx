import { Link } from 'react-router-dom'
import {
  Container,
  Table,
  TableBody,
  TableHeader,
  TableIcon,
  Td,
  Th,
} from './styles'
import { PATHS } from '../../../../../utils/paths'
import { Pencil, Trash } from '@phosphor-icons/react'
import { Tag } from 'antd'
import { Modals } from '../../../../../components/Modal'

export function Tables() {
  return (
    <>
      <Container>
        <Table>
          <TableHeader>
            <Th>Foto</Th>

            <Th>Produtos</Th>

            <Th>Estoque</Th>

            <Th>Fornecedor</Th>

            <Th>Tags</Th>

            <Th>Editar</Th>
          </TableHeader>

          <TableBody>
            <Td>Foto</Td>
            <Td>Calça</Td>
            <Td>15</Td>
            <Td>Marte</Td>
            <Td>
              <Tag color="red"> Roupa</Tag>
              <Tag color="red"> Calça</Tag>
            </Td>
            <TableIcon className="icon">
              <Link to={PATHS.base}>
                <Pencil size={30} />
              </Link>
              <Modals
                title="Remover {produto}"
                content={`Tem certeza que deseja excluir {produto} permanentemente? Ao confirmar sua ação o produto não poderá ser restaurado.`}
              >
                <Trash size={30} color="red" />
              </Modals>
            </TableIcon>
          </TableBody>
        </Table>
      </Container>
    </>
  )
}
