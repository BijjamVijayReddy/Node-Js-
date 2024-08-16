

import mongoose from "mongoose";

let tech_Name = new mongoose.Schema({

    teacherName: "Chai",
    age: "24",
    sal: "35000"
});

let empolyee = mongoose.model("teachers", tech_Name)
export default empolyee
