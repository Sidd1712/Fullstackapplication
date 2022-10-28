import { SingleProductProps } from "../components/SingleProduct/SingleProduct.types";
import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./Productsapi";
import { Action } from "@remix-run/router";

interface ProductState {
  products: SingleProductProps[];
  product: SingleProductProps;
}

const initialState: ProductState = {
  products: [],
  product: {
    name: "",
    price: "",
    image: "",
    desc: "",
    seller: "",
    productHref: "",
    productId: 0,
    sellerId: 0,
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
