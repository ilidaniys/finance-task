import {configureStore} from "@reduxjs/toolkit";
import financeReducer from './reduxer/financeSlice'

export const store = configureStore({
    reducer: {
        finance: financeReducer
    },
})