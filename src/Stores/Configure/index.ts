import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { createBrowserHistory, History } from "history";
import { userDataReducer } from "../UserData/slice";

export const history = createBrowserHistory() as History;

const rootReducer = combineReducers({
  UserData: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store: Store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
