// Node JS:

// C R U D async-synchronously

// 1)Create the Floder 
// 2)Create the File like bio.txt  
// 3)Add some more Data in that File 
// 4)Read the Data from that file  
// 5)Rename the File Name 
// 6)Delete the that File Which You Craeted; 
// 7)Delete the Floder which you created 


const fs = require('fs');

//create the File 

fs.writeFile("myBio.txt", "This is Tuesday", (err) => {
    console.log("file is created");
    console.log(err)
});

// append the file
fs.appendFile("myBio.txt", "  Date is 30th July", (err) => {
    console.log(err);
    console.log("Text is Added to the File")
});

// read the file
fs.readFile("myDeatils.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err, "Error message")
    } else {
        console.log(data)
    }
})

// to create the floder

fs.mkdir("myDeatils", (err) => {
    if (err) {
        console.log("floder is created")
    } else {
        console.log(err, "Floder is created")
    }

});


// rename the file

fs.rename("myBio.txt", "myDeatils.txt", (err) => {
    console.log("Rename is created")
})

// floder is deleted 
fs.rmdir("myDeatils", () => {
    console.log("Floder is deletd sucessfully")
})