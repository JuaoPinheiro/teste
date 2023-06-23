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
      height: 60px;
      margin-top: 30px;
    }

    h1 {
      font-size: 30px;
      text-align: center;
      color: #da6200;
      font-weight: bold;
      margin-bottom: 20px;
      padding: 30px;
    }

    h2 {
      color: #0070cc;
      text-align: center;
      font-size: 18px;
      padding: 20px;
      margin-top: 20px;
    }

    input {
      width: 300px;
      height: 40px;
      margin-bottom: 30px;
      border: 1px solid #0070cc;
      border-radius: 5px;
      padding-left: 10px;
      outline: none;
    }

    button {
      width: 200px;
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
      margin-top: -28px;
      margin-bottom: 30px;
      margin-right: 30px;
    }
  }

  @media (max-width: 730px) {
    .body-home {
      width: 90%;
      margin-left: 5%;

      .error-message {
        font-size: 8px;
        margin-right: 90px;
      }
    }
  }

  @media (max-width: 335px) {
    .body-home {
      input {
        width: 50%;
      }

      .error-message {
        font-size: 8px;
        margin-left: 25%;
      }

      button {
        width: 50%;
      }
    }
  }
`;
