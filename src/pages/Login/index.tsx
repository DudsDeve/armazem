import { Container, InputContainer, LoginContainer, Main, SocialAcess } from "./styles";
import logo from '../../assets/logo-complete.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { Inputt } from "../../components/Input";
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from "@ant-design/icons";
import {  Input} from "antd";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { DefaultColors } from "../../styles/colors";

const { COLORS } = DefaultColors

export function Login () {
 
  
    return <>
    <Container>
    <Main className="glass">
    <LoginContainer > 
    <img src={logo}/> 
    <InputContainer>
    <Inputt  placeholder="E-mail"  suffix={<UserOutlined/>}/>
    <Input.Password placeholder='Senha' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
    <Button backgroundColor={COLORS.ORANGE_LOGO} width="15px" color="white" hover="#FFB703">Acessar</Button>
   
    </InputContainer>
    

    <Divider> Ou acesse com:</Divider>
<SocialAcess>
    <a href="https://www.google.com/search?q=google&oq=google+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8Mg4IAhBFGCcYOxiABBiKBTIMCAMQIxgnGIAEGIoFMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0MTM1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">
   <img src={google}/></a>
    <a href="https://www.facebook.com/?locale=pt_BR">
    <img src={facebook}/></a>
    </SocialAcess>

    <span>Novo por aqui?<br/><a href="aaa">Cadastre-se agora!</a></span>
    
 </LoginContainer>
   </Main>
    </Container>
    </>
}