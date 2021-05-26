import { useState } from "react";
import { Row, FormGroup, Label, Input } from "reactstrap";
import socket from "../../lib/socket";
import ButtonNeon from "../ButtonNeon";
import "./styles.scss";

const CreateGame = () => {
  const [gameStatus, setGameStatus] = useState("private");

  const onClick = () => {
    socket.emit("createNewGame", gameStatus);
  };

  return (
    <Row className="mt-4 mb-4 create-game">
      <h2 className="mb-4">Create new game</h2>
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <FormGroup>
          <Label for="status" className="form-label">
            Game status
          </Label>
          <Input
            type="select"
            name="status"
            id="status"
            value={gameStatus}
            onChange={(e) => setGameStatus(e.target.value)}
          >
            <option value="private">private</option>
            <option value="public">public</option>
          </Input>
        </FormGroup>
        <ButtonNeon
          onClick={onClick}
          label="Create"
          classes="mt-4 mt-sm-0 p-2"
        />
      </div>
    </Row>
  );
};

export default CreateGame;
