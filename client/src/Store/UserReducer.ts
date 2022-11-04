import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./usersapi";

const initialState = {
  userInfo: {},
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.token = action.payload.token;
    });
  },
});
