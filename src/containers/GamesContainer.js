import { useEffect } from "react";
import { Col } from "reactstrap";
import { useHistory } from "react-router";
import CreateGame from "../components/CreateGame";
import GamesList from "../components/GamesList";
import JoinGame from "../components/JoinGame";
import socket from "../lib/socket";
import { useDispatch } from "react-redux";
import {
  DELETE_GAME,
  fetchInitialGames,
  SET_NEW_GAME,
  UPDATE_GAME,
} from "../store/games/games.slice";
import { SET_CURRENT_GAME } from "../store/game/game.slice";

const GamesContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialGames());

    socket.on("userCreateNewGame", (game) => {
      dispatch(SET_NEW_GAME(game));
      dispatch(SET_CURRENT_GAME(game));
      history.push(`/game/${game.id}`);
    });

    socket.on("newGameCreate", (game) => {
      dispatch(SET_NEW_GAME(game));
    });

    socket.on("deleteRoom", (gameId) => {
      dispatch(DELETE_GAME(gameId));
    });

    socket.on("joinGameSuccess", (game) => {
      dispatch(SET_CURRENT_GAME(game));
      history.push(`/game/${game.id}`);
    });

    socket.on("userJoinGame", (game) => {
      dispatch(UPDATE_GAME(game));
    });

    socket.on("userLeaveGame", (game) => {
      dispatch(UPDATE_GAME(game));
    });

    return () => {
      socket.off("userCreateNewGame");
      socket.off("newGameCreate");
      socket.off("deleteRoom");
      socket.off("joinGameSuccess");
      socket.off("userJoinGame");
      socket.off("userLeaveGame");
    };
  }, []);

  return (
    <Col>
      <div className="d-flex w-100">
        <h2>Game container</h2>
      </div>
      <CreateGame />
      <JoinGame />
      <GamesList />
    </Col>
  );
};

export default GamesContainer;
