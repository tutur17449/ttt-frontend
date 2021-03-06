import { useState } from "react";
import { Row, FormGroup, Label, Input } from "reactstrap";
import socket from "../../lib/socket";
import ButtonNeon from "../ButtonNeon";
import "./styles.scss";

const JoinGame = () => {
  const [gameId, setGameId] = useState(null);

  const onClick = () => {
    socket.emit("joinGame", gameId);
  };

  return (
    <Row className="mt-4 mb-4 join-game">
      <h2 className="mb-4">Join private game</h2>
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <FormGroup>
          <Label for="status" className="form-label">
            Game id
          </Label>
          <Input
            type="text"
            name="status"
            id="status"
            placeholder="2e3d5d2f-e549-4fb5-af14-460c62e3ebb3"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          ></Input>
        </FormGroup>
        <ButtonNeon onClick={onClick} label="Join" classes="mt-4 mt-sm-0 p-2" />
      </div>
    </Row>
  );
};

export default JoinGame;
