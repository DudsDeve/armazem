import { DefaultColors } from '../../../../../../styles/colors'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { Container } from './styles'
import { GraphTitle } from '../../../../../../components/GraphTitle'

export function EstoqueBarCharts() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      anoAtual: 2400,
      anoPassado: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      anoAtual: 1398,
      anoPassado: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      anoAtual: 9800,
      anoPassado: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      anoAtual: 3908,
      anoPassado: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      anoAtual: 4800,
      anoPassado: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      anoAtual: 3800,
      anoPassado: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      anoAtual: 4300,
      anoPassado: 2100,
    },
  ]

  const { COLORS } = DefaultColors
  return (
    <Container>
      <GraphTitle title="Estoque" subtitle="Produtos que estão acabando" />
      <BarChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="anoAtual"
          fill={COLORS.GREEN_200}
          activeBar={<Rectangle fill="pink" stroke={COLORS.GREEN_200} />}
        />
        <Bar
          dataKey="anoPassado"
          fill={COLORS.RED_200}
          activeBar={<Rectangle fill="gold" stroke={COLORS.RED_200} />}
        />
      </BarChart>
    </Container>
  )
}
