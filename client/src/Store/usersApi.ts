import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
import axios from "axios";
import { FormValues } from "../components/Login/Login";

export const loginUser = createAsyncThunk(
  "user/login",
  async (email: FormValues) => {
    try {
      const response = await API.post("/login", { email });
      setAuthorizationHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// userAction.js

const setAuthorizationHeader = (token: string) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
