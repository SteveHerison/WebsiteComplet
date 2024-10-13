// src/types/contextType.ts
export type ContextType = {
  showBar: boolean;
  setShowbar: (value: boolean) => void;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confrmPassword: string;
  setConfrmPassword: (confrmPassword: string) => void;
  isAuthenticated: boolean;
  authenticate: (inputName: string, inputPassword: string) => void;
};
