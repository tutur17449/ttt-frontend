import { NavLink } from "react-router-dom";
import "./styles.scss";

const Navbar = () => (
  <header>
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
