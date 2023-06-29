import { put, takeLatest, call } from "redux-saga/effects";
import { fetchMeals, fetchMealsStart } from "../reducers/Meals";
import { makeRequest } from "../../http/makeRequest";
import { fetchSellerMealStart, saveMeal } from "../reducers/RestaurantSlice";


function* fetchMealsSaga(action) {
    try{
        const response = yield call(makeRequest, "get", "meals");
        if(response.statusText === "OK") {
            yield put(fetchMeals(response.data));
        }
    } catch(error) {
        console.log(console.log(error));
    }
}

function* fetchSellerMealsSaga() {
    try{
        const response = yield call(makeRequest, "get", "meals");
        if(response.statusText === "OK") {
            const payload = {
                meals: response.data
            }
            yield put(saveMeal(payload));
        }
        console.log(response);
    } catch(error) {
        console.log(console.log(error));
    }
}


export function* watchMealsSaga() {
    yield takeLatest(fetchMealsStart.type, fetchMealsSaga);
    yield takeLatest(fetchSellerMealStart.type, fetchSellerMealsSaga)
}