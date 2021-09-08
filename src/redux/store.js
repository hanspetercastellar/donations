import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import saga from "./sagas/sagas"


//slices reducers
import reducers from "./reducers"

let sagaMiddleware = createSagaMiddleware();
const middleware = [
    ...getDefaultMiddleware(),
    sagaMiddleware
];
const store = configureStore({
    reducer: reducers,
    middleware
});


sagaMiddleware.run(saga);

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./reducers", () => {
        const newRootReducer = require("./reducers").default;
        store.replaceReducer(newRootReducer);
    });
}


export default store;