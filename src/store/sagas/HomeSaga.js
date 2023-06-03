import { takeLatest, call, put } from "redux-saga/effects";
import { fetchAllUsers, fetchAllUsersStart } from "../reducers/HomeSlice";
import { makeRequest } from "../../http/makeRequest";

function* fetchAllUsersSaga(action) {
    try{
        const {data, statusText} = yield call(makeRequest, "get", "users");
        if(statusText === "OK") {
            const sellers = data.filter(user => user.userType === action.payload);
            yield put(fetchAllUsers({users: sellers})); 
        }   
    } catch (error) {
        console.log("Error while fetch all users from home saga: ", error);
    }
}

export default function* WatchHomeSaga() {
    yield takeLatest(fetchAllUsersStart.type, fetchAllUsersSaga);
}