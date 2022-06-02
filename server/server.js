'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');


const PORT = process.env.PORT || 4000;

let FETCH_INTERVAL = 5000;

function randomValue(min = 0, max = 1, precision = 0) {
    const random = Math.random() * (max - min) + min;
    return random.toFixed(precision);
}

function utcDate() {
    const now = new Date();
    return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

function getQuotes(socket, tickers) {
    const quotes = tickers.map(ticker => ({
        ticker,
        exchange: 'NASDAQ',
        price: randomValue(100, 300, 2),
        change: randomValue(0, 200, 2),
        change_percent: randomValue(0, 1, 2),
        dividend: randomValue(0, 1, 2),
        profit: randomValue(0, 2, 2),
        last_trade_time: utcDate(),
    }));
    socket.emit('ticker', quotes);
}

const deleteTicker = (banTicker, tickers) => tickers.filter(ticker => ticker !== banTicker)
const setNewTimer = (oldTimer, newTime, socket, tickers) => {
    clearInterval(oldTimer)
    return setInterval( () => getQuotes(socket, tickers), newTime)
}

function trackTickers(socket) {
    let tickers = [
        'AAPL', // Apple
        'GOOGL', // Alphabet
        'MSFT', // Microsoft
        'AMZN', // Amazon
        'FB', // Facebook
        'TSLA', // Tesla
    ];
    getQuotes(socket, tickers);

    let timer = setInterval(() => getQuotes(socket, tickers), FETCH_INTERVAL);

    socket.on('setNewTimer', (payload) => {
        timer = setNewTimer(timer, payload, socket, tickers)
    })

    socket.on('deleteTicker', (payload) => {
       tickers = deleteTicker(payload, tickers)
    })

    socket.on('addNewTicker', (payload)=> {
        console.log('addNewTicker', payload)
        tickers.push(payload)
        console.log('tickers', tickers)
    })

    socket.on('disconnect', function () {
        clearInterval(timer);
    });
}

const app = express();
app.use(cors());

const server = http.createServer(app);
const socketServer = io(server, {
    cors: {
        origin: "*",
    }
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

socketServer.on('connection', (socket) => {
    console.log('user connect', socket.id)
    socket.on('start', () => {
        console.log('start send')
        trackTickers(socket);
    });
});

server.listen(PORT, () => {
    console.log(`Streaming service is running on http://localhost:${PORT}`);
});
