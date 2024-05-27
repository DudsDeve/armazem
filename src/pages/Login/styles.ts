import styled from "styled-components";
import LoginImage from '../../assets/login-image.jpg'

export const Container = styled.div`
display: flex;
align-items: start;

background-image: url(${LoginImage}) ;
background-size: cover;
background-position: center;
 
`
export const Main = styled.main`
display: flex;
align-items: center;
justify-content: center;

width: 50%;
height: 100vh;
`
export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;



width:45%;
height: 45%;

border-radius: 10px 10px 10px 10px;
background-color: white;
box-shadow:  rgba(0, 0, 0, 0.24) 0px 3px 8px;

img{
    width: 90%;
    height: 20%;
}
`
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`

