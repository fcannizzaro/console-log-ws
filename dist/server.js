#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var port = process.argv[2] || "2222";
var address = process.argv[3] || "0.0.0.0";
var wss = new ws_1.WebSocketServer({ port: parseInt(port), host: address });
console.log("[ Logs Server started (port: " + port + ") ]\n");
wss.on('connection', function (ws) {
    ws.on('message', function (data) {
        console.log.apply(console, JSON.parse(data));
    });
});
