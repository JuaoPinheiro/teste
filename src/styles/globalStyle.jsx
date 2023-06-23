import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
  body {
    overflow-x: hidden;

  #no-debts{
    background-color: #fff;
    width: 90%;
    text-align: center;
    padding: 30px;
    margin: 250px 0 auto 5%;
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
