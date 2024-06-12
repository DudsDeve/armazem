import {
  Container,
  InputContainer,
  LoginContainer,
  Main,
  NavLink,
  SocialAcess,
} from './styles'
import logo from '../../assets/logo-complete.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { Inputs } from '../../components/Inputs'
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from '@ant-design/icons'
import { Input } from 'antd'
import { Divider } from '../../components/Divider'
import { Buttons } from '../../components/Buttons'
import { DefaultColors } from '../../styles/colors'
import { PATHS } from '../../utils/paths'

const { COLORS } = DefaultColors

export function Login() {
  return (
    <>
      <Container>
        <Main className="glass">
          <LoginContainer>
            <img src={logo} />
            <InputContainer>
              <Inputs placeholder="E-mail" suffix={<UserOutlined />} />
              <Input.Password
                placeholder="Senha"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <NavLink to={PATHS.base}>
                <Buttons
                  backgroundColor={COLORS.ORANGE_LOGO}
                  width="100%"
                  color="white"
                  hover="#FFB703"
                >
                  Acessar
                </Buttons>
              </NavLink>
            </InputContainer>

            <Divider> Ou acesse com:</Divider>
            <SocialAcess>
              <a href="https://www.google.com/search?q=google&oq=google+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8Mg4IAhBFGCcYOxiABBiKBTIMCAMQIxgnGIAEGIoFMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0MTM1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">
                <img src={google} />
              </a>
              <a href="https://www.facebook.com/?locale=pt_BR">
                <img src={facebook} />
              </a>
            </SocialAcess>

            <span>
              Novo por aqui?
              <br />
              <a href="aaa">Cadastre-se agora!</a>
            </span>
          </LoginContainer>
        </Main>
      </Container>
    </>
  )
}
