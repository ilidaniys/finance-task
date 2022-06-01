import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {io} from "socket.io-client";


const initialState = {
    stocks: [],
    status: false
}

export const connectToServer = createAsyncThunk(
    'connect',
    (thunkAPI) => {
        const socket = io('http://localhost:4000')
        console.log(socket)
        console.log('user_online')
        socket.on('connect', () => {
            socket.emit('start')
        });
        socket.on('ticker', (res) => {
            console.log('res', res)
            refresh(res)
        })

    }
)

export const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        connect: (state, action) => {
            state.status = action.payload
        },
        refresh: (state, action) => {
            state.stocks = action.payload
        }
    },
    extraReducers: {
        [connectToServer.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.stocks = action.payload
        }
    }
})



export const {connect, refresh} = financeSlice.actions
export default financeSlice.reducer
