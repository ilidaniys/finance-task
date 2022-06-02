const {createServer} = require("http");
const {Server} = require("socket.io");
const Client = require("socket.io-client");


describe('Socket IO recive', () => {
    let io, serverSocket, clientSocket;

    beforeAll((done) => {
        const httpServer = createServer();
        io = new Server(httpServer);
        httpServer.listen(() => {
            const port = httpServer.address().port;
            clientSocket = new Client(`http://localhost:${port}`);
            io.on("connection", (socket) => {
                serverSocket = socket;
            });
            clientSocket.on("connect", done);
        });
    });

    test("should work", (done) => {
        serverSocket.on("addNewTicker", () => {

        });
        clientSocket.emit("addNewTicker", (payload) => {
            expect(payload).toBe("world");
            done();
        });

    });

    afterAll(() => {
        io.close();
        clientSocket.close();
    });

})