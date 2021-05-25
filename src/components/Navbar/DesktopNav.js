import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import ButtonNeon from "../ButtonNeon";
import "./DesktopNav.styles.scss";

const DesktopNav = ({ onClick }) => {
  return (
    <nav className="desktop-nav">
      <Link to="/">
        <img src={Logo} alt="Tic Tac Toe logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <ButtonNeon label="Home" />
          </Link>
        </li>
        <li>
          <ButtonNeon label="Logout" onClick={onClick} />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
