var ws = require("nodejs-websocket");
console.log("Begin to build websocket...")
var screenReady = false;
var pepperReady = false;
var screen = null;
var pepper = null;
var server = ws.createServer(function(conn) {
    conn.on("text", function(str) {
        console.log("Received data is:" + str)
        if (str === "screen") {
            screen = conn;
            screenReady = true;
            console.log("Screen is ready")
        }
        if (str === "pepper") {
            pepper = conn;
            pepperReady = true;
            console.log("Pepper is ready")
        }
        if (screenReady && pepperReady) {
            screen.sendText(str);
        }
        if (str === "Screen Ping") {
            conn.sendText("Screen Pong");
            console.log("Sended data is:Screen Pong")
        }
        if (str === "Pepper Ping") {
            conn.sendText("Pepper Pong");
            console.log("Sended data is:Pepper Pong")
        }
        conn.sendText(str);
    })
    conn.on("close", function(code, reason) {
        console.log("Websocket closed")
    });
    conn.on("error", function(code, reason) {
        console.log("Websocket error")
    });
}).listen(8001)
console.log("WebSocket has done.")