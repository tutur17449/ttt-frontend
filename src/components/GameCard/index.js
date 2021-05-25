import { Col } from "reactstrap";
import "./styles.scss";

const GameCard = ({ data, onClick }) => {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      className="p-3 game-card"
      onClick={() => onClick(data.id)}
    >
      <div className="game-card-content p-1">
        <p>#{data.id}</p>
        <p>{data.owner.username}</p>
        <span>{data.users.length}/ 2</span>
      </div>
    </Col>
  );
};

export default GameCard;
