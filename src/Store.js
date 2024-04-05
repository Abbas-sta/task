import { configureStore } from "@reduxjs/toolkit";
import ProductSLice from "./E-commerce-Store/features/productSlice";
import homeSlice from "./E-commerce-Store/features/homeSlice"; 
// import CartS

export const store = configureStore({
    reducer: {
      product: ProductSLice,
      home: homeSlice
      // cart: CartSlice
    },
  });