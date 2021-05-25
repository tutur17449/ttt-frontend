import { useEffect } from "react";
import withAuth from "../../hoc/withAuth";
import { useHistory, useParams } from "react-router";
import socket from "../../lib/socket";
import { useDispatch, useSelector } from "react-redux";
import { getLoading } from "../../store/api/api.selectors";
import { getCurrentGame } from "../../store/game/game.selectors";
import {
  SET_NEW_PLAYER,
  REMOVE_PLAYER,
  fetchInitialGame,
  RESET_CURRENT_GAME,
  SET_GAME_BOARD,
} from "../../store/game/game.slice";
import GameArea from "../../components/GameArea";
import { Container, Row, Col } from "reactstrap";

const Game = () => {
  const { id } = useParams();
  const history = useHistory();
  const isLoading = useSelector(getLoading("getCurrentGame"));
  const dispatch = useDispatch();
  const room = useSelector(getCurrentGame);

  useEffect(() => {
    // dispatch(fetchInitialGame(id));

    socket.on("userJoinCurrentGame", (userId) => {
      dispatch(SET_NEW_PLAYER(userId));
    });

    socket.on("userLeaveCurrentGame", (userId) => {
      dispatch(REMOVE_PLAYER(userId));
    });

    socket.on("ownerLeaveRoom", () => {
      dispatch(RESET_CURRENT_GAME());
      history.push("/");
    });

    socket.on("startGame", (game) => {
      dispatch(SET_GAME_BOARD(game));
    });

    socket.on("updateGame", (game) => {
      dispatch(SET_GAME_BOARD(game));
    });

    socket.on("endGame", (game) => {
      dispatch(SET_GAME_BOARD(game));
    });

    socket.on("resetGame", (game) => {
      dispatch(SET_GAME_BOARD(game));
    });

    return () => {
      socket.emit("userLeaveRoom", id);
      socket.off("userJoinGame");
      socket.off("userLeaveCurrentGame");
      socket.off("ownerLeaveRoom");
      socket.off("startGame");
      socket.off("endGame");
      socket.off("resetGame");
    };
  }, []);

  if (isLoading || !room) return <p>Loading ...</p>;

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <GameArea />
        </Col>
      </Row>
    </Container>
  );
};

export default withAuth(Game);
