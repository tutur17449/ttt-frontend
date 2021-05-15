import { useState } from "react";
import { Button, Row, FormGroup, Label, Input } from "reactstrap";
import socket from "../../lib/socket";

const CreateGame = () => {
  const [gameStatus, setGameStatus] = useState("private");

  const onClick = () => {
    socket.emit("createNewGame", gameStatus);
  };

  return (
    <Row className="mt-4 mb-4">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <FormGroup className="d-flex flex-row align-items-center">
          <Label for="status">Choose game status</Label>
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
        <Button color="primary" onClick={onClick}>
          Create new game
        </Button>
      </div>
    </Row>
  );
};

export default CreateGame;
