import { SingleProductProps } from "../components/SingleProduct/SingleProduct.types";
import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  addProduct,
} from "./Productsapi";

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
    id: "",
    sellerId: 0,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.productId
            ? (product = action.payload)
            : product
        );
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        let index = state.products.findIndex(
          ({ id }) => id === action.payload.productId
        );
        state.products.splice(index, 1);
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});
