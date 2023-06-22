import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 50px 0 auto 200px;

  .header-debts {
    background-color: #0070cc;
    width: 600px;
    border-radius: 10px 10px 0 0;
    padding: 50px;
    color: #fff;
    margin-bottom: -30px;
    display: flex;
    gap: 150px;
    align-items: center;

    .name-header {
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
        padding-left: 20px;
      }
    }
  }

  .prices {
    display: flex;
    gap: 70px;

    .paragraph-de {
      opacity: 0.5;
      font-size: 13px;
    }

    h2 {
      font-size: 19px;
      font-weight: bold;
    }

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

  /* RESPONSIVIDADE*/

  @media (max-width: 890px) {
    margin: 0;

    .header-debts,
    .body-home,
    .info-section,
    .main-debts {
      width: 100%;
    }


    .main-debts{
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

    .prices {
      gap: 20px;
    }

    .info-section {
      .discount {
        font-size: 10px;
      }
      .fire-icon {
        font-size: 30px;
      }
    }

    .name-header {
      h2 {
        font-size: 15px;
      }

      p {
        font-size: 10px;
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

    .header-debts {
      gap: 60px;
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



