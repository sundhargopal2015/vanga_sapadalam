import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
};
const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,

  reducers: {
    createMealStart: () => {},
    saveMeal: (state, action) => {
      state.meals = [...state.meals, action.payload.meals];
    },
  },
});

export const { createMealStart, saveMeal } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
