import { configureStore } from "@reduxjs/toolkit";
//6.reduce import
import userSlice from './reducers/signup';
//1.one 

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})