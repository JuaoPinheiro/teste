import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 70px 0 0 70px;

  .body-home {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    width: 600px;
    height: 600px;

    h1 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
      padding: 20px;
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
  }

  .header-debts {
    background-color: #0070cc;
    width: 600px;
    border-radius: 10px;
    padding: 50px;
    color: #fff;
    margin-bottom: -30px;
    display: flex;
    gap: 150px;
    align-items: center;

    .haha {
      display: flex;
      flex-direction: column;
    }

    .link-icon {
      color: #fff;
      font-size: 30px;
    }
  }

  .main-debts {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    width: 600px;
    height: 100%;
  }

  .section-debts {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    width: 450px;
    margin-left: 80px;
    padding: 20px;

    .proposed-paragraph {
      margin-bottom: 50px;
      border-bottom: 1px solid #c35100;
      padding-bottom: 10px;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid #0070cc;
      }
    }
  }

  .info-section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    border: 1px solid #000;
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 20px;
    overflow-x: auto;

    h1 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .text-proposed {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .installment {
      border-top: 1px solid gray;
      margin-top: 10px;
      padding-top: 30px;
    }

    .btn-renegotiate {
      width: 300px;
      height: 50px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      background-color: #c35100;
      color: #fff;
      font-size: 15px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    .origin {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-direction: column;

      h3 {
        color: #0070cc;
      }

      .div-description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 25px;
      }
    }
  }

  .prices {
    display: flex;
    gap: 70px;

    .discount {
      color: #0070cc;
      font-size: 17px;
      text-align: center;
    }

    .fire-icon {
      color: #c35100;
      width: 130px;
      font-size: 30px;
    }
  }

  .error-message {
    color: red;
    font-size: 11px;
    margin-top: -28px;
    margin-bottom: 30px;
    margin-right: 30px;
  }

  /* RESPONSIVIDADE*/

  @media (max-width: 730px) {
    margin: 0;

    .headet-debts {
      width: 80%;
    }
  }
`;
