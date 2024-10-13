import React, { useContext, useState, useEffect } from "react";
import InputForm from "../InputForm";
import { Context } from "../../../contexts/Context";
import { useNavigate } from "react-router-dom";

const FormIn = () => {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState(""); // Estado para a senha
  const [loginAttempted, setLoginAttempted] = useState(false);
  const navigate = useNavigate();
  const {
    setName,
    setPassword,
    authenticate,
    isAuthenticated,
    setShowChecked,
  } = useContext(Context);

  const handleInputName = (value: string) => {
    setInputName(value);
  };

  const handleInputPassword = (value: string) => {
    setInputPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginAttempted(true); // Marca que uma tentativa de login foi feita
    authenticate(inputName, inputPassword); // Espera pela autenticação
  };

  // useEffect para verificar a autenticação e redirecionar
  useEffect(() => {
    if (isAuthenticated && loginAttempted) {
      setShowChecked(true); // Mostra o alerta de sucesso
      setName(inputName);
      setPassword(inputPassword);
      setInputName("");
      setInputPassword("");

      // Configura um temporizador para ocultar o alerta e navegar para a home
      setTimeout(() => {
        setShowChecked(false); // Oculta o alerta
        navigate("/home");
      }, 2000);
    } else if (!isAuthenticated && loginAttempted) {
      alert("A senha ou o nome estão incorretos");
      setLoginAttempted(false);
    }
  }, [
    isAuthenticated,
    navigate,
    inputName,
    inputPassword,
    setName,
    setPassword,
    loginAttempted,
    setShowChecked, // Inclua setShowChecked aqui
  ]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-96">
      <InputForm
        id="signin-name"
        label="Nome"
        type="text"
        place="Digite seu nome"
        value={inputName}
        onChange={handleInputName}
        required
      />
      <InputForm
        id="signin-password"
        label="Senha"
        type="password"
        place="Digite sua senha"
        value={inputPassword}
        onChange={handleInputPassword}
        required
      />

      <label htmlFor="" className="flex items-center my-4 gap-2">
        <input type="checkbox" className="w-5 h-5" />
        Confirmação dos termos
      </label>
      <button
        type="submit"
        className="p-2 my-3 rounded-xl bg-orange-500 text-black"
      >
        Entrar
      </button>
    </form>
  );
};

export default FormIn;
