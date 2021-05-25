import GridCel from "./GridCel";
import "./styles.scss";

const GameGrid = ({ data, userPlay, symbol }) => {
  console.log(data);
  return (
    <div id="playground">
      <div className="playground-row">
        <GridCel
          content={data?.board[0]}
          id={0}
          onClick={userPlay}
          classes="playground-cel"
          symbol={symbol}
        />
        <GridCel
          content={data?.board[1]}
          id={1}
          onClick={userPlay}
          classes="playground-cel bnlr"
          symbol={symbol}
        />
        <GridCel
          content={data?.board[2]}
          id={2}
          onClick={userPlay}
          classes="playground-cel"
          symbol={symbol}
        />
      </div>
      <div className="playground-row">
        <GridCel
          content={data?.board[3]}
          id={3}
          onClick={userPlay}
          classes="playground-cel bntb "
          symbol={symbol}
        />
        <GridCel
          content={data?.board[4]}
          id={4}
          onClick={userPlay}
          classes="playground-cel bntb bnlr"
          symbol={symbol}
        />
        <GridCel
          content={data?.board[5]}
          id={5}
          onClick={userPlay}
          classes="playground-cel bntb "
          symbol={symbol}
        />
      </div>
      <div className="playground-row">
        <GridCel
          content={data?.board[6]}
          id={6}
          onClick={userPlay}
          classes="playground-cel"
          symbol={symbol}
        />
        <GridCel
          content={data?.board[7]}
          id={7}
          onClick={userPlay}
          classes="playground-cel bnlr"
          symbol={symbol}
        />
        <GridCel
          content={data?.board[8]}
          id={8}
          onClick={userPlay}
          classes="playground-cel"
          symbol={symbol}
        />
      </div>
    </div>
  );
};

export default GameGrid;
