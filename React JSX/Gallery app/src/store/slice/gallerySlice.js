import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getGallery: [],
  loading: false,
  error: "",
};

export const galleryThunck = createAsyncThunk(
  "gallery/getGallery",
  async ({ page, limit }) => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
    );

    return response.data;
  },
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(galleryThunck.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(galleryThunck.fulfilled, (state, action) => {
        state.getGallery = action.payload;
        state.loading = false;
      })

      .addCase(galleryThunck.rejected, (state) => {
        state.loading = true;
        state.error = "API error";
      });
  },
});

export default gallerySlice.reducer;
