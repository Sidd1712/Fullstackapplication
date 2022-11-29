import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, signupUser } from "./usersapi";


const initialState = {
  userInfo: { username: "", password: "", email: "", userId: "" },
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userInfo = {

          username: action.payload.username, 
          password: action.payload.password,
          email: action.payload.email,
          userId: action.payload.userId

        }
        state.authenticated = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authenticated = false;
        state.userInfo = {
          username: "",
          password: "",
          email: "",
          userId: "",
        };
      }).addCase(signupUser.fulfilled, (state, action) => {
        state.userInfo = {

          username: action.payload.username, 
          password: action.payload.password,
          email: action.payload.email,
          userId: action.payload.userId

        }
        state.authenticated = true;
      })
  },
});
