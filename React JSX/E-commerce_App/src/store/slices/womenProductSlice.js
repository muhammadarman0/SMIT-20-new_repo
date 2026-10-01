import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  womenProductApi: [],
  loading: false,
  error: null,
};

export const womenProductThunk = createAsyncThunk("shop/womenProduct", async () => {
  const [
    dressResponse,
    shoesResponse,
    bagsResponse,
    jewelleryResponse,
    sunglassesResponse,
  ] = await Promise.all([
    fetch("https://dummyjson.com/products/category/womens-dresses"),
    fetch("https://dummyjson.com/products/category/womens-shoes"),
    fetch("https://dummyjson.com/products/category/womens-bags"),
    fetch("https://dummyjson.com/products/category/womens-jewellery"),
    fetch("https://dummyjson.com/products/category/sunglasses"),
  ]);

  const shirtsData = await dressResponse.json();
  const shoesData = await shoesResponse.json();
  const bagsData = await bagsResponse.json();
  const jewelleryData = await jewelleryResponse.json();
  const sunglassesData = await sunglassesResponse.json();

  return [...shirtsData.products, ...shoesData.products, ...bagsData.products,...sunglassesData.products,...jewelleryData.products];
});

const womenProductSlice = createSlice({
  name: "womenProduct",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(womenProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(womenProductThunk.fulfilled, (state, action) => {
        state.womenProductApi = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(womenProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to get products";
      });
  },
});

export default womenProductSlice.reducer;
