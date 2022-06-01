import {io} from "socket.io-client";
import {refresh} from "./financeSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

const data = [{
    title: 'asdasdas',
    name: 'asd',
    price: 10,
    changePrice: 20,
    changePriceInterest: 2,
    dividend: 20,
    profit: 2,
    date: new Date(1)
}]

// export const connectToServer = createAsyncThunk(
//     'connect',
//     (thunkAPI) => {
//         const socket = io('http://localhost:4000')
//         console.log(socket)
//         console.log('user_online')
//         socket.on('connect', () => {
//             socket.emit('start')
//         });
//         socket.on('ticker', (res) => {
//             console.log('res', res)
//             return res
//         })
//     }
// )

// export const connectToServer = async (thunkAPI) => {
//     const socket = io('http://localhost:4000')
//     console.log(socket)
//     console.log('user_online')
//      socket.on('connect', () => {
//         socket.emit('start')
//     });
//      socket.on('ticker', (res) => {
//         console.log('res', res)
//         refresh(res)
//     })
// }