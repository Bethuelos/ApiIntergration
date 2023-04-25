import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const initialState = {
    user: JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    token: JSON.parse(localStorage.getItem("token"))
      ? JSON.parse(localStorage.getItem("token"))
      : null,
    isErrorAuth: false,
    isSuccessAuth: false,
    isLoadingAuth: false,
    isErrorAuthConnected: false,
    isSuccessAuthConnected: false,
    isLoadingAuthConnected: false,
    messageAuth: "",
  };


//login
export const login = createAsyncThunk ('auth/login', async (user, thunkAPI) => {
    try{
        return await authService.login(user)
    }
    catch (error){
        const messageAuth =
            (error.response &&
                error.response.data &&
                error.response.data.messageAuth) ||
            error.messageAuth ||
            error.toString();
        return thunkAPI.rejectWithValue(messageAuth);
    }
} )

//register
export const addUser = createAsyncThunk ('auth/addUser', async(user, thunkAPI) => {
  try{
    return await authService.register(user)
  }
  catch (error){
    const messageAuth =
    (error.response &&
        error.response.data &&
        error.response.data.messageAuth) ||
    error.messageAuth ||
    error.toString();
    return thunkAPI.rejectWithValue(messageAuth); 
  }
})


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      reset: (state) => {
        state.user = null;
        state.isErrorAuth = false;
        state.isSuccessAuth = false;
        state.isLoadingAuth = false;
        state.isErrorAuthConnected = false;
        state.isSuccessAuthConnected = false;
        state.isLoadingAuthConnected = false;
  
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        state.messageAuth = "";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.isLoadingAuth = true;
          state.isLoadingAuthConnected = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            if (action.payload.data.success === false) {
                state.isErrorAuth = false;
                state.isSuccessAuth = false;
                state.isLoadingAuth = false;
                state.isErrorAuthConnected = false;
                state.isSuccessAuthConnected = false;
                state.isLoadingAuthConnected = false;
    
                state.user = null;
                state.token = null;
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            } else {
                // seuls admin, superadmin & superviseur pvt accéder
                if (
                ["admin", "superadmin", "superviseur"].includes(
                    action.payload.data.role
                )
                ) {
                state.isLoadingAuth = false;
                state.isSuccessAuth = true;
                state.isLoadingAuthConnected = false;
    
                localStorage.setItem("token", JSON.stringify(action.payload.refreshToken));
                localStorage.setItem("user", JSON.stringify(action.payload.data));
                // console.log(action.payload.refreshToken)
    
                state.token = action.payload.token;
                state.user = action.payload.user;
    
                state.isSuccessAuthConnected = true;
                state.isLoadingAuth = false;
                state.isSuccessAuth = true;
                state.user = action.payload.data;
                } else {

                state.isErrorAuth = false;
                state.isSuccessAuth = false;
                state.isLoadingAuth = false;
                state.isErrorAuthConnected = false;
                state.isSuccessAuthConnected = false;
                state.isLoadingAuthConnected = false;
    
                state.user = null;
                state.token = null;
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                }
            }
        })
        .addCase(login.rejected, (state, action) => {
          state.isErrorAuth = false;
          state.isSuccessAuth = false;
          state.isLoadingAuth = false;
          state.isErrorAuthConnected = false;
          state.isSuccessAuthConnected = false;
          state.isLoadingAuthConnected = false;
  
          state.user = null;
          state.token = null;
  
          localStorage.removeItem("token");
          localStorage.removeItem("user");
  
        })
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;