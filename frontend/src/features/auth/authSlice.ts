// slices/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
};

type AuthState = {
  logined: boolean;
  user: User | null;
};

const initialState: AuthState = {
  logined: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.logined = true;
      state.user = action.payload;
    },
    logout(state) {
      state.logined = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;