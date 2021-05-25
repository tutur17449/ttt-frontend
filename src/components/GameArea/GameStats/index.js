import { Row, Col } from "reactstrap";
import X from "../../../assets/images/X.svg";
import O from "../../../assets/images/O.svg";
import "./styles.scss";

const GameStats = ({ data, symbol }) => {
  return (
    <Row id="game-stats">
      <Col>
        <div className="w-100 d-flex flex-row justify-content-center align-items-center">
          <div className="stats d-flex flex-column align-items-center">
            <span>{symbol === "X" ? "You" : "Player2"}</span>
            <div className="d-flex flex-row align-items-center">
              <img src={X} alt="player X" />
              <span>{data?.stats.X ?? 0}</span>
            </div>
          </div>
          <div className="stats d-flex flex-column align-items-center">
            <span>{symbol === "O" ? "You" : "Player2"}</span>
            <div className="d-flex flex-row align-items-center">
              <span>{data?.stats.O ?? 0}</span>
              <img src={O} alt="player O" />
            </div>
          </div>
          <div></div>
        </div>
      </Col>
    </Row>
  );
};

export default GameStats;
