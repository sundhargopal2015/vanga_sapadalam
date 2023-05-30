import { put, takeLatest, call } from "redux-saga/effects";
import {
  saveUserInfo,
  fetchUserStart,
  createUserStart,
} from "../reducers/userSlice";
import { makeRequest } from "../../http/makeRequest";

function* userLoginSaga({ payload }) {
  const {userName, password, navigate} = payload;
  try {
    //yield put(fetchUserStart)
    const response = yield call(makeRequest, "get",
      "users",
    );
    if(response.statusText === "OK") {
      const user = response.data.find(
        (user) => user.userName === userName && user.password === password
      );
      if (user) {
        const userPayload = {
          isUserAuthenticated: true,
          userInfo: {
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            mobileNo: user.moNo,
            userType: user.userType,
            restaurantName: user.restaurantName,
            restaurantAddress: user.restaurantAddress,
            deliveryAgentKnownLanguages: user.deliveryAgentKnownLanguages,
            avatar: user.avatar
          },
        };
        yield put({type: saveUserInfo.type, payload: userPayload});
        navigate("/");
      }
    }
    console.log(response, "from user Login saga");
  } catch (error) {
    console.log(error);
  }
}

function* createUserSaga({ payload }) {
  try {
    //yield put(createUserStart());
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
  yield takeLatest(fetchUserStart.type, userLoginSaga);
  yield takeLatest(createUserStart.type, createUserSaga);
}
