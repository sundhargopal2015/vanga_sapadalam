import { put, takeLatest, call } from "redux-saga/effects";
import { userOperationsLoading, saveUserInfo } from "../reducers/userSlice";
import { makeRequest } from "../../http/makeRequest";

function* updateUserInfoSaga({payload}) {
  try {
    yield put(userOperationsLoading());

    const response = yield call(makeRequest, payload);
    const { statusText, data } = response;
    if (statusText === "Created") {
      const payload = {
        isUserAuthenticated: true,
        userInfo: {
          userName: data.userName,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          mobileNo: data.moNo,
          userType: data.userType,
          restaurantName: data.restaurantName,
          restaurantAddress: data.restaurantAddress,
          deliveryAgentKnownLanguages: data.deliveryAgentKnownLanguages,
          avatar: data.avatar,
        },
      };
      yield put(saveUserInfo(payload));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchUserSage() {
  yield takeLatest(userOperationsLoading.type, updateUserInfoSaga);
}
