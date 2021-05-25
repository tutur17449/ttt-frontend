import { Col, Row } from "reactstrap";
import ButtonNeon from "../../ButtonNeon";
import "./styles.scss";

const GameTurn = ({ data, canPlay, playAgain }) => {
  if (data?.endGame) {
    return (
      <Row id="game-turn">
        <Col className="text-center">
          <h2 className="text-center"> {data.winner} win !</h2>
          <ButtonNeon onClick={playAgain} label="Play again" />
        </Col>
      </Row>
    );
  }

  return (
    <Row id="game-turn">
      <Col>
        {data ? (
          canPlay ? (
            <h2 className="text-center">Your turn </h2>
          ) : (
            <h2 className="text-center">Current player {data.currentPlayer}</h2>
          )
        ) : (
          <h2 className="text-center">Waiting other player ...</h2>
        )}
      </Col>
    </Row>
  );
};

export default GameTurn;
