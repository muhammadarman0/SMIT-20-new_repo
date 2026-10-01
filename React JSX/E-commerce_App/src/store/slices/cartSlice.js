import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCard: (state, action) => {
      const product = action.payload;

      const isExitProduct = state.cartProduct.some(
        (item) => item.id === product.id,
      );

      if (!isExitProduct) {
        state.cartProduct.push({ ...product, quantity: 1 });
      }
    },

    deleteToCart: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (item) => item.id !== action.payload,
      );
    },
    increamentQuantity: (state, action) => {
      const product = state.cartProduct.find(
        (item) => item.id === action.payload,
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.cartProduct.find(
        (item) => item.id === action.payload,
      );
      if (product) {
        product.quantity -= 1;
      }
    },
    clearCard: (state) => {
      state.cartProduct = [];
    },
  },
});

export const { addToCard, deleteToCart, clearCard,increamentQuantity,decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
