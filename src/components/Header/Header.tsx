import { useContext } from "react";
import Menu from "../../assets/menu.svg";
import Logout from "../../assets/logout.svg";
import { Context } from "../../contexts/Context";
import { getFirstTwoNames } from "../../utils/helpers";

const Header = () => {
  const { showBar, setShowbar, name, logout } = useContext(Context);

  const handleShowBar = () => {
    setShowbar(!showBar);
  };

  return (
    <header className="w-full h-20 border-b flex items-center pl-4 pr-2">
      <div className="w-full flex justify-between items-center">
        <div>oi</div>
        <div className="flex items-center space-x-3">
          <h3>{getFirstTwoNames(name)}</h3>
          <p>alert</p>
          <button onClick={handleShowBar}>
            <img src={Menu} alt="menu icon" className="w-8 h-8" />
          </button>
          <button onClick={logout}>
            <img src={Logout} alt="menu icon" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
