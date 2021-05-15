import { createSlice } from "@reduxjs/toolkit";
import { SET_LOADING, SET_COMPLETE } from "../api/api.slice";
import httpClient from "../../lib/axios";

const initialState = {
  init: false,
  gamesList: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    SET_INITIAL_GAMES: (state, { payload }) => {
      state.gamesList = payload.games;
      state.init = true;
    },
    SET_NEW_GAME: (state, { payload }) => {
      state.gamesList = [payload, ...state.gamesList];
    },
    DELETE_GAME: (state, { payload }) => {
      state.gamesList = [...state.gamesList.filter((i) => i.id !== payload)];
    },
    UPDATE_GAME: (state, { payload }) => {
      const gameIndex = state.gamesList.findIndex((i) => i.id === payload.id);
      if (gameIndex !== -1) {
        state.gamesList[gameIndex] = payload;
      }
    },
  },
});

export const { SET_INITIAL_GAMES, SET_NEW_GAME, DELETE_GAME, UPDATE_GAME } =
  gamesSlice.actions;

export default gamesSlice.reducer;

// Thunks
export const fetchInitialGames = () => async (dispatch, getState) => {
  const { games } = getState();

  if (!games.init) {
    dispatch(SET_LOADING("getInitialGames"));
    try {
      const { data } = await httpClient.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/games`
      );
      dispatch(SET_INITIAL_GAMES(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_COMPLETE("getInitialGames"));
    }
  }
};
