import { createSlice } from "@reduxjs/toolkit";
import { UserDataState } from "./types";

export const userDataInitialState: UserDataState = {
  address: "",
  connectedStatus: false,
  status: "",
};

const userDataSlice = createSlice({
  name: "userData",
  initialState: userDataInitialState,
  reducers: {
    updateUserData: (state, { payload }) => {
      console.log("user data updated");
      return {
        ...state,
        ...payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
const { updateUserData } = userDataSlice.actions;

const userDataReducer = userDataSlice.reducer;

export { userDataReducer, updateUserData };
