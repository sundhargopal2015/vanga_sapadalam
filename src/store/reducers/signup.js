import { createSlice } from "@reduxjs/toolkit";

//3.creat reducer folder and sginup page

const userSlice = createSlice({
    name: "user",
    initialState:{
        //8 isUserAuthenticated
        isUserAuthenticated:false,
        userInfo:{
            userName:"",
            firstName:"",
            lastName:"",
            address:"",
            mobileNo:"",
            userType:"",
            restaruntName:"",
            restaruntAddress:"",
            deliveryAgentKnownLanguages:[]


        }
    },
    reducers:{
        saveUserInfo:( state, action) =>{
            //9.
            state.isUserAuthenticated= action.payload.isUserAuthenticated;
           state.userInfo = action.payload.userInfo;
        },
        updatePassword:(state, action)=>{
            state.userInfo.password = action.payload.password
        }
    }
});

// 4. destructuring export

export const {saveUserInfo,updatePassword} = userSlice.actions;
export default userSlice.reducer;