

const os = require("os")

// check the architecture of the Computer 

const pcArch = os.arch();
console.log("This PC architecture  is", pcArch);

// check the Free Memory in the System

const freeMemory = os.freemem();
console.log("Free Memory is Avalible", `${freeMemory / 1024 / 1024 / 1024}`) // Bytes you need to convert into GB

// total memory in the System

const totalMemory = os.totalmem();
console.log("Total Memory Avalible", `${totalMemory / 1024 / 1024 / 1024}`);

//directory of the current floder;

const directory = os.homedir();
console.log(directory);

// to check the Wifi Information 
const wifiInfo = os.networkInterfaces()
console.log("Wifi Information", wifiInfo);

// system platform 

const systemPlatform = os.platform();
console.log("My System is Running on ", systemPlatform);

// os version 
const osVersion = os.version()
console.log(osVersion)