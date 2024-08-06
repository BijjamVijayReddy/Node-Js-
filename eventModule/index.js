
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkpage", (sc, msg) => {
    console.log(`This server showing ${sc} and ${msg}`)
});

event.on("ServerCheck", (sc, msg) => {
    console.log(`Server is crashed ${msg} and code is ${sc}`)
})

event.emit("checkpage", 200, "0k");
event.emit("ServerCheck", 404, "Page not Found")