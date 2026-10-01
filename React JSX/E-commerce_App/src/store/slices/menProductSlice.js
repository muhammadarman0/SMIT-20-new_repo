import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  menProductApi: [],
  loading: false,
  error: null,
};

export const menProductThunk = createAsyncThunk("shop/menProduct", async () => {
  const [shirtsResponse, shoesResponse] = await Promise.all([
    fetch("https://dummyjson.com/products/category/mens-shirts"),
    fetch("https://dummyjson.com/products/category/mens-shoes"),
  ]);

  const shirtsData = await shirtsResponse.json();
  const shoesData = await shoesResponse.json();

  return [...shirtsData.products, ...shoesData.products];
});

const menProductSlice = createSlice({
  name: "menProduct",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(menProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(menProductThunk.fulfilled, (state, action) => {
        state.menProductApi = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(menProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to get products";
      });
  },
});

export default menProductSlice.reducer;
