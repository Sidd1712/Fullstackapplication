import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
import axios from "axios";
import { LoginFormValues } from "../components/Login/Login";
import { SignupFormValues } from "../components/Signup/Signup";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: LoginFormValues) => {
    try {
      const response = await API.post("/login", {
        email: email,
        password: password,
      });
      setAuthorizationHeader(response.data.token);
      console.log("response.data", response.data.user);
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "user/signup",
  async ({ username, email, password }: SignupFormValues) => {
    try {
      const response = await API.post("/createUser", {
        email: email,
        password: password,
        username: username,
      });
      setAuthorizationHeader(response.data.token);
      console.log("response.data", response.data.user);
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

const logout = () => {
  console.log("localStorage", localStorage);
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  console.log("localStorage", localStorage);
};

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await logout();
});

const setAuthorizationHeader = (token: string) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
