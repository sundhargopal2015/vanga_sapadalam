import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
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
            avatar: ""
        }
    },
    reducers: {
        userOperationsLoading: (state) => {
            state.isLoading = true;
        },
        saveUserInfo: (state, action) => {
            state.isLoading = false;
            state.isUserAuthenticated = action.payload.isUserAuthenticated;
            state.userInfo = action.payload.userInfo;
        },
        updatePassword: (state, action) => {
            state.isLoading = false;
            state.userInfo.password = action.payload.password
        }
    }
});

export const {userOperationsLoading, saveUserInfo, updatePassword } = userSlice.actions;
export default userSlice.reducer;