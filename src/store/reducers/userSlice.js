import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    fetchUserStart: false,
    createUserStart: false,
    isUserAuthenticated: false,
    userInfo: {
      userName: "",
      firstName: "",
      lastName: "",
      address: "",
      mobileNo: "",
      userType: "",
      restaurantName: "",
      restaurantAddress: "",
      deliveryAgentKnownLanguages: [],
      avatar: "",
    },
  },
  reducers: {
    fetchUserStart: (state) => {
      state.fetchUserStart = true;
    },
    createUserStart: (state) => {
      state.createUserStart = true;
    },
    saveUserInfo: (state, action) => {
        console.log("user slice user save", action)
      state.fetchUserStart = false;
      state.createUserStart = false;
      state.isUserAuthenticated = action.payload.isUserAuthenticated;
      state.userInfo = action.payload.userInfo;
    },
    updatePassword: (state, action) => {
      state.fetchUserStart = false;
      state.createUserStart = false;
      state.userInfo.password = action.payload.password;
    },
  },
});

export const { fetchUserStart,createUserStart, saveUserInfo, updatePassword } =
  userSlice.actions;
export default userSlice.reducer;
