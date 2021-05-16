const GameInformations = ({ data, canPlay }) => {
  return (
    <div id="game-informations">
      {data ? (
        canPlay ? (
          <p>Your turn </p>
        ) : (
          <p>Current player {data.currentPlayer}</p>
        )
      ) : (
        <p>Waiting other player to start game ...</p>
      )}
    </div>
  );
};

export default GameInformations;
