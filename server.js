var ws = require("nodejs-websocket");
console.log("Begin to build websocket...")

const PORT = process.env.PORT || 8080;

var screenReady = false;
var pepperReady = false;
var mscreenReady = false;
var mpepperReady = false;
var usascreenReady = false;
var usapepperReady = false;
var ancscreenReady = false;
var ancpepperReady = false;
var sky1screenReady = false;
var sky1pepperReady = false;
var sky2screenReady = false;
var sky2pepperReady = false;
var screen = null;
var pepper = null;
var mscreen = null;
var mpepper = null;
var usascreen = null;
var usapepper = null;
var ancscreen = null;
var ancpepper = null;
var sky1screen = null;
var sky1pepper = null;
var sky2screen = null;
var sky2pepper = null;

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
            usapepper.sendText(str);
        }
        if (str === "usaScreen Ping") {
            conn.sendText("usaScreen Pong");
            console.log("Sended data is:usa Screen Pong")
        }
        if (str === "usaPepper Ping") {
            conn.sendText("usaPepper Pong");
            console.log("Sended data is:usa Pepper Pong")
        }
        
        
        
        if (str === "ancscreen") {
            ancscreen = conn;
            ancscreenReady = true;
            console.log("Aqua Naha Ch Screen is ready")
        }
        if (str === "ancpepper") {
            ancpepper = conn;
            ancpepperReady = true;
            console.log("Aqua Naha Ch Pepper is ready")
        }
        if (ancscreenReady && ancpepperReady) {
            ancscreen.sendText(str);
            ancpepper.sendText(str);
        }
        if (str === "Screen Ping") {
            conn.sendText("Aqua Naha Ch Screen Pong");
            console.log("Sended data is:Aqua Naha Ch Screen Pong")
        }
        if (str === "Pepper Ping") {
            conn.sendText("Aqua Naha Ch Pepper Pong");
            console.log("Sended data is:Aqua Naha Ch Pepper Pong")
        }
        
        
        
        if (str === "sky1screen") {
            sky1screen = conn;
            sky1screenReady = true;
            console.log("sky1Screen is ready")
        }
        if (str === "sky1pepper") {
            sky1pepper = conn;
            sky1pepperReady = true;
            console.log("sky1Pepper is ready")
        }
        if (sky1screenReady && sky1pepperReady) {
            sky1screen.sendText(str);
        }
        if (str === "sky1Screen Ping") {
            conn.sendText("sky1Screen Pong");
            console.log("Sended data is:sky1Screen Pong")
        }
        if (str === "sky1Pepper Ping") {
            conn.sendText("sky1Pepper Pong");
            console.log("Sended data is:sky1Pepper Pong")
        }
        
        
        
        if (str === "sky2screen") {
            sky2screen = conn;
            sky2screenReady = true;
            console.log("sky2Screen is ready")
        }
        if (str === "sky2pepper") {
            sky2pepper = conn;
            sky2pepperReady = true;
            console.log("sky2Pepper is ready")
        }
        if (sky2screenReady && sky2pepperReady) {
            sky2screen.sendText(str);
        }
        if (str === "sky2Screen Ping") {
            conn.sendText("sky2Screen Pong");
            console.log("Sended data is:sky2Screen Pong")
        }
        if (str === "sky2Pepper Ping") {
            conn.sendText("sky2Pepper Pong");
            console.log("Sended data is:sky2Pepper Pong")
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



