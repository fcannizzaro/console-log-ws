import WebSocket from 'ws';

let ws: WebSocket;

export const setup = (port = 2222, address = "127.0.0.1") => new Promise((res) => {
    ws = new WebSocket(`ws://${address}:${port}`);
    ws.on('open', res);
});

global.console.log = (...args) => {
    ws.send(JSON.stringify(args));
}

global.console.off = async () => {
    if (ws) {
        // close the connection ex. to finish a process
        ws.close();
    }
}
