import reducer, {
    refresh,
    turnOffTicker,
    turnOnTicker,
    addNewTicker,
    changeInputValue
} from './store/reduxer/financeSlice'


describe('User Test', () => {

    const massage = [{
        ticker: "AAPL",
        exchange: "NASDAQ",
        price: "166.02",
        change: "197.68",
        change_percent: "0.08",
        dividend: "0.10",
        profit: "0.24",
        last_trade_time: "2022-06-02T18:55:06.000Z"
    }]
    test('refresh', () => {
        const initialState = {
            stocks: [],
            pauseStocks: [],
            inputValue: '',
            errorMassage: ''
        }
        expect(reducer(initialState, refresh(massage))).toEqual({
            stocks: [{
                ticker: "AAPL",
                exchange: "NASDAQ",
                price: "166.02",
                change: "197.68",
                change_percent: "0.08",
                dividend: "0.10",
                profit: "0.24",
                last_trade_time: "2022-06-02T18:55:06.000Z"
            }],
            pauseStocks: [],
            inputValue: '',
            errorMassage: ''
        })
    });
    test('turnOffTicker', () => {
        const initialState = {
            stocks: [{ticker: "AAPL"}],
            pauseStocks: [],
            inputValue: '',
            errorMassage: ''
        }
        expect(reducer(initialState, turnOffTicker('AAPL'))).toEqual({
            stocks: [{ticker: "AAPL"}],
            pauseStocks: ['AAPL'],
            inputValue: '',
            errorMassage: ''
        })
    });
    test('turnOnTicker', () => {
        const initialState = {
            stocks: [{ticker: "AAPL"}],
            pauseStocks: ['AAPL'],
            inputValue: '',
            errorMassage: ''
        }
        expect(reducer(initialState, turnOnTicker('AAPL'))).toEqual({
            stocks: [{ticker: "AAPL"}],
            pauseStocks: [],
            inputValue: '',
            errorMassage: ''
        })
    })
    test('addNewTicker', () => {
        const initialState1 = {
            inputValue: 'AAPL',
            errorMassage: ''
        }
        const initialState2 = {
            inputValue: '',
            errorMassage: ''
        }
        const initialState3 = {
            inputValue: 'asdasdasdasdasd',
            errorMassage: ''
        }
        expect(reducer(initialState1, addNewTicker('AAPL'))).toEqual({
            inputValue: '',
            errorMassage: ''
        })
        expect(reducer(initialState2, addNewTicker(''))).toEqual({
            inputValue: '',
            errorMassage: 'at least one symbol'
        })
        expect(reducer(initialState3, addNewTicker('asdasdasdasdasd'))).toEqual({
            inputValue: 'asdasdasdasdasd',
            errorMassage: 'to long name for ticker'
        })
    })
    test('changeInputValue', ()=>{
        const initialState = {
            inputValue: '',
        }
        expect(reducer(initialState, changeInputValue('A'))).toEqual({
            inputValue: 'A',
        })
    })
})

