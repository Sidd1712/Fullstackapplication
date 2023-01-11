import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./api";
import { SingleProductProps } from "../components/SingleProduct/SingleProduct.types";
import { CreateProductFormValues } from "../components/CreateProduct/CreateProduct";

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
  async (productId: string,{rejectWithValue}) => {
    try {
      const response = await API.get(`/products/${productId}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data)
    }
  }
);

export const addProduct = createAsyncThunk("products/addProduct", async (data: CreateProductFormValues,{rejectWithValue}) => {
  try {
    const response = await API.post("/createProduct",data);
    return response.data;
  } catch (error:any) {
    console.log(error);
    return rejectWithValue(error.response.data)
  }
});

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: SingleProductProps, {rejectWithValue}) => {
    try {
      const response = await API.put(`/products/${product.id}`, product);
      return response.data;
    } catch (error:any) {
      console.log(error);
      return rejectWithValue(error.response.data)
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: string, {rejectWithValue}) => {
    try {
      const response = await API.delete(`/products/${productId}`);
      return response.data;
    } catch (error:any) {
      console.log(error);
      return rejectWithValue(error.response.data)
    }
  }
);
