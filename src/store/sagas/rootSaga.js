
import { all } from "redux-saga/effects";
import { watchUserSaga } from "./userSaga";
import WatchHomeSaga from "./HomeSaga";
import watchRestaurantSaga from "./RestaurantSaga";
import { watchMealsSaga } from "./MealsSaga";

export default function* rootSaga() {
    yield all([
        watchUserSaga(),
        WatchHomeSaga(),
        watchRestaurantSaga(),
        watchMealsSaga()
    ])
}