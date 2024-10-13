import React, { createContext, ReactNode, useState } from "react";
import { ContextType } from "../types/contextType";

// Estado inicial do contexto
const initialState: ContextType = {
  name: "",
  showBar: false,
  email: "",
  password: "",
  confrmPassword: "",
  isAuthenticated: false,
  setShowbar: () => {},
  setName: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setConfrmPassword: () => {},
  authenticate: () => {},
};

export const Context = createContext<ContextType>(initialState);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [showBar, setShowbar] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrmPassword, setConfrmPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (inputName: string, inputPassword: string) => {
    const validName = "amanda fernandes da costa"; // Nome padrão
    const validPassword = "271023"; // Senha padrão

    // Verifica se o nome e a senha inseridos são válidos
    if (inputName === validName && inputPassword === validPassword) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <Context.Provider
      value={{
        showBar,
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
