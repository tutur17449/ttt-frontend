import { createSlice } from "@reduxjs/toolkit";
import { SET_LOADING, SET_COMPLETE } from "../api/api.slice";
import httpClient from "../../lib/axios";

const initialState = {
  init: false,
  currentGame: null,
  symbol: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    SET_CURRENT_GAME: (state, { payload }) => {
      state.currentGame = payload.game;
      state.init = true;
      if (payload.symbol) {
        state.symbol = "X";
      } else {
        state.symbol = "O";
      }
    },
    SET_NEW_PLAYER: (state, { payload }) => {
      const userIndex = state.currentGame.users.findIndex(
        (i) => i.id === payload.id
      );
      if (userIndex === -1) {
        state.currentGame.users.push(payload);
      }
    },
    REMOVE_PLAYER: (state, { payload }) => {
      state.currentGame.users = [
        ...state.currentGame.users.filter((i) => i.id !== payload),
      ];
    },
    RESET_CURRENT_GAME: (state, { payload }) => {
      state.currentGame = null;
    },
    SET_GAME_BOARD: (state, { payload }) => {
      state.currentGame.game = payload;
    },
  },
});

export const {
  SET_CURRENT_GAME,
  SET_NEW_PLAYER,
  REMOVE_PLAYER,
  RESET_CURRENT_GAME,
  SET_GAME_BOARD,
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
