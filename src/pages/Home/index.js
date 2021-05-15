import { Container, Row } from "reactstrap";
import GamesContainer from "../../containers/GamesContainer";
import LoginContainer from "../../containers/LoginContainer";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Row>{user ? <GamesContainer /> : <LoginContainer />}</Row>
    </Container>
  );
};

export default Home;
