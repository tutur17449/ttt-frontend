import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import socket from "../../lib/socket";
import {
  getGame,
  getPlayer2,
  getUserSymbol,
} from "../../store/game/game.selectors";
import GameGrid from "./GameGrid";
import GameStats from "./GameStats";
import GameTurn from "./GameTurn";

const GameArea = () => {
  const { user } = useAuth();
  const game = useSelector(getGame);
  const player2 = useSelector(getPlayer2(user.id));
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
    <div className="h-100 d-flex flex-column align-items-center justify-content-center">
      <GameStats data={game} symbol={symbol} player2={player2} />
      <GameTurn data={game} canPlay={canPlay} playAgain={playAgain} />
      <GameGrid data={game} userPlay={userPlay} symbol={symbol} />
    </div>
  );
};

export default GameArea;
