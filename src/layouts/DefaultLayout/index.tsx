import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/SideBar";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";

export function DefaultLayout() {
    return ( <> 
    <Container>
        <SideBar/>
        <Content>
            <Header/>
            <Outlet/>
            </Content> 
    </Container>
    </>)
}