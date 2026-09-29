import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productApi: [],
  loading: false,
  error: null,
};

export const asycThunsProduct = createAsyncThunk("shop/product", async () => {
  const response = await fetch("https://dummyjson.com/products?limit=100");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
});

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(asycThunsProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(asycThunsProduct.fulfilled, (state, action) => {
        state.productApi = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(asycThunsProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to get products";
      });
  },
});

export default productSlice.reducer;
