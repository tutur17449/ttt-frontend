import { Row, Col } from "reactstrap";
import "./styles.scss";

const GameStats = ({ data }) => {
  return (
    <Row
      id="game-stats"
      className="d-flex flex-row align-items-center justify-content-between"
    >
      <Col className="stats">
        <p>Total game(s): {data?.stats.T ?? 0}</p>
      </Col>
      <Col className="stats">
        <p>"X" win {data?.stats.X ?? 0} game(s)</p>
      </Col>
      <Col className="stats">
        <p>"O" win {data?.stats.O ?? 0} game(s)</p>
      </Col>
    </Row>
  );
};

export default GameStats;
