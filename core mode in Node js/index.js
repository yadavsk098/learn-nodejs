//45 py

// core moduels - har ek programing language kuch basic features phele sy he hote hai
// jese ki database sy connect karne ky ly ,File system, buffer, http, api call karne ky ly

// global -  esse module jinko import karne ki jarurat nahi hoti

// jese console.log

console.log("GLobal Module");
console.log(__dirname); // directory ka name print kardega
console.log(__filename); // file name print kardega


//non global jise hume import ki jarurat hoti hai

// const fs = require("fs");

// fs.writeFileSync("hello.txt","file created using fs module");

// sirf ek function ko import kar skte hai
 
const  data = require("fs").writeFileSync;

data("abc.txt","sirf ek function import kiya");


