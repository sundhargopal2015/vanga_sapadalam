import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
    name: "meals",
    initialState: {
        meals: [],
        mealsFetchStart: false
    },

    reducers: {
        fetchMealsStart: (state) => {
            state.mealsFetchStart = true;
        }, 

        fetchMeals: (state, action) => {
            state.mealsFetchStart = false;
            state.meals = action.payload;
        }
    }
});

export const {fetchMeals, fetchMealsStart} = mealsSlice.actions;
export default mealsSlice.reducer; 