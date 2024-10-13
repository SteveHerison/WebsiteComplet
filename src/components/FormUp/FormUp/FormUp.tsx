import { useContext, useState } from "react";
import InputForm from "../InputForm";
import { Context } from "../../../contexts/Context";
import { useNavigate } from "react-router-dom";

const FormUp = () => {
  const { setName, setEmail, setPassword, setConfrmPassword } =
    useContext(Context);
  const navigate = useNavigate();

  // Definindo estados locais para os campos de entrada
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const handleInputName = (value: string) => {
    setInputName(value);
  };

  const handleInputEmail = (value: string) => {
    setInputEmail(value);
  };

  const handleInputPassword = (value: string) => {
    setInputPassword(value);
  };

  const handleInputConfirmPassword = (value: string) => {
    setInputConfirmPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputPassword !== inputConfirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    setName(inputName);
    setEmail(inputEmail);
    setPassword(inputPassword);
    setConfrmPassword(inputConfirmPassword);

    setInputName("");
    setInputEmail("");
    setInputPassword("");
    setInputConfirmPassword("");

    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-96 ">
      <InputForm
        id="signup-name"
        label="Nome"
        type="text"
        place="Digite seu nome"
        value={inputName}
        onChange={handleInputName}
        required
      />
      <InputForm
        id="signup-email"
        label="E-mail"
        type="email"
        place="Digite seu email"
        value={inputEmail}
        onChange={handleInputEmail}
        required
      />
      <InputForm
        id="signup-password"
        label="Senha"
        type="password"
        place="Digite sua senha"
        value={inputPassword}
        onChange={handleInputPassword}
        required
      />
      <InputForm
        id="signup-confirm-password"
        label="Confirmação da Senha"
        type="password"
        place="Confirme sua senha"
        value={inputConfirmPassword}
        onChange={handleInputConfirmPassword}
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
        Cadastrar
      </button>
    </form>
  );
};

export default FormUp;
