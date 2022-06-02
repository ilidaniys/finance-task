import {configureStore} from "@reduxjs/toolkit";
import financeReducer from './reduxer/financeSlice'
import createSagaMiddleware from 'redux-saga'
import financeSaga from "./reduxer/financeSaga";


const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        finance: financeReducer
    },
    middleware: [saga]
})
saga.run(financeSaga)