# @fcannizzaro/console-log-ws
A Websocket server / client to use a remote console.log

[![NPM](https://img.shields.io/npm/v/@fcannizzaro/console-log-ws.svg)](https://www.npmjs.com/package/@fcannizzaro/console-log-ws) 

## Installation

```bash
npm i --save  @fcannizzaro/console-log-ws
```

## Usage

1. Start a log server (`defaults` port=2222, address=0.0.0.0)
    ```bash
    npx @fcannizzaro/console-log-ws [PORT] [ADDRESS]
    ```
2. Connect the client and logs from the client process
   ```javascript
   const logs = require('@fcannizzaro/console-log-ws');

   logs.setup().then(() => {
     console.log("log1");
     console.log("log2");
     console.log("log3");
     // if nothing else you can close the process by closing the ws
     console.off();
   });
   ```

## Methods

- ### setup(, `port: number, address: string`)
  > Connect the client to the log server. Port and address are optional args.
    ```javascript
   const logs = require('console-log-ws');
   logs.setup(4444, '192.168.1.32')
   ```
- ### console.off()
  > Close the ws connection in the client. (ex. a node process with a connected websocket will never close 😆)

## Author
Francesco Saverio Cannizzaro ([fcannizzaro](https://github.com/fcannizzaro))

## License
`MIT License`
