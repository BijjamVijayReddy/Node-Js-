
const http = require("http");


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to Home Page")
    } else if (req.url === "/about") {
        res.end("Welcome to About Page")
    } else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("404 not Found")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server is Running");

})