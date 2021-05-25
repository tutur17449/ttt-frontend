import { Col, Row } from "reactstrap";

const GameTurn = ({ data, canPlay }) => {
  return (
    <Row className="mt-4 mb-4">
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
