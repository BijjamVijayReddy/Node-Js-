const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome  to Home page")
});

// about url

app.get("/about", (req, res) => {
    res.send("Welcome to About Page")
})


app.listen(8000, () => {
    console.log("Server is Running Fine")
})