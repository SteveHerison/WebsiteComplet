import React, { createContext, ReactNode, useState } from "react";
import { ContextType } from "../types/contextType";

// Estado inicial do contexto
const initialState: ContextType = {
  name: "",
  showBar: false,
  showChecked: false,
  email: "",
  password: "",
  confrmPassword: "",
  isAuthenticated: false,
  setShowbar: () => {},
  setShowChecked: () => {},
  setName: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setConfrmPassword: () => {},
  authenticate: () => {},
  logout: () => {},
};

export const Context = createContext<ContextType>(initialState);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [showBar, setShowbar] = useState(false);
  const [showChecked, setShowChecked] = useState(false);
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrmPassword, setConfrmPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true" || false
  );

  const authenticate = (inputName: string, inputPassword: string) => {
    const validName = "a"; // Nome padrão
    const validPassword = "1"; // Senha padrão

    // Verifica se o nome e a senha inseridos são válidos
    if (inputName === validName && inputPassword === validPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("name", inputName); // Salva o nome
      localStorage.setItem("Email", email);
      setName(inputName); // Atualiza o estado do nome
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  return (
    <Context.Provider
      value={{
        showBar,
        showChecked,
        setShowChecked,
        setShowbar,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confrmPassword,
        setConfrmPassword,
        isAuthenticated,
        authenticate,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};
