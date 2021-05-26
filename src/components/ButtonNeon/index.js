import "./styles.scss";

const ButtonNeon = ({ type, classes = null, label, onClick = null }) => {
  return (
    <button
      type={type}
      className={`button-neon-outlined ${classes}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonNeon;
