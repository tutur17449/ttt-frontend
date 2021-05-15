import { useEffect } from "react";
import withAuth from "../../hoc/withAuth";
import { useParams } from "react-router";
import socket from "../../lib/socket";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentGame } from "../../store/game/game.selectors";
import { SET_NEW_PLAYER, REMOVE_PLAYER } from "../../store/game/game.slice";

const Game = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(getCurrentGame);

  useEffect(() => {
    socket.on("userJoinCurrentGame", (userId) => {
      dispatch(SET_NEW_PLAYER(userId));
    });

    socket.on("userLeaveCurrentGame", (userId) => {
      dispatch(REMOVE_PLAYER(userId));
    });

    return () => {
      socket.emit("userLeaveRoom", id);
      socket.off("userJoinGame");
      socket.off("userLeaveCurrentGame");
    };
  }, []);

  return (
    <div>
      <p>Game {game.id}</p>
      <p>Users {game.users.length} / 2</p>
    </div>
  );
};

export default withAuth(Game);
