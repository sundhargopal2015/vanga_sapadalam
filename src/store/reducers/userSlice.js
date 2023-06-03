import { createSlice } from "@reduxjs/toolkit";

const userInitialState =  {
  fetchUserStart: false,
  createUserStart: false,
  updatePasswordStart:false,
  isUserAuthenticated: false,
  userNotFound: false,
  userInfo: {
    userName: "",
    userId: "",
    firstName: "",
    lastName: "",
    address: "",
    mobileNo: "",
    userType: "",
    restaurantName: "",
    restaurantId: "",
    deliveryAgentKnownLanguages: [],
    avatar: "",
  },
}
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
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
    checkUserName: (state) => {
      state.fetchUserStart = false;
      state.createUserStart = false;
    },
    updatePasswordStart: (state) => {
      state.updatePasswordStart = true;
    },
    userLogout: () => userInitialState
  },
});

export const { fetchUserStart,createUserStart, saveUserInfo, updatePasswordStart, checkUserName, userLogout } =
  userSlice.actions;
export default userSlice.reducer;
