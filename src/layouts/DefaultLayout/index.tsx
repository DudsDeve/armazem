import { Outlet } from 'react-router-dom'
import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar '

export function DefaultLayout() {
  return (
    <>
      <Container>
        <SideBar />
        <Content>
          <Header />
          <Outlet />
        </Content>
      </Container>
    </>
  )
}
