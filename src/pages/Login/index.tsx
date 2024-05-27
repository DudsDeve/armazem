import { Container, InputContainer, LoginContainer, Main } from "./styles";
import logo from '../../assets/logo-complete.png'
import { Button } from "../../components/Button";
import { Inputt } from "../../components/Input";
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from "@ant-design/icons";
import { Input, Divider } from "antd";




export function Login () {
 
  
    return <>
    <Container>
    <Main className="glass">
 <LoginContainer > 
    <img src={logo}/> 
   <InputContainer>
    <Inputt  placeholder="E-mail"  suffix={<UserOutlined/>}/>
  
    <Input.Password placeholder='Senha' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>

    </InputContainer>
    <Divider >Ou acesse com: </Divider>
   


    
  <Button/>
 </LoginContainer>
   </Main>
    </Container>
    </>
}