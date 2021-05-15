import { createSlice } from "@reduxjs/toolkit";
import { SET_LOADING, SET_COMPLETE } from "../api/api.slice";
import httpClient from "../../lib/axios";

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
      const userIndex = state.currentGame.users.findIndex((i) => i === payload);
      if (userIndex === -1) {
        state.currentGame.users.push(payload);
      }
    },
    REMOVE_PLAYER: (state, { payload }) => {
      state.currentGame.users = [
        ...state.currentGame.users.filter((i) => i !== payload),
      ];
    },
    RESET_CURRENT_GAME: (state, { payload }) => {
      state.currentGame = null;
    },
  },
});

export const {
  SET_CURRENT_GAME,
  SET_NEW_PLAYER,
  REMOVE_PLAYER,
  RESET_CURRENT_GAME,
} = gameSlice.actions;

export default gameSlice.reducer;

// Thunks
export const fetchInitialGame = (id) => async (dispatch, getState) => {
  const { games } = getState();

  if (!games.init) {
    dispatch(SET_LOADING("getCurrentGame"));
    try {
      const { data } = await httpClient.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/games/${id}`
      );
      dispatch(SET_CURRENT_GAME(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_COMPLETE("getCurrentGame"));
    }
  }
};
