import { createSelector } from "@reduxjs/toolkit";
import { ReduxState } from "../Configure/types";

const getUserDataState = (state: ReduxState) => state.UserData;

export const getWalletAddress = createSelector(
  [getUserDataState],
  (state) => state.address
);

export const getConnectionsStatus = createSelector(
  [getUserDataState],
  (state) => state.connectedStatus
);

export const getConnectionFeedbackStatus = createSelector(
  [getUserDataState],
  (state) => state.status
);
