#!/usr/bin/env node
import WebSocket, {WebSocketServer} from "ws";

const port = process.argv[2] || "2222";
const address = process.argv[3] || "0.0.0.0";

const wss = new WebSocketServer({port: parseInt(port), host: address});

console.log(`[ Logs Server started (port: ${port}) ]\n`);

wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (data: string) => {
        console.log(...JSON.parse(data));
    });
});
