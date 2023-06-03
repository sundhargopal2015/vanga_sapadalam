import { put, takeLatest, call } from "redux-saga/effects";
import {
  saveUserInfo,
  fetchUserStart,
  createUserStart,
  checkUserName,
  updatePasswordStart,
} from "../reducers/userSlice";
import { makeRequest } from "../../http/makeRequest";

function* userLoginSaga({ payload }) {
  const { userName, password, navigate } = payload;
  try {
    //yield put(fetchUserStart)
    const response = yield call(makeRequest, "get", "users");
    if (response.statusText === "OK") {
      const user = response.data.find(
        (user) => user.userName === userName && user.password === password
      );
      if (user) {
        const userPayload = {
          isUserAuthenticated: true,
          userInfo: {
            userId: user.userId,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            mobileNo: user.moNo,
            userType: user.userType,
            restaurantName: user.restaurantName,
            restaurantId: user.restaurantId,
            deliveryAgentKnownLanguages: user.deliveryAgentKnownLanguages,
            avatar: user.avatar,
          },
        };
        yield put({ type: saveUserInfo.type, payload: userPayload });
        navigate("/", {state: {isNewMealCreated: false}});
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* createUserSaga({ payload }) {
  const { method, endpoint, navigate } = payload;
  try {
    //yield put(createUserStart());
    const response = yield call(makeRequest, method, endpoint, payload.data);
    const { statusText, data } = response;
    if (statusText === "Created") {
      const userPayload = {
        isUserAuthenticated: true,
        userInfo: {
          userName: data.userName,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          mobileNo: data.moNo,
          userType: data.userType,
          restaurantName: data.restaurantName,
          restaurantId: data.restaurantId,
          deliveryAgentKnownLanguages: data.deliveryAgentKnownLanguages,
          avatar: data.avatar,
        },
      };
      yield put(saveUserInfo(userPayload));
      navigate("/", {state: {isNewMealCreated: false}});    }
  } catch (error) {
    console.log(error);
  }
}

function* checkUserNameSaga({ payload }) {
  const response = yield call(makeRequest, "get", "users");
  if (response.statusText === "OK") {
    const user = response.data.find(
      (user) => user.userName === payload.userName
    );
    if (user) {
      const userPayload = {
        userName: user.userName,
        userId: user.userId,
      };
      payload.navigate("/update/password", { state: userPayload });
    } else {
      payload.navigate("/forgot/password", {
        replace: true,
        state: {
          invalidUser: true,
        },
      });
    }
  }
}

function* updatePasswordSaga({ payload }) {
  try {
    const response = yield call(makeRequest, "put", `users/${payload.userId}`, {
      password: payload.password,
    });
    if (response.statusText === "OK") {
      payload.navigate("/login");
    } else {
      console.log("Password not updated please check with admin");
    }
  } catch (error) {
    console.log("Error during the update password: ", error);
  }
}

export function* watchUserSaga() {
  yield takeLatest(fetchUserStart.type, userLoginSaga);
  yield takeLatest(createUserStart.type, createUserSaga);
  yield takeLatest(checkUserName.type, checkUserNameSaga);
  yield takeLatest(updatePasswordStart.type, updatePasswordSaga);
}
