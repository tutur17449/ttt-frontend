import { Col } from "reactstrap";
import FormLogin from "../components/FormLogin";
import Logo from "../assets/images/logo.svg";
import "./LoginContainer.styles.scss";
import { motion } from "framer-motion";

const LoginContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Col xs={12} sm={10} md={8} lg={6} xl={4} className="m-auto">
        <div className="login-container">
          <div className="d-flex flex-column align-items-center w-100">
            <img src={Logo} alt="Tic Tac Toe logo" />
            <h1>Tic Tac Toe</h1>
          </div>
          <FormLogin />
        </div>
      </Col>
    </motion.div>
  );
};

export default LoginContainer;
