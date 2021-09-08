
import {all} from "redux-saga/effects"
import donationSaga from "./donationSaga";

export default function* sagas() {
    yield all([
        ...donationSaga
    ])
}