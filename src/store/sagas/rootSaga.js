
import { all } from "redux-saga/effects";
import { watchUserSaga } from "./userSaga";
import WatchHomeSaga from "./HomeSaga";

export default function* rootSaga() {
    yield all([
        watchUserSaga(),
        WatchHomeSaga()
    ])
}