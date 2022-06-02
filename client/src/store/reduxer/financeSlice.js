import {createSlice} from "@reduxjs/toolkit";
import {socket} from "./financeSaga";

const initialState = {
    stocks: [],
    pauseStocks: [],
}


export const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        connect: (state, action) => {
            state.status = action.payload
        },
        refresh: (state, action) => {
            if (state.stocks.length !== 0) {
                for (let i = 0; i < action.payload.length; i++) {
                    console.log('state.stocks', state.stocks)
                    console.log('action.payload', action.payload)
                    if (state.pauseStocks.includes(state.stocks[i].ticker)) {
                        continue
                    }
                    if (state.stocks[i].price > action.payload[i].price) {
                        state.stocks[i] = action.payload[i]
                        state.stocks[i].compare = true
                    } else {
                        state.stocks[i] = action.payload[i]
                        state.stocks[i].compare = false
                    }
                }
            } else {
                state.stocks = action.payload
            }
        },
        turnOffTicker: (state, action) => {
            const removeItem = state.stocks.find((ticker) => {
                if (ticker.ticker === action.payload) {
                    return ticker
                }
            })
            state.pauseStocks.push(String(removeItem.ticker))
        },
        turnOnTicker: (state, action) => {
            state.pauseStocks = state.pauseStocks.filter((ticker) => {
                return ticker !== action.payload
            })
        },
        setTickersStatus: (state, action) => {

        },
        removeTicker: (state, action) => {
            console.log('removeTicker', action.payload)
            state.stocks = state.stocks.filter((ticker)=>{
                return ticker.ticker !== action.payload
            })
            socket.emit('deleteTicker', action.payload)
        }
    },
})


export const {connect, refresh, setTickersStatus, turnOffTicker, turnOnTicker, removeTicker} = financeSlice.actions
export default financeSlice.reducer
