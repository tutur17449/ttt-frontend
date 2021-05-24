import { Button } from "reactstrap";
import "./styles.scss";

const ButtonNeon = ({ type, classes = null, label, onClick = null }) => {
  return (
    <Button
      type={type}
      className={`button-neon-outlined ${classes}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ButtonNeon;
