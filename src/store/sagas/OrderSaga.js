import { takeLatest, call, put } from "redux-saga/effects";
import { orderComplete, placeOrderStart } from "../reducers/orderSlice";
import { makeRequest } from "../../http/makeRequest";

function* placeOrderSaga({ payload }) {
  const data = {
    restaurantId: payload.restaurantId,
    meals: payload.meals,
    orderStatus: payload.orderStatus,
    priceDetails: payload.priceDetails,
    deliveryAgentId: payload.deliveryAgentId,
  };
  const response = yield call(
    makeRequest,
    "post",
    `/users/${payload.userId}/orders`,
    data
  );

  if(response.statusText === "Created") {
    yield put(orderComplete());
  }
}

export default function* watchOrderSaga() {
  yield takeLatest(placeOrderStart.type, placeOrderSaga);
}
