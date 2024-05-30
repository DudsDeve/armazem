import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-between;


height: 100vh;
width: 250px;
background: linear-gradient(180deg, rgba(1,34,69,1) 66%, rgba(0,13,27,1) 100%);
.logo{
    width: 240px;
    padding:20px 10px 0px 10px;
    object-fit: contain;
}

button{
    margin-bottom: 10px;
}

`
export const ContainerProfile = styled.div`
display: flex;
flex-direction: column;
gap:20px;

`
export const Profile = styled.div`
display: flex;
flex-direction: column;
align-items:center;
color: white;
gap: 5px;


img{
clip-path: circle(50%);
object-fit: cover;
width: 150px;
height:150px;
}

`