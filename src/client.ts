import WebSocket from 'ws';

let ws: WebSocket;

export const setup = (port = 2222, address = "127.0.0.1") => new Promise((res) => {
    ws = new WebSocket(`ws://${address}:${port}`);
    ws.once('open', res);
});

console.log = (...args) => {
    ws.send(JSON.stringify(args));
}

console.off = async () => {
    if (ws) {
        // close the connection ex. to finish a process
        ws.close();
    }
}
