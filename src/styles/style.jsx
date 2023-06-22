import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 140px 0 0 200px;

  .body-home {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: rgb(255, 255, 255, 0.7);
    border-radius: 10px;
    width: 450px;
    height: 450px;

    h1 {
      font-size: 25px;
      text-align: center;
      color: #c35100;
      margin-bottom: 20px;
      padding: 30px;
    }

    h2 {
      color: #0070cc;
      text-align: center;
      font-size: 15px;
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
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .body-home {
      width: 100%;
      height: 800px;

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
