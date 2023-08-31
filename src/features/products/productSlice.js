import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getAllProducts } from "./productApiSlice";

const productEntity = createEntityAdapter({
   selectId: (product) => product.id,
});
console.log("product entitiy : ", productEntity);

// Slice disini adalah tempat untuk mendefinisikan reducer dan action
// reducer adalah fungsi yang mengubah initial state menjadi state yang baru
// action adalah fungsi yang mengembalikan nilai yang akan digunakan oleh reducer untuk mengubah state
// action memiliki property type dan payload
// type adalah string yang mendeskripsikan action yang akan dilakukan
// payload adalah data yang dibutuhkan untuk melakukan action
// action ini akan digunakan di komponen untuk melakukan action

// reducer akan digunakan di store untuk mengubah state
// action akan digunakan di komponen untuk melakukan action

// jadi, alurnya adalah: action -> reducer -> store -> komponen
// action akan mengambil perubahan dari komponen, lalu mengirim perubahan tersebut ke reducer
// reducer akan mengubah state di store sesuai dengan action yang diterima
// komponen akan mengambil state baru dari store untuk ditampilkan di component

// untuk mengirim action ke reducer, kita perlu menggunakan fungsi dispatch
// dispatch adalah fungsi yang akan mengirim action ke reducer
// dispatch akan mengambil action yang akan dikirim ke reducer

const productSlice = createSlice({
   name: "product",
   initialState: productEntity.getInitialState(),
   // initialState: {
   //    products: [
   //       {
   //          id: 1,
   //          name: "Product 1",
   //          price: 10000,
   //       }
   //    ],
   // },
   // reducers: {
   //    showProduct: (state, action) => {
   //       state.id = action.payload.id;
   //    },
   // },
   // extraReducers: {
   //    [getAllProducts.fulfilled]: (state, action) => {
   //       productEntity.setAll(state, action.payload);
   //    },
   // } 
   extraReducers: (builder) => {
      builder
         .addCase(getAllProducts.fulfilled, (state, action) => {
            productEntity.setAll(state, action.payload);
         })
         .addCase(getAllProducts.pending, (state, action) => {
            console.log("Loading...");
         })
   }
});

export const productSelectors = productEntity.getSelectors(state => state.product);
export const { showProduct } = productSlice.actions;
export default productSlice.reducer;  