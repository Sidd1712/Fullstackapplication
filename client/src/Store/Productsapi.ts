import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
import { SingleProductProps } from "../components/SingleProduct/SingleProduct.types";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await API.get("/products");
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
      const response = await API.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk("products/addProduct", async () => {
  try {
    const response = await API.post("/createProduct");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: SingleProductProps) => {
    try {
      const response = await API.put(`/products/${product.productId}`, product);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: number) => {
    try {
      const response = await API.delete(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
