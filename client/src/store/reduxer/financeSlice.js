import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        title: 'asdasdas',
        name: 'asd',
        price: 10,
        changePrice: 20,
        changePriceInterest: 2,
        dividend: 20,
        profit: 2,
        date: new Date(23)
    }
]


export const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {}
})

export default financeSlice.reducer