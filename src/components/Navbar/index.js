import useAuth from "../../hooks/useAuth";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import "./styles.scss";

const Navbar = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <header>
      <MobileNav onClick={logout} />
      <DesktopNav onClick={logout} />
    </header>
  );
};

export default Navbar;
