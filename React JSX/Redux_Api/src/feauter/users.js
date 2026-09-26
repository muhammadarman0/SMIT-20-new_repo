import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const allUserThunk = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const response = await axios.get(`https://auth-be-five.vercel.app/api/user`);
    

    return response.data.data
    
    
  } catch (error) {
    
  }
})

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    getAllUserStart: (state) => {
      state.loading = true;
    },
    getAllSuccessUser: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(allUserThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allUserThunk.fulfilled, (state, action) => {
      state.users = action.payload;
      ((state.loading = false), (state.error = ""));
    });
    builder.addCase(allUserThunk.rejected, (state, action) => {
     state.error = "Failed to get user"
      
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
