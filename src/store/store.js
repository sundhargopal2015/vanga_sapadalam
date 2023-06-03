import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import HomeSlice from "./reducers/HomeSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    user: userSlice,
    home: HomeSlice
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
