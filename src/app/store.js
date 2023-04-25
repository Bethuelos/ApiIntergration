import { configureStore } from '@reduxjs/toolkit';
// import userSlice from '../features/user/userSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userSlice.reducer,
  },
});

