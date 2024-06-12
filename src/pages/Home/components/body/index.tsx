import { BarCharts } from './Graphs/Produtos_BarGraph'
import { ClientesBarCharts } from './Graphs/Clientes_BarGraph'
import { EstoqueBarCharts } from './Graphs/Estoque_BarGraph'
import { InLineGraph } from './Graphs/Diario_InLineGraph'
import { VendedoresGraph } from './Graphs/Vendedores_PieGraph'
import { Container } from './styles'

export function Body() {
  return (
    <>
      <Container className="body">
        <div className="sales-container">
          <div className="in-line">
            <InLineGraph />
          </div>
          <div className="bar">
            <BarCharts />
          </div>
        </div>

        <div className="products-container">
          <div className="estoque-barChart">
            <EstoqueBarCharts />
          </div>
          <div className="vendedor-pieChart">
            <VendedoresGraph />
          </div>
          <div className="clientes_barChart">
            <ClientesBarCharts />
          </div>
        </div>
      </Container>
    </>
  )
}
