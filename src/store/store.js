import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import HomeSlice from "./reducers/HomeSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import RestaurantSlice from "./reducers/RestaurantSlice";
import mealsSlice from "./reducers/Meals";
import orderSlice from "./reducers/orderSlice";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    user: userSlice,
    home: HomeSlice,
    restaurant: RestaurantSlice,
    meals: mealsSlice,
    order: orderSlice
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
