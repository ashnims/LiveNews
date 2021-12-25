import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding:0px ;
  
    font-family: ${(props) => props.theme.fontFamily};  
    background:#ebfdff;
    overflow-x: hidden;


}
`;
