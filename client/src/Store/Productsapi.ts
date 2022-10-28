import api from "./api";

import { createAsyncThunk } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await api.get("/products");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId: number) => {
    try {
      const response = await api.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
