import {takeEvery, put} from 'redux-saga/effects'
import {io} from "socket.io-client";
import {END, eventChannel} from "redux-saga";
import {refresh} from "./financeSlice";


export const socket = io('http://localhost:4000')



export function* connectToServer (payload) {
    console.log('payload',payload)
    yield put(refresh(payload))
}

function* financeSaga() {
    const startConnectToServer = eventChannel((emitter)=>{
        socket.on('connect', () => {
            socket.emit('start')
        });
        socket.on('ticker', (res) => {
            emitter(res)
        })
        return () => {
            emitter(END)
        }
    })
    yield takeEvery(startConnectToServer, connectToServer)
}


export default financeSaga