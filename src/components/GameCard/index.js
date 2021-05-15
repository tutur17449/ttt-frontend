import "./styles.scss";

const GameCard = ({ data, onClick }) => {
  return (
    <div className="game-card" onClick={() => onClick(data.id)}>
      <p>Game {data.id}</p>
      <p>Owner {data.owner}</p>
      <p>Users : {data.users.length}/ 2</p>
    </div>
  );
};

export default GameCard;
