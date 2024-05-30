
import { ChartBar, Package, TShirt, User } from '@phosphor-icons/react';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import { Container, ContainerProfile, Profile } from './styles';
import logo from '../../assets/logo-complete.png'
import profile from '../../assets/eu.jpg'
import { Button } from '../Button';

export function SideBar(){


const theme = { 

      menuTheme:{
      backgroundColor:
      '#012245',
      color:'white'},

      menuItemTheme:{
       backgroundColor:
      '#012245e6',
      '&:hover': {
            backgroundColor: 'red' 
      }
      }

}


    return(<>
    <Container>
      <ContainerProfile>

    <img className='logo' src={logo}/> 

    <Profile>
    <img className='profile'src={profile}/>
    <h2>Eduardo</h2>
    <b>Administrador</b>
    </Profile>

    <Sidebar width='250px'>

    <Menu rootStyles={theme.menuTheme} renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}>

      <MenuItem icon={<ChartBar size={24} color="#f4c118" weight="fill" />}
       > Dashboard </MenuItem>

      <SubMenu  icon={<TShirt size={24} color="#f4c118" weight="fill" />
}label='Produtos'> 
      <MenuItem  rootStyles={theme.menuItemTheme}> Todos os produtos </MenuItem>
      <MenuItem rootStyles={theme.menuItemTheme}>  Adicionar novo produto </MenuItem>
        </SubMenu>
        <SubMenu icon={<Package size={24} color="#f4c118" weight="fill" />

}label='Estoque'> 
      <MenuItem rootStyles={theme.menuItemTheme}> Todos os produtos </MenuItem>
      <MenuItem rootStyles={theme.menuItemTheme}> Adicionar novo produto </MenuItem>
        </SubMenu>

        <SubMenu icon={<User
         size={24} color="#f4c118" weight="fill" />

}label='Vendedor'> 
      <MenuItem rootStyles={theme.menuItemTheme}> Todos os vendedores </MenuItem>
      <MenuItem rootStyles={theme.menuItemTheme}> Adicionar novo vendedor </MenuItem>
      <MenuItem rootStyles={theme.menuItemTheme}> Métricas de vendedores </MenuItem>
      </SubMenu>
  </Menu>
  
</Sidebar>
</ContainerProfile>

<Button widthSize="90%" backgroundColor='#d30f06' hover='#fa1f0c' color='white' >Sair</Button>
</Container></>)
}