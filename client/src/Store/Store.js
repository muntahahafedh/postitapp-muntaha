import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Features/UserSlice"; //import the reducer
import postReducer from "../Features/PostSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postReducer,
});

const persistConfig = {
  key: "reduxstore",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistore = persistStore(store);
