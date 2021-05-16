export const getCurrentGame = (state) => {
  return state.game.currentGame;
};

export const getUserSymbol = (state) => {
  return state.game.symbol;
};

export const getGame = (state) => {
  return state.game.currentGame.game;
};
