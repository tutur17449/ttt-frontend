import "./styles.scss";

const GameGrid = ({ data, userPlay }) => {
  return (
    <div id="playground">
      <div className="playground-row">
        <div className="playground-cel" onClick={() => userPlay(0)}>
          <span>{data?.board[0]}</span>
        </div>
        <div className="playground-cel" onClick={() => userPlay(1)}>
          <span>{data?.board[1]}</span>
        </div>
        <div className="playground-cel" onClick={() => userPlay(2)}>
          <span>{data?.board[2]}</span>
        </div>
      </div>
      <div className="playground-row">
        <div className="playground-cel" onClick={() => userPlay(3)}>
          <span>{data?.board[3]}</span>
        </div>
        <div className="playground-cel" onClick={() => userPlay(4)}>
          <span>{data?.board[4]}</span>
        </div>
        <div className="playground-cel" onClick={() => userPlay(5)}>
          <span>{data?.board[5]}</span>
        </div>
      </div>
      <div className="playground-row">
        <div className="playground-cel" onClick={() => userPlay(6)}>
          <span>{data?.board[6]}</span>
        </div>
        <div className="playground-cel" onClick={() => userPlay(7)}>
          <span>{data?.board[7]}</span>
        </div>
        <div className="playground-cel" onClick={() => userPlay(8)}>
          <span>{data?.board[8]}</span>
        </div>
      </div>
    </div>
  );
};

export default GameGrid;
