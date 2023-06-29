import { createSlice } from "@reduxjs/toolkit";

const calculateMealCost = (mealsCost, meal) =>
  mealsCost + parseInt(meal.mealCost);

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
    mealsCost: 0,
    handlingFee: 3,
    gst: 0,
    deliveryCharge: 30,
    tips: 0,
    total: 0,
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
      state.priceDetails.mealsCost = calculateMealCost(
        state.priceDetails.mealsCost,
        action.payload.meal
      );
    },
    removeOneMealFromOrder: (state, action) => {
      const meal = state.meals.find(
        (meal) => meal.mealId === action.payload.mealId
      );
      if (state.meals.length === 1 && state.meals[0].quantity === 1) {
        return initialState;
      } else if (meal.quantity > 1) {
        state.meals = state.meals.map((meal) =>
          meal.mealId === action.payload.mealId
            ? {
                ...meal,
                quantity: meal.quantity - 1,
              }
            : meal
        );
      } else if (meal.quantity === 1) {
        state.meals = state.meals.filter(
          (meal) => meal.mealId !== action.payload.mealId
        );
      }
    },
    updatePriceDetails: (state, action) => {
      state.priceDetails.gst = calculateGst(state.priceDetails.mealsCost);
      state.priceDetails.total = calculateTotalAmount(state.priceDetails);
    },
    updateOrderStatus: (state, action) => {
      state.orderStatus = action.payload.orderStatus
    },
    placeOrderStart: (state, action) => {},
    orderComplete: (state, action) => {
      return initialState;
    },
  },
});

export const {
  addOneMealToOrder,
  removeOneMealFromOrder,
  updatePriceDetails,
  updateOrderStatus,
  placeOrderStart,
  orderComplete,
} = orderSlice.actions;
export default orderSlice.reducer;
