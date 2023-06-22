import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.png";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
  body {
   background-image: url(${Background});
   background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  #no-debts{
    background-color: #fff;
    width: 600px;
    text-align: center;
    padding: 30px;
    margin: 300px 0 0 200px;
    border-radius: 5px;

    .link-no-debts{
      color: #000;
      font-size: 30px;
    }
  }
  }

  @media (max-width: 730px){
    body{
      background-image: none;
      height: 0;
    }
  }
`;

export default GlobalStyle;
