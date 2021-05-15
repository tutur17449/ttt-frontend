import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import api from "./api/api.slice";
import game from "./game/game.slice";
import games from "./games/games.slice";

const reducer = combineReducers({
  api,
  game,
  games,
});

const store = configureStore({ reducer, devTools: true, middleware: [thunk] });

export default store;
