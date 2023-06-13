import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sellerMeals: [],
};
const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,

  reducers: {
    createMealStart: () => {},
    fetchSellerMealStart: () => {},
    updateMeal: (state, action) => {
      state.sellerMeals = [...state.sellerMeals, action.payload.meal];
    },
    saveMeal: (state, action) => {
      console.log("saveMeal", action);
      state.sellerMeals =action.payload.meals;
    },
  },
});

export const { createMealStart, saveMeal, fetchSellerMealStart, updateMeal } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
