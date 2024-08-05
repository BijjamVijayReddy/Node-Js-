
// create an object  //  Done
// convert into JSON  // Done
// store that one File and read it 
// send that file into server

const fs = require("fs")

const myBio = {
    myName: "Vijay",
    age: 25,
    gender: "male",
    mobileNumber: +919491467216,
    email: "bijjamvijayreddy@gmail.com"
};

const jsonForamt = JSON.stringify(myBio);

// create the File
fs.writeFile("one.json", jsonForamt, (err) => {
    console.log("File is Created")
});

// read the File;

fs.readFile("one.json", "utf-8", (err, data) => {
    const objData = JSON.parse(data);
    console.log(objData)
})
