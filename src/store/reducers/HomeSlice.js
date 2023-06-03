import { createSlice } from "@reduxjs/toolkit";

const homeInitialState = {
    users: []
}

const HomeSlice = createSlice({
    name: "home",
    initialState: homeInitialState,

    reducers: {
        fetchAllUsersStart: () => {},
        fetchAllUsers: (state, {payload}) => {
            state.users = payload.users;
        }
    }
})

export const {fetchAllUsers, fetchAllUsersStart} = HomeSlice.actions;
export default HomeSlice.reducer;