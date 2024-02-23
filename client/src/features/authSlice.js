import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('user') ? true : false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: state => {
      localStorage.setItem('user', 'example_user');
      state.isLoggedIn = true;
    },
    logoutUser: state => {
      localStorage.removeItem('user');
      localStorage.removeItem('userID');
      state.isLoggedIn = false;
    }
  }
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;