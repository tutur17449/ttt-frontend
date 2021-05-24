import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import socket from "../../lib/socket";
import { getLoading } from "../../store/api/api.selectors";
import { getGames } from "../../store/games/games.selectors";
import GameCard from "../GameCard";

const GamesList = () => {
  const isLoading = useSelector(getLoading("getInitialGames"));
  const games = useSelector(getGames);

  const joinGame = (id) => {
    socket.emit("joinGame", id);
  };

  return (
    <Row>
      <Col xs={12}>
        <h2 className="mb-4">Public games</h2>
      </Col>
      {isLoading ? (
        <p>Loading ...</p>
      ) : games.length === 0 ? (
        <p>Any games now.</p>
      ) : (
        games.map((i) => <GameCard key={i.id} data={i} onClick={joinGame} />)
      )}
    </Row>
  );
};

export default GamesList;
