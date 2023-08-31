import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";

const store = configureStore({
   reducer: {
      product: productReducer,
   }
});
console.log("Store berhasil dibuat");

export default store;