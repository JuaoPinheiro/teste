/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as C from "./styles/style";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";

const formatCPF = (value) => {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return value.replace(cpfRegex, "$1.$2.$3-$4");
};

const App = () => {
  const [cpf, setCPF] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCPFChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "").slice(0, 11); // Limita a 11 dígitos
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

  const formattedCPF = formatCPF(cpf);

  return (
    <C.Container>
      <div className="body-home">
        <img className="logo" src={Logo} alt="" />
        <h1>
          Consulte se existem dívidas no seu CPF ou acompanhe seus acordos
        </h1>
        <input
          type="text"
          value={formattedCPF}
          onChange={handleCPFChange}
          placeholder="Digite o CPF"
          maxLength={14} // Limita a 11 dígitos + 3 caracteres de formatação
        />
        {error && <p className="error-message">{error}</p>}{" "}
        <button onClick={handleConsultarClick}>Consulte seus contratos</button>
        <h2>
          Somente hoje com os melhores <br /> descontos para você!
        </h2>
      </div>
    </C.Container>
  );
};

export default App;
