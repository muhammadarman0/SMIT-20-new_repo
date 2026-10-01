import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListProduct: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,

  reducers: {
    addToWishList: (state, action) => {
      const product = action.payload;

      const isExitProduct = state.wishListProduct.some(
        (item) => item.id === product.id
      );

      if (!isExitProduct) {
        state.wishListProduct.push(product);
      }
    },

    deleteToWishList: (state, action) => {
      state.wishListProduct = state.wishListProduct.filter(
        (item) => item.id !== action.payload
      );
    },

    toggleWishlist: (state, action) => {
      const product = action.payload;

      const alreadyExists = state.wishListProduct.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        state.wishListProduct = state.wishListProduct.filter(
          (item) => item.id !== product.id
        );
      } else {
        state.wishListProduct.push(product);
      }
    },

    clearWishList: (state) => {
      state.wishListProduct = [];
    },
  },
});

export const {
  addToWishList,
  deleteToWishList,
  clearWishList,
  toggleWishlist,
} = wishListSlice.actions;

export default wishListSlice.reducer;