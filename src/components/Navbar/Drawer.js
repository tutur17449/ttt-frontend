import "./Drawer.styles.scss";

const Drawer = ({ isOpen, onClick }) => {
  return (
    <div
      className={`drawer ${isOpen ? "open" : ""}`}
      onClick={() => onClick(!isOpen)}
    >
      <div className="drawer-line"></div>
      <div className="drawer-line"></div>
      <div className="drawer-line"></div>
    </div>
  );
};

export default Drawer;
