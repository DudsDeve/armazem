
import { ChartBar, Package, TShirt, User } from '@phosphor-icons/react';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Container } from './styles';
import logo from '../../assets/logo-complete.png'



export function SideBar(){


    return(<>
    <Container>
    <img src={logo}/> 
    <Sidebar width='250px' 
 >

    <Menu rootStyles={{
          backgroundColor:
            '#012245',
            }}renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}>

    
      <MenuItem icon={<ChartBar size={24} color="#f4c118" weight="fill" />

}> Dashboard </MenuItem>
    
      <SubMenu icon={<TShirt size={24} color="#f4c118" weight="fill" />
}label='Produtos'> 
      <MenuItem  > Todos os produtos </MenuItem>
      <MenuItem> Adicionar novo produto </MenuItem>
        </SubMenu>
        <SubMenu icon={<Package size={24} color="#f4c118" weight="fill" />

}label='Estoque'> 
      <MenuItem> Todos os produtos </MenuItem>
      <MenuItem> Adicionar novo produto </MenuItem>
        </SubMenu>

        <SubMenu icon={<User
         size={24} color="#f4c118" weight="fill" />

}label='Vendedor'> 
      <MenuItem> Todos os vendedores </MenuItem>
      <MenuItem> Adicionar novo vendedor </MenuItem>
      <MenuItem> Métricas de vendedores </MenuItem>
      </SubMenu>
  </Menu>
</Sidebar>
</Container></>)
}