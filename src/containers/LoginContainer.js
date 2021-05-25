import { Col, Container, Row } from "reactstrap";
import FormLogin from "../components/FormLogin";
import Logo from "../assets/images/logo.svg";
import "./LoginContainer.styles.scss";

const LoginContainer = () => {
  return (
    <div className="login-container">
      <Container>
        <Row>
          <Col xs={12} sm={10} md={8} lg={6} xl={4} className="m-auto">
            <div className="d-flex flex-column align-items-center w-100">
              <img src={Logo} alt="Tic Tac Toe logo" />
              <h1>Tic Tac Toe</h1>
            </div>
            <FormLogin />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginContainer;
