export const getCurrentGame = (state) => {
  return state.game.currentGame;
};

export const getUserSymbol = (state) => {
  return state.game.symbol;
};

export const getGame = (state) => {
  return state.game.currentGame.game;
};

export const getPlayer2 = (currentUser) => (state) => {
  const user = state.game.currentGame.users.find((i) => i.id !== currentUser);
  return user;
};
