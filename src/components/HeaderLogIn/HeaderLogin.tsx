import { useNavigate } from "react-router-dom";

const HeaderLogin = () => {
  const navigate = useNavigate();

  const handleShowLogUp = () => {
    navigate("/"); // Navega para a página de Cadastro
  };

  const handleShowLogIn = () => {
    navigate("/login"); // Navega para a página de Login
  };

  return (
    <div className="absolute left-0 top-0 w-full h-14 bg-white/25 flex items-center justify-between p-2">
      <h1>Logo</h1>
      <ul className="flex space-x-2">
        <li>
          <button className="bg-black p-2 rounded-xl" onClick={handleShowLogUp}>
            Cadastro
          </button>
        </li>
        <li>
          <button className="bg-black p-2 rounded-xl" onClick={handleShowLogIn}>
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLogin;
