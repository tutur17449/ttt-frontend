const GameStats = ({ data }) => {
  return (
    <div id="game-stats">
      <p>Total game(s): {data?.stats.T ?? 0}</p>
      <p>X win {data?.stats.X ?? 0} game(s)</p>
      <p>O win {data?.stats.O ?? 0} game(s)</p>
    </div>
  );
};

export default GameStats;
