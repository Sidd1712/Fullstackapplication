import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productSlice } from "./Reducer";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; //

export default store;
