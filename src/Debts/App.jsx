/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import dados from "../utils/dados";
import { AiOutlineArrowDown, AiTwotoneFire } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import * as C from "../styles/style";

const Debts = () => {
  const { cpf } = useParams();
  const cliente = dados[cpf];

  if (!cliente || cliente.dividas.length === 0) {
    return (
      <div id="no-debts">
        <h2>Não há dívidas para o CPF informado.</h2>
        <Link className="link-no-debts" to="/">
          <RxExit />
        </Link>
      </div>
    );
  }

  const somaDividas = cliente.dividas.reduce(
    (total, divida) => total + divida.valor,
    0
  );

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <C.Container>
      <div className="main-debts">
        <div className="header-debts">
          <div className="haha">
            <h2>Olá, {cliente.nome}</h2>
            <p>Veja abaixo suas dívidas sob a gestão</p>
          </div>
          <Link className="link-icon" to="/">
            <RxExit />
          </Link>
        </div>

        <div className="section-debts">
          <p className="proposed-paragraph">Propostas</p>
          <div className="info-section">
            <h1>Oferta Especial</h1>
            <div className="prices">
              <div>
                <p>De: R${somaDividas}</p>
                <h2>Por: R${somaDividas / 2}</h2>
              </div>
              <p className="discount">
                Desconto de 50% <br />
                <AiTwotoneFire className="fire-icon" />
              </p>
            </div>

            <div className="text-proposed">
              <p className="installment">Pagamento em até 6x sem juros</p>
              <button className="btn-renegotiate">
                Renegocie com 1 clique
              </button>

              <ul className="origin">
                {showDetails && (
                  <>
                    {cliente.dividas.map((divida, index) => (
                      <div className="div-description" key={index}>
                        <strong>Valor:</strong> R${divida.valor}
                        <strong>Descrição:</strong> {divida.descricao}
                      </div>
                    ))}
                  </>
                )}
                <h3>Ver origem da dívida</h3>
                <AiOutlineArrowDown onClick={toggleDetails}>
                  {showDetails ? "Fechar" : "Abrir"} detalhes
                </AiOutlineArrowDown>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </C.Container>
  );
};

export default Debts;
