

const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("one.txt", "utf-8", (err, data) => {
            res.end(data)
        })
    } else if (req.url === "/about") {
        res.end("Welcome to About Page")
    } else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("404")
    };

});


server.listen(8000, "127.0.0.1", () => {
    console.log("server is running Sucessfully")
})