import { takeLatest, call, put } from "redux-saga/effects";
import { createMealStart, updateMeal } from "../reducers/RestaurantSlice";
import { makeRequest } from "../../http/makeRequest";

function* createMealSaga({ payload }) {
  try {
    const { data, statusText } = yield call(
      makeRequest,
      "post",
      "meals",
      payload.meal
    );
    if (statusText === "Created") {
      const dispatchPayload = {
        meal: data
      }
      yield put(updateMeal(dispatchPayload));
      payload.navigate("/", {
        replace: true,
        state: { isNewMealCreated: true },
      });
    }
  } catch (error) {
    console.log("Error while creating new meal: ", error);
  }
}

export default function* watchRestaurantSaga() {
  yield takeLatest(createMealStart.type, createMealSaga);
}
