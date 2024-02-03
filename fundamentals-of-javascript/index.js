
// import {x} from './app' yeh javascript my kaam karega but yaha nahi karega

const app = require('./app')
// varible ka naam file name sy he rakhte hai taki pata lag jaye ki konsi file sy aaya hai
// console.log(app);
// console.log(app.x);
// console.log(app.z());





// var x = 20;
// if(x===20){
//     // === type or value dono match karta hai
//     // == sirf data match karta hai
//     console.log("Matched");    
// }

// for(var i= 0;i<10;i++){
//     console.log(i);
// }

// array 
// const arr = [2,35,535,323,2];
// console.log(arr);

// ek file sy dusri file my data kese import karte hai



// filter 
//  isko use karte hai array my sy value filter out karne ky ly
// yeh sirf array py kaam karta hai

const arr = [2,3,5,4,3];

// arr.filter((item)=>{
//     console.log(item);
// })

let result = arr.filter((item)=>{
   return item === 3;
})
// console.log(result);

let result1 = arr.filter((item)=>{
   return item >2;
})

console.log(result1);