// Node JS:

// C R U D synchronously

// 1)Create the Floder  -- mkdirSync() -- done
// 2)Create the File like bio.txt  -- writeFileSync() -- done
// 3)Add some more Data in that File -- append() -- Done
// 4)Read the Data from that file  -- readFileSync() -- Done
// 5)Rename the File Name --renameSync()
// 6)Delete the that File Which You Craeted; -- unlinkSync()
// 7)Delete the Floder which you created -- rmdirSync()



const fs = require("fs");

const newFloder = "myDeatils";
const newFile = "myBio.txt";
const reNameFile = "MyDeatils.txt"
const data = "my name is Vijay";
const newData = "  i am MERN Stack Developer"
const filePath = `${newFloder}/${newFile}`;
const reName = `${newFloder}/${reNameFile}`


// create the New Floder
const existFloder = fs.existsSync(newFloder)

if (existFloder) {
    console.log("floder is already created");
    fs.writeFileSync(filePath, data)
} else {
    console.log("floder need to created")
    fs.mkdirSync(newFloder);

};

// append the new Data to existing File
if (newFile) {
    fs.appendFileSync(filePath, newData)
} else {
    console.log("File is not there")
}

// read the File;

const buffer_Data = fs.readFileSync(filePath);
console.log(buffer_Data.toString());

// ReName the File;

if (filePath) {
    fs.renameSync(filePath, reName)
    console.log("file is there ")
} else {
    console.log("File is not there")
}

// delete the File;
if (reName) {
    fs.unlinkSync(reName)
    console.log("file delete sucessfully")
} else {
    console.log("File is not Deleted")
}

// delete the Floder;

if (existFloder) {
    fs.rmdirSync(newFloder)
    console.log("Floder is Delete Sucessfully")
} else {
    console.log("Floder is not Delted")
}