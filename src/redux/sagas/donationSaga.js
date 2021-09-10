
import {call, fork, put, takeEvery, all} from 'redux-saga/effects'

import { donationsServices } from "../../services/donationsServices";
import {identifier, setDonations} from "../slicesRedcers/donationSlice";

function* findOne(id){
    const data = yield call(donationsServices.findOne,1);
    console.log(data)
}

function* findMany(action){
    try {
        const data = yield call(donationsServices.findMany, action.payload);

        yield put(setDonations(data));
    }catch (e){
        console.log(e.message)
    }


}

function* authRootSaga() {
    yield all([
        takeEvery(identifier.FETCH_DONATION, findMany),
        takeEvery(identifier.FETCH_ONE, findOne)
    ])
}
const donationSaga = [fork(authRootSaga)];

export default donationSaga