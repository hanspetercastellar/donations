
import {call, fork, put, takeEvery, all} from 'redux-saga/effects'

import { donationsServices } from "../../services/donationsServices";

function* findOne(id){
    const data = yield call(donationsServices.findOne,1);
    console.log(data)
}

function* authRootSaga() {
    yield all([
        takeEvery("", findOne)
    ])
}
const donationSaga = [fork(authRootSaga)];

export default donationSaga