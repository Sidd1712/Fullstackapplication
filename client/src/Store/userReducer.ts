import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./usersApi";

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      // state.userToken = action.payload.userToken;
    });
  },
});
