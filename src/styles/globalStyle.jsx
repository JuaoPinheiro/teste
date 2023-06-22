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
  min-height: 900px;

  #no-debts{
    background: rgb(255, 255, 255, 0.7);
    width: 400px;
    text-align: center;
    padding: 30px;
    margin: 250px 0 auto 150px;
        border-radius: 5px;

    .link-no-debts{
      color: #000;
      font-size: 30px;
    }
  }
  }

  @media (max-width: 690px) {

    body{
      #no-debts{
        margin: 0;
        width: 100%;
        height: 1000px;
        padding-top: 300px;
      }
    }
    
  }
`;

export default GlobalStyle;
