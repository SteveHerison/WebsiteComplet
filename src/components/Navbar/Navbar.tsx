import { Link } from "react-router-dom";
import Menu from "../../assets/menu.svg";

const Navbar = () => {
  return (
    <div className="w-14 h-full border-r hover:w-52">
      <div className="h-full w-full flex flex-col items-start justify-between px-3">
        <div className="h-20 flex items-center justify-center">
          <img src={Menu} alt="" className="w-8 h-8 " />
        </div>
        <ul className="flex flex-col gap-3 justify-center items-center flex-1">
          <li>
            <Link to="/home">
              <img src={Menu} alt="" className="w-8 h-8 " />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Menu} alt="" className="w-8 h-8 " />
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <img src={Menu} alt="" className="w-8 h-8 " />
            </Link>
          </li>
        </ul>
        <div className="h-32 flex flex-col items-center justify-around">
          <p>Alert</p>
          <img src={Menu} alt="" className="w-8 h-8 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
