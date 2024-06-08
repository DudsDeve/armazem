import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  width: 250px;
  background-color: #1f2a40;
  //background: linear-gradient(180deg, rgba(1,34,69,1) 66%, rgba(0,13,27,1) 100%);
  .logo {
    width: 240px;
    object-fit: contain;
  }

  button {
    margin-bottom: 10px;
  }
`
export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding-top: 20px;

  .profileContainer {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .profile {
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  color: white;
  gap: 5px;

  h2 {
    font-size: 22px;
  }
  b {
    font-size: 15px;
  }
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  width: 100%;
`
