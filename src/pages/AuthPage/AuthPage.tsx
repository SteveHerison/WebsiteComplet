import { useEffect, useState } from "react";
import Clock from "../../components/Clock";
import SingInForm from "../../components/SingInForm";
import SingUpForm from "../../components/SingUpForm";
import HeaderLogin from "../../components/HeaderLogIn";
import { useLocation } from "react-router-dom"; // Para verificar a rota atual

const AuthPage = () => {
  const [showForm, setShowForm] = useState(false); // Controle da exibição do formulário após o tempo
  const location = useLocation(); // Obtém a rota atual

  // Adiciona o atraso para exibir o formulário
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true); // Exibe o formulário após o tempo
    }, 300); // 3 segundos de atraso

    return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado
  }, []);

  // Determina qual formulário exibir com base na rota atual
  const renderForm = () => {
    if (location.pathname === "/login") {
      return <SingInForm />;
    } else if (location.pathname === "/") {
      return <SingUpForm />;
    }
    return null;
  };

  return (
    <section className="min-h-screen w-full  bg-zinc-800 flex flex-col justify-center items-center overflow-hidden">
      <div className="h-12">
        <HeaderLogin />
      </div>
      <div className="h-full w-full flex flex-col lg:flex-row justify-end items-center ">
        {/* Relógio centralizado */}
        <div
          className={`lg:w-1/2 w-full flex items-center justify-center transition-transform duration-1000 ease-in-out transform ${
            showForm
              ? "translate-x-0"
              : "lg:translate-x-[30rem] translate-y-52 lg:translate-y-0"
          }`}
        >
          <Clock />
        </div>

        {/* Formulário com animação, dentro do fluxo do layout */}
        <div
          className={`w-1/2 flex items-center justify-center transition-transform duration-1000 ease-in-out transform ${
            showForm
              ? "lg:translate-x-0 lg:w-1/2 w-full"
              : "lg:translate-x-[100rem] translate-y-[100rem] lg:translate-y-0"
          } `}
        >
          {renderForm()}
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
