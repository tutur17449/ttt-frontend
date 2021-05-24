import { Row } from "reactstrap";

const GameInformations = ({ data, canPlay }) => {
  return (
    <Row className="mt-4 mb-4 text-center">
      {data ? (
        canPlay ? (
          <p>Your turn </p>
        ) : (
          <p>Current player {data.currentPlayer}</p>
        )
      ) : (
        <p>Waiting other player to start game ...</p>
      )}
    </Row>
  );
};

export default GameInformations;
