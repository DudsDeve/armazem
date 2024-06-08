import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

*{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box

   a{
        color: black;
   }

  font-family: Montserrat;
  
  .body{
     padding: 20px;

}

}



.glass {
/* From https://css.glass */
background: rgba(1, 34, 69, 0.6);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(1, 34, 69, 0.3);

}
`
