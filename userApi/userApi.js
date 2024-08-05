

const http = require("http");
const fs = require("fs");

// Date when server run: TYMDHMSH
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata', // Time zone for IST
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24-hour format
    });
}


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to Home")
    } else if (req.url === "/user") {
        res.writeHead(200, { "Content-type": "application/json" })
        fs.readFile("./userApi.json", "utf-8", (err, data) => {
            res.end(data)
        })
        const IstTime = getCurrentDateTime()
        const logEntry = `Date and Time when server was accessed: ${IstTime}\n`;
        fs.appendFile("apiRes.txt", logEntry + "\n", (err) => {
            if (err) {
                console.log("Error writing time to file");
                return;
            }
            console.log("Time entered successfully");
        });
    }
    else {
        res.end("404 Found")
    }

});


server.listen(8000, "127.0.0.1", (error) => {
    console.log("server running sucessfully")
})