import styled from "styled-components";
import Background from "../assets/background.png";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;

  .body-home {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    margin: 30px 0 0 150px;
    width: 400px;
    height: auto;

    .logo{
      height: 45px;
      margin-top: 20px;
    }

    h1 {
      font-size: 20px;
      text-align: start;
      line-height: 30px;
      color: #da6200;
      margin-bottom: 5px;
      padding: 20px;
    }

    h2 {
      color: #0070cc;
      text-align: center;
      font-size: 16px;
      padding: 20px;
      margin-top: 20px;
    }

    input {
      width: 330px;
      height: 40px;
      margin-bottom: 15px;
      border: 1px solid #c8c8c8;
      border-radius: 5px;
      padding-left: 10px;
      outline: none;
    }

    button {
      width: 330px;
      height: 50px;
      border-radius: 5px;
      color: #fff;
      border: none;
      background-color: #0070cc;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    .error-message {
      color: red;
      font-size: 11px;
      margin-top: -12px;
      margin-bottom: 30px;
      margin-right: 50px;
    }
  }

  @media (max-width: 730px) {
    .body-home {
      width: 90%;
      margin-left: 5%;

      .error-message {
        font-size: 8px;
        margin-right: 120px;
      }
    }
  }

  @media (max-width: 435px) {
    .body-home {
      input {
        width: 50%;
      }

      h1{
        font-size: 15px;
      }

      h2{
        font-size: 13px;
      }

      .error-message {
        font-size: 8px;
        margin-left: 27%;
      }

      button {
        width: 50%;
      }
    }
  }
`;
