
const express = require("express");
const app = express();
const cors = require("cors");
const apiData = require("../assests/product.json");
const port = 8000;

// Use the CORS middleware
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to HomePage")
});

// userInfo;

app.get("/users", (req,res) => {
    res.send(apiData)
})

app.listen(port, () => {
    console.log(`Server is Running Sucessfully at port number ${port}`)
})