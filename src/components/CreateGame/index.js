import { useState } from "react";
import { Button, Row, FormGroup, Label, Input } from "reactstrap";
import socket from "../../lib/socket";
import "./styles.scss";

const CreateGame = () => {
  const [gameStatus, setGameStatus] = useState("private");

  const onClick = () => {
    socket.emit("createNewGame", gameStatus);
  };

  return (
    <Row className="mt-4 mb-4">
      <h2 className="mb-4">Create new game</h2>
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <FormGroup className="d-flex flex-row align-items-center">
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
        <Button color="primary" onClick={onClick} className="mt-4 mt-sm-0">
          Create new game
        </Button>
      </div>
    </Row>
  );
};

export default CreateGame;
