import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk dapat menghandle status pending, fulfilled, dan rejected
// pending: ketika request sedang berjalan
// fulfilled: ketika request berhasil
// rejected: ketika request gagal

// status ini nantinya bisa kita gunakan di komponen untuk menampilkan loading, error, atau data
export const getAllProducts = createAsyncThunk(
   "product/getAllProducts",
   async () => {
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
   }
);