import api from "./api";
import { FormValue } from "../components/Login/Login";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async (email: FormValue) => {
    try {
      const response = await api.post("/login");
      console.log(response.data);
      setToken(response.data.token);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const setToken = (token: string) => {
  const bearerToken = `bearer ${token}`;
  localStorage.setItem("bearerToken", bearerToken);
  axios.defaults.headers.common["Authorization"] = bearerToken;
};
