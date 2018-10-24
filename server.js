var ws = require("nodejs-websocket");
console.log("Begin to build websocket...")

const PORT = process.env.PORT || 8080;
const PORT2 = process.env.PORT || 8081;

var screenReady = false;
var pepperReady = false;
var mscreenReady = false;
var mpepperReady = false;
var screen = null;
var pepper = null;
var mscreen = null;
var mpepper = null;

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
}).listen(PORT)
console.log("WebSocket has done.")

var server2 = ws.createServer(function(mconn) {
    mconn.on("text", function(str) {
        console.log("Received data is:" + str)
        if (str === "mscreen") {
            mscreen = conn;
            mscreenReady = true;
            console.log("miyako Screen is ready")
        }
        if (str === "mpepper") {
            mpepper = conn;
            mpepperReady = true;
            console.log("miyako Pepper is ready")
        }
        if (mscreenReady && mpepperReady) {
            mscreen.sendText(str);
        }
        if (str === "miyako Screen Ping") {
            mconn.sendText("miyako Screen Pong");
            console.log("Sended data is:miyako Screen Pong")
        }
        if (str === "miyako Pepper Ping") {
            mconn.sendText("miyako Pepper Pong");
            console.log("Sended data is:miyako Pepper Pong")
        }
        mconn.sendText(str);
    })
    mconn.on("close", function(code, reason) {
        console.log("Miyako Websocket closed")
    });
    mconn.on("error", function(code, reason) {
        console.log("Miyako Websocket error")
    });
}).listen(PORT2)
console.log("Miyako WebSocket has done.")
