import type { MenuProps } from 'antd'
import { ConfigProvider, Menu } from 'antd'
import logo from '../../assets/logo-complete.png'
import profile from '../../assets/eu.jpg'
import { Container, ContainerMenu, Profile } from './styles'
import { ChartBar, Package, TShirt, User } from '@phosphor-icons/react'
import { DefaultColors } from '../../styles/colors'
import { Link } from 'react-router-dom'
import { PATHS } from '../../utils/paths'

type MenuItem = Required<MenuProps>['items'][number]
const { COLORS } = DefaultColors

const items: MenuItem[] = [
  {
    key: 'Dashboard',
    label: 'Dashboard',
    icon: (
      <Link to={PATHS.dashboard}>
        <ChartBar size={24} color={COLORS.ORANGE_LOGO} weight="fill" />
      </Link>
    ),
  },
  {
    key: 'Produtos',
    label: 'Produtos',
    icon: (
      <Link to={PATHS.todosOsProdutos}>
        <TShirt size={24} color={COLORS.ORANGE_LOGO} weight="fill" />
      </Link>
    ),
    children: [
      {
        key: 'Todos os produtos',
        label: <Link to={PATHS.todosOsProdutos}>Todos os produtos</Link>,
      },
      {
        key: 'Adicionar produto',
        label: <Link to={PATHS.adicionarNovoProduto}>Adicionar produto</Link>,
      },
    ],
  },
  {
    key: 'Estoque',
    label: 'Estoque',
    icon: (
      <Link to={PATHS.estoque}>
        {' '}
        <Package size={24} color={COLORS.ORANGE_LOGO} weight="fill" />
      </Link>
    ),
  },
  {
    key: 'Vendedor',
    label: 'Vendedor',
    icon: (
      <Link to={PATHS.todosOsVendedores}>
        <User size={24} color={COLORS.ORANGE_LOGO} weight="fill" />
      </Link>
    ),
    children: [
      {
        key: 'Todos os vendedores',
        label: <Link to={PATHS.todosOsVendedores}>Todos os vendedores</Link>,
      },
      {
        key: 'Adicionar vendedor',
        label: <Link to={PATHS.adicionarNovoVendedor}>Adicionar vendedor</Link>,
      },
      {
        key: 'Métricas do vendedor',
        label: (
          <Link to={PATHS.metricasDeVendedores}> Métricas do vendedor</Link>
        ),
      },
    ],
  },
]
export function SideBar() {
  return (
    <Container>
      <ContainerMenu>
        <img className="logo" src={logo} />

        <div className="profileContainer">
          <img className="profile" src={profile} />

          <Profile>
            <h2>Eduardo</h2>
            <b>Administrador</b>
          </Profile>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemBg: `${COLORS.BLUE_TESTAR}`,
                itemColor: `${COLORS.WHITE}`,
                itemBorderRadius: 0,
                itemSelectedBg: `${COLORS.BLUE_300}`,
                itemSelectedColor: `${COLORS.ORANGE_LOGO}`,
                itemHoverBg: `${COLORS.BLUE_400}`,
                itemHoverColor: `${COLORS.WHITE}`,
              },
            },
          }}
        >
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </ConfigProvider>
      </ContainerMenu>
    </Container>
  )
}
