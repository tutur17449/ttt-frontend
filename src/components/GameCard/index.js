import { Col } from "reactstrap";
import "./styles.scss";

const GameCard = ({ data, onClick }) => {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className="p-1"
      onClick={() => onClick(data.id)}
    >
      <div className="game-card p-1">
        <p>Game {data.id}</p>
        <p>Owner {data.owner}</p>
        <p>Users : {data.users.length}/ 2</p>
      </div>
    </Col>
  );
};

export default GameCard;
