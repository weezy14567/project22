import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'uix',
  initialState: {
    loading: false,
    error: false,
    uix: null,
  },
  reducers: {
    loginstart: (state) => {
      state.loading = true;
    },
    loginsuccess: (state, action) => {
      state.uix = action.payload;
    },
    loginfail: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginfail, loginstart, loginsuccess } = userSlice.actions;

export default userSlice.reducer;
