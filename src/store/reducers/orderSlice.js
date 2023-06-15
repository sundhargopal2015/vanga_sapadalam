import { createSlice } from "@reduxjs/toolkit";

const calculateMealCost = (mealsCost, meal) => mealsCost + meal.mealCost;
const calculateGst = (mealCost) => (mealCost * 5) / 100;
const calculateTotalAmount = (priceDetails) => {
  const { mealsCost, gst, handlingFee, deliveryCharge, tips } = priceDetails;

  const total = mealsCost + gst + handlingFee + deliveryCharge + tips;

  return total;
};

const initialState = {
  userId: "",
  restaurantId: "",
  meals: [],
  orderStatus: "",
  priceDetails: {
    mealsCost: "",
    handlingFee: "",
    gst: "",
    deliveryCharge: "",
    tips: "",
    total: "",
  },
  deliveryAgentId: "",
};
const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addOneMealToOrder: (state, action) => {
      state.userId = state.userId ? state.userId : action.payload.userId;
      state.restaurantId = state.restaurantId
        ? state.restaurantId
        : action.payload.restaurantId;
      state.meals = state.meals.find(
        (meal) => meal.mealId === action.payload.meal.mealId
      )
        ? state.meals.map((meal) =>
            meal.mealId === action.payload.meal.mealId
              ? { mealId: meal.mealId, quantity: meal.quantity + 1 }
              : meal
          )
        : [...state.meals, { mealId: action.payload.meal.mealId, quantity: 1 }];
        state.priceDetails.mealsCost = calculateMealCost(state.priceDetails.mealsCost, action.meal.mealCost);
    },
    removeOneMealFromOrder: (state, action) => {},
    updateStatus: (state, action) => {},
    placeOrder: (state, action) => {},
  },
});
