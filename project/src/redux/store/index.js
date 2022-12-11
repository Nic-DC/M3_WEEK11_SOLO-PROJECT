import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favoriteReducer from "../reducers/favoriteReducer";
import songsResultReducer from "../reducers/songsResultReducer";
import searchMusicReducer from "../reducers/searchMusicReducer";

import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { encryptTransform } from "redux-persist-transform-encrypt";

const allReducers = combineReducers({
  favorites: favoriteReducer,
  songsResult: songsResultReducer,
  searchMusic: searchMusicReducer,
});

const persistConfig = {
  key: `root`,
  storage: localStorage,
  transforms: [encryptTransform({ secretKey: process.env.REACT_APP_PRIVACY_KEY })],
};

const peristedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({ reducer: peristedReducer });

export const persistor = persistStore(store);
