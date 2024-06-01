import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/SideBar";
import { Container, Content } from "./styles";

export function DefaultLayout() {
    return ( <> 
    <Container>
        <SideBar/>
        <Content>
            <Outlet/>
            </Content> 
    </Container>
    </>)
}