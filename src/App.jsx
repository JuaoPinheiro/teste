/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as C from "./styles/style";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [cpf, setCPF] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCPFChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");

    setCPF(numericValue);
    setError(""); 
  };

  const handleConsultarClick = () => {
    if (cpf.length === 11) {
      navigate(`/tela-detalhes/${cpf}`);
    } else {
      setError("CPF inválido. Digite um CPF válido com 11 dígitos.");
    }
  };

  return (
    <C.Container>
      <div className="body-home">
        <h1>
          Consulte se existem dívidas no seu CPF ou acompanhe seus acordos
        </h1>
        <input
          type="text"
          value={cpf}
          onChange={handleCPFChange}
          placeholder="Digite o CPF"
        />
        {error && <p className="error-message">{error}</p>}{" "}
        <button onClick={handleConsultarClick}>Consultar CPF</button>
        <h2>Somente hoje com os melhores descontos para você!</h2>
      </div>
    </C.Container>
  );
};

export default App;
