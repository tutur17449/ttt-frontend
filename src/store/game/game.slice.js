import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  init: false,
  currentGame: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    SET_CURRENT_GAME: (state, { payload }) => {
      state.currentGame = payload;
      state.init = true;
    },
    SET_NEW_PLAYER: (state, { payload }) => {
      state.currentGame.users.push(payload);
    },
    REMOVE_PLAYER: (state, { payload }) => {
      state.currentGame.users = [
        ...state.currentGame.users.filter((i) => i !== payload),
      ];
    },
  },
});

export const { SET_CURRENT_GAME, SET_NEW_PLAYER, REMOVE_PLAYER } =
  gameSlice.actions;

export default gameSlice.reducer;
