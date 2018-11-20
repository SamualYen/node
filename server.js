var ws = require("nodejs-websocket");
console.log("Begin to build websocket...")

const PORT = process.env.PORT || 8080;

var screenReady = false;
var pepperReady = false;
var mscreenReady = false;
var mpepperReady = false;
var usascreenReady = false;
var usapepperReady = false;
var screen = null;
var pepper = null;
var mscreen = null;
var mpepper = null;
var usascreen = null;
var usapepper = null;

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
            conn.sendText("miyako Screen Pong");
            console.log("Sended data is:miyako Screen Pong")
        }
        if (str === "miyako Pepper Ping") {
            conn.sendText("miyako Pepper Pong");
            console.log("Sended data is:miyako Pepper Pong")
        }
        
        
        
        if (str === "usascreen") {
            usascreen = conn;
            usascreenReady = true;
            console.log("usa Screen is ready")
        }
        if (str === "usapepper") {
            usapepper = conn;
            usapepperReady = true;
            console.log("usa Pepper is ready")
        }
        if (usascreenReady && usapepperReady) {
            usascreen.sendText(str);
        }
        if (str === "usaScreen Ping") {
            conn.sendText("usaScreen Pong");
            console.log("Sended data is:usa Screen Pong")
        }
        if (str === "usaPepper Ping") {
            conn.sendText("usaPepper Pong");
            console.log("Sended data is:usa Pepper Pong")
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



