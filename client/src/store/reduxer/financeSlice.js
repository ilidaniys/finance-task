import {createSlice} from "@reduxjs/toolkit";
import {socket} from "./financeSaga";

const initialState = {
    stocks: [],
    pauseStocks: [],
    inputValue: '',
    errorMassage: ''
}

export const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        refresh: (state, action) => {
            if (state.stocks.length !== 0) {
                for (let i = 0; i < action.payload.length; i++) {
                    console.log('state.stocks', state.stocks.length)
                    if (state.stocks[i]) {
                        if (state.pauseStocks.includes(state.stocks?.[i].ticker)) {
                            continue
                        }
                        if (state.stocks[i].price > action.payload[i].price) {
                            state.stocks[i] = action.payload[i]
                            state.stocks[i].compare = true
                        } else {
                            state.stocks[i] = action.payload[i]
                            state.stocks[i].compare = false
                        }
                    } else {
                        state.stocks[i] = action.payload[i]
                    }
                }
            } else {
                state.stocks = action.payload
            }
        },
        turnOffTicker: (state, action) => {
            console.log(action.payload)
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
        removeTicker: (state, action) => {
            state.stocks = state.stocks.filter((ticker) => {
                return ticker.ticker !== action.payload
            })
            socket.emit('deleteTicker', action.payload)
        },
        addNewTicker: (state) => {

            if (state.inputValue !== '') {
                if (state.inputValue.length < 10) {
                    const upperCase = state.inputValue.toUpperCase()
                    socket.emit('addNewTicker', upperCase)
                    state.inputValue = ''
                    state.errorMassage = ''
                } else {
                    state.errorMassage = 'to long name for ticker'
                }
            } else {
                state.errorMassage = 'at least one symbol'
            }
        },
        setNewTimer: (state, action) => {
            const seconds = action.payload * 1000
            socket.emit('setNewTimer', seconds)
        },
        changeInputValue: (state, action) => {
            state.inputValue = action.payload
        }
    },
})

export const {
    refresh,
    turnOffTicker,
    turnOnTicker,
    removeTicker,
    setNewTimer,
    addNewTicker,
    changeInputValue
} = financeSlice.actions
export default financeSlice.reducer
