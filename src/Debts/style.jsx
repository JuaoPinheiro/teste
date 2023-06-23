import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  .header-debts {
    background-color: #0070cc;
    width: 100vw;
    padding: 70px 0 60px 80px;
    color: #fff;
    margin-bottom: -30px;
    display: flex;
    gap: 60%;
    align-items: center;

    .name-header {
      display: flex;
      font-size: 20px;
      flex-direction: column;
    }

    .link-icon {
      color: #fff;
      font-size: 50px;
      margin-right: 20px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .main-debts {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    width: 100vw;
    height: 100%;
  }

  .section-debts {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    width: 70%;
    margin-left: 15%;
    padding: 20px;

    .proposed-paragraph {
      margin-bottom: 50px;
      border-bottom: 3px solid #c35100;
      padding-bottom: 10px;
      font-size: 30px;
      cursor: pointer;

      &:hover {
        border-bottom: 3px solid #0070cc;
      }
    }
  }

  .info-section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    border: 1px solid #a7a7a7;
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 20px;

    h1 {
      font-size: 30px;
      margin-bottom: 20px;
    }

    .text-proposed {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .line {
      border-bottom: 1px solid gray;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 100%;
    }

    .installment {
      margin-top: 10px;
      font-size: 20px;
      margin-bottom: 10px;
      padding-top: 30px;
    }

    .btn-renegotiate {
      width: 400px;
      height: 60px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      background-color: #c35100;
      color: #fff;
      font-size: 20px;
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
        margin-top: 100px;
        font-size: 30px;
      }

      .div-description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-right: 20%;

        strong {
          font-size: 20px;
        }
      }
    }
  }

  .prices {
    display: flex;
    gap: 30%;

    .paragraph-de {
      opacity: 0.5;
      font-size: 25px;
    }

    h2 {
      font-size: 35px;
      font-weight: bold;
    }

    .discount {
      color: #0070cc;
      font-size: 30px;
      text-align: center;

      span {
        color: #c35100;
        font-size: 35px;
      }
    }

    .fire-icon {
      color: #c35100;
      font-size: 30px;
    }
  }

  /* RESPONSIVIDADE*/

  @media (max-width: 890px) {
    margin: 0;

    .header-debts,
    .body-home,
    .info-section,
    .main-debts {
      width: 100%;
    }

    .header-debts {
      gap: 20%;
    }

    .main-debts {
      padding-bottom: 50%;
    }

    .section-debts {
      width: 90%;
      margin-left: 0;
    }

    .main-debts {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 490px) {
    .header-debts {
      padding: 40px;
      gap: 150px;

      .link-icon {
        font-size: 18px;
      }
    }

    .section-debts {
      .proposed-paragraph {
        font-size: 20px;
      }
    }

    .origin {
      h3 {
        font-size: 10px;
      }
    }

    .prices {
      gap: 50px;

      .paragraph-de {
        font-size: 18px;
      }

      h2 {
        font-size: 25px;
      }
    }

    .info-section {
      .discount {
        font-size: 15px;
      }
      .fire-icon {
        font-size: 30px;
      }
    }

    .main-debts {
      .origin {
        h3 {
          font-size: 20px;
          text-align: center;
        }
      }
    }

    .info-section {
      h1 {
        font-size: 20px;
      }
      .btn-renegotiate {
        width: 80%;
      }
    }

    .name-header {
      h2 {
        font-size: 20px;
      }

      p {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 390px) {
    .text-proposed {
      .installment {
        font-size: 12px;
        text-align: center;
      }
      .btn-renegotiate {
        width: 90%;
        font-size: 10px;
      }
    }

    .info-section {
      h1 {
        font-size: 18px;
      }
    }

    .prices {
      gap: 50px;

      .paragraph-de {
        font-size: 15px;
      }

      h2 {
        font-size: 20px;
      }

      .discount {
        span {
          font-size: 25px;
        }
      }
    }

    .header-debts {
      gap: 10%;
    }
  }

  @media (max-width: 320px) {
    .header-debts {
      gap: 30px;
    }
    .origin {
      h3 {
        font-size: 10px;
      }
    }

    .prices {
      gap: 10px;
    }
  }
`;
