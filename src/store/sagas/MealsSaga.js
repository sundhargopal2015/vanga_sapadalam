import { put, takeLatest, call } from "redux-saga/effects";
import { fetchMealsStart } from "../reducers/Meals";


function* fetchMealsSaga(action) {
    try{
        //Task
        console.log(action, "fetch meals saga");
        yield console.log("Task");
    } catch(error) {
        console.log(console.log(error));
    }
}


export function* watchMealsSaga() {
    yield takeLatest(fetchMealsStart.type, fetchMealsSaga);
}