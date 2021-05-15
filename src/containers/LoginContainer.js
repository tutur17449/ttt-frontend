import { Col } from "reactstrap";
import FormLogin from "../components/FormLogin";

const LoginContainer = () => {
  return (
    <Col xs={6} className="m-auto">
      <div className="d-flex w-100">
        <h2>Please login</h2>
      </div>
      <FormLogin />
    </Col>
  );
};

export default LoginContainer;
