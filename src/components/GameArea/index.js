import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import socket from "../../lib/socket";
import { getGame, getUserSymbol } from "../../store/game/game.selectors";
import GameGrid from "./GameGrid";
import GameStats from "./GameStats";
import GameInformations from "./GameInformations";

const GameArea = () => {
  const game = useSelector(getGame);
  const symbol = useSelector(getUserSymbol);
  const canPlay = !game?.endGame && game?.currentPlayer === symbol;

  const userPlay = (index) => {
    if (canPlay && game.board[index] === null) {
      socket.emit("userPlay", { index, symbol });
    }
  };

  const playAgain = () => {
    socket.emit("playAgain");
  };

  return (
    <>
      <GameStats data={game} />
      <GameInformations data={game} canPlay={canPlay} />
      <GameGrid data={game} userPlay={userPlay} />
      {game?.endGame && (
        <div>
          <p> {game.winner} win !</p>
          <Button onClick={playAgain} color="primary">
            Play again
          </Button>
        </div>
      )}
    </>
  );
};

export default GameArea;
