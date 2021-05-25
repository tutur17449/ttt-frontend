import { Popover, PopoverBody } from "reactstrap";
import { useState } from "react";
import "./styles.scss";

const GameInfos = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const copyId = async () => {
    await navigator.clipboard.writeText(id);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div id="game-infos" onClick={copyId}>
      <p id="tooltipid">
        <span>Share this #</span>
        {id}
      </p>
      <Popover
        placement="bottom"
        isOpen={isOpen}
        target="tooltipid"
        toggle={toggle}
      >
        <PopoverBody>ID copied !</PopoverBody>
      </Popover>
    </div>
  );
};

export default GameInfos;
