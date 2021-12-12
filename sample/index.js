const logs = require('../');

logs.setup().then(() => {
    console.log("log1");
    console.log("log2");
    console.log("log3");
    // if nothing else you can close the process by closing the ws
    console.off();
});
