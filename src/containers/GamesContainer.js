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

    socket.on("createNewGameConfirmation", (game) => {
      dispatch(SET_NEW_GAME(game));
      dispatch(SET_CURRENT_GAME({ game, symbol: "X" }));
      history.push(`/game/${game.id}`);
    });

    socket.on("newGameCreate", (game) => {
      dispatch(SET_NEW_GAME(game));
    });

    socket.on("deleteRoom", (gameId) => {
      dispatch(DELETE_GAME(gameId));
    });

    socket.on("joinGameConfirmation", (game) => {
      dispatch(SET_CURRENT_GAME({ game }));
      history.push(`/game/${game.id}`);
    });

    socket.on("userJoinGame", (game) => {
      dispatch(UPDATE_GAME(game));
    });

    socket.on("userLeaveGame", (game) => {
      dispatch(UPDATE_GAME(game));
    });

    return () => {
      socket.off("createNewGameConfirmation");
      socket.off("newGameCreate");
      socket.off("deleteRoom");
      socket.off("joinGameConfirmation");
      socket.off("userJoinGame");
      socket.off("userLeaveGame");
    };
  }, []);

  return (
    <Col xs={10} className="m-auto">
      <CreateGame />
      <hr />
      <JoinGame />
      <hr />
      <GamesList />
    </Col>
  );
};

export default GamesContainer;
