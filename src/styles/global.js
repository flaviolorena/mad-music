import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #root{
  height: 100%;
  
}


*, button, input{
  border: 0;
  outline: 0;
  font-family: 'Roboto', sans-serif;
}
:root{
  :root {
    --background: #5c545c;
    --secondary: #4F4F4F;
    --highlight: #dc3579;
    --white: #fefdfe;
    --lightgrey: #ddd;
    --mediumgrey: #696969;
    
  }
}
`;