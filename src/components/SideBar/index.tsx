import { ChartBar, Package, TShirt, User } from '@phosphor-icons/react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Container, ContainerMenu, NavLink, Profile } from './styles'
import logo from '../../assets/logo-complete.png'
import profile from '../../assets/eu.jpg'
import { Button } from '../Button'
import { DefaultColors } from '../../styles/colors'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../utils/paths'

export function SideBar() {
  const theme = {
    menuTheme: {
      backgroundColor: '#1F2A40',
      color: 'white',
    },

    menuItemTheme: {
      backgroundColor: '#012245e6',
      '&:hover': {
        backgroundColor: 'red',
      },
    },
  }

  const { COLORS } = DefaultColors

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

        <Sidebar width="250px">
          <Menu
            rootStyles={theme.menuTheme}
            renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}
          >
            <NavLink to={PATHS.dashboard}>
              <MenuItem
                icon={
                  <ChartBar
                    size={24}
                    color={COLORS.ORANGE_LOGO}
                    weight="fill"
                  />
                }
              >
                Dashboard
              </MenuItem>
            </NavLink>

            <SubMenu
              icon={
                <TShirt size={24} color={COLORS.ORANGE_LOGO} weight="fill" />
              }
              label="Produtos"
            >
              <NavLink to={PATHS.todosOsProdutos}>
                <MenuItem rootStyles={theme.menuItemTheme}>
                  Todos os produtos
                </MenuItem>
              </NavLink>
              <MenuItem rootStyles={theme.menuItemTheme}>
                Adicionar novo produto
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Package size={24} color={COLORS.ORANGE_LOGO} weight="fill" />
              }
            >
              Estoque
            </MenuItem>

            <SubMenu
              icon={<User size={24} color={COLORS.ORANGE_LOGO} weight="fill" />}
              label="Vendedor"
            >
              <MenuItem rootStyles={theme.menuItemTheme}>
                Todos os vendedores
              </MenuItem>
              <MenuItem rootStyles={theme.menuItemTheme}>
                Adicionar novo vendedor
              </MenuItem>
              <MenuItem rootStyles={theme.menuItemTheme}>
                Métricas de vendedores
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </ContainerMenu>

      <NavLink to={PATHS.login}>
        <Button
          width="90%"
          color="white"
          backgroundColor={COLORS.RED_200}
          hover={COLORS.RED_300}
        >
          Sair
        </Button>
      </NavLink>
    </Container>
  )
}
