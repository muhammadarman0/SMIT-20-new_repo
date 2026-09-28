import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: true,
};

const authSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setCurrentUser: (state, action) => {
        console.log(state);
        
      state.loading = false;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, logout } = authSlice.actions;

export default authSlice.reducer;
