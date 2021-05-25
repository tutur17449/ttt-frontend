import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import ButtonNeon from "../ButtonNeon";
import Drawer from "./Drawer";
import "./MobileNav.styles.scss";

const MobileNav = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`mobile-nav ${isOpen && "open"}`}>
      <div className="mobile-actions">
        <Link to="/" onClick={() => setIsOpen(!isOpen)}>
          <img src={Logo} alt="Tic Tac Toe logo" />
        </Link>
        <Drawer isOpen={isOpen} onClick={setIsOpen} />
      </div>
      {isOpen && (
        <div className="mobile-nav-content">
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(!isOpen)}>
                <ButtonNeon label="Home" />
              </Link>
            </li>
            <li>
              <ButtonNeon label="Logout" onClick={onClick} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
