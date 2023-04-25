// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import userService from "./userService";

// const initialState = {
//     users: [],
//     isErrorUser: false,
//     isSuccessUser: false,
//     isLoadingUser: false,
//     isSuccessUserCreate: false,
//     isLoadingUserUpdate: false,
//     isSuccessUserUpdate: false,
//     isLoadingUserAction: false,
//     isSuccessUserAction: false,

//     messageUser: "",
// }

// export const addUser = createAsyncThunk(
//     "user/addUser",
//     async (userData, thunkAPI) => {
//         const user = userService.addUser(userData)
//         return user.data
//     }
// )

// export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         reset: (state) => initialState
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addUser.pending, (state) => {
//                 state.isLoadingUser = true;
//             })
//             .addCase(addUser.fulfilled, (state, action) => {
//                 state.isSuccessUser = true;
//                 state.users = action.payload.data
//             })
//             .addCase(addUser.rejected, (state, action) => {
//                 state.isErrorUser = true;
//                 if (action.payload === 'failed'){
//                     alert('Registration failed');
//                 }
//             })
//     }
// })


// export const { reset } = userSlice.actions;
// export default userSlice.reducer

