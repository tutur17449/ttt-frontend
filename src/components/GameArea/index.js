import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import socket from "../../lib/socket";
import { useParams } from "react-router";
import { getGame, getUserSymbol } from "../../store/game/game.selectors";
import GameGrid from "./GameGrid";
import GameInfos from "./GameInfos";
import GameStats from "./GameStats";
import GameTurn from "./GameTurn";

const GameArea = () => {
  const { id } = useParams();
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
      <GameStats data={game} symbol={symbol} />
      <GameTurn data={game} canPlay={canPlay} />
      <GameGrid data={game} userPlay={userPlay} symbol={symbol} />
      {game?.endGame && (
        <div>
          <p> {game.winner} win !</p>
          <Button onClick={playAgain} color="primary">
            Play again
          </Button>
        </div>
      )}
      <GameInfos id={id} />
    </>
  );
};

export default GameArea;
