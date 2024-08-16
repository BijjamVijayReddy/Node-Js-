const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose"); // Corrected import
const cors = require("cors")
const app = express();

dotenv.config({ path: "./config/dev.env" })
const mongo_Url = process.env.MONGO_URL;
console.log(mongo_Url)

app.use(cors());
app.use(express.json());

mongoose.connect(`${mongo_Url}/school`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
    teacherName: { type: String, required: true },
    age: { type: String, required: true }
});


const UserModel = mongoose.model("teachers", UserSchema);

// get API
app.get("/", (req, res) => {
    res.send("Welcome to Home Page")
});

app.get("/users", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => {
            console.log("error", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

//Post
app.post("/create", (req, res) => {
    const { teacherName, age } = req.body;

    if (!teacherName || !age) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newUser = new UserModel({ teacherName, age });

    newUser.save()
        .then(user => res.status(201).json(user))
        .catch(err => {
            console.error("Error saving user:", err); // Log detailed error
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        });
});


app.listen(8000, () => {
    console.log("server is running");
});
