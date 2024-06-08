import styled from 'styled-components'
import LoginImage from '../../assets/login-image.jpg'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  align-items: start;

  background-image: url(${LoginImage});
  background-size: cover;
  background-position: center;

  span {
    text-align: center;
  }
`
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 100vh;

  border-radius: 0px 15px 15px 0px;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-radius: 20px;
  width: 45%;
  height: 45%;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    width: 90%;
    height: 20%;
  }

  a {
    text-underline-offset: 3px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  gap: 10px;
`
export const SocialAcess = styled.div`
  display: flex;
  gap: 20px;

  img {
    height: 50px;
  }
`
export const NavLink = styled(Link)`
  width: 100%;
`
