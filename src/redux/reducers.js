import { combineReducers } from "@reduxjs/toolkit";
import reducer from './slicesRedcers/donationSlice'

const slices = combineReducers({
    donation: reducer
})

export default slices