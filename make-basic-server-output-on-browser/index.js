const http = require('http');
// http nodejs ky ander server ki request or response ko handel karta hai

// creatSever essa function hai jo pura ka pura function as a parameter leta hai
   
function dataControl(req, resp) {

    console.log("server is running"); // this function will execute whenever any client (browser)
    // resp.write("Hello this is me ");
    resp.write("<h1> Hello this is HTMl </h1> "); //isme html bhi send kar skte hai
    resp.end();

}

// same chiz ko arrow function 
const dataControl = (req, resp)  => {

    console.log("server is running"); // this function will execute whenever any client (browser)
    // resp.write("Hello this is me ");
    resp.write("<h1> Hello this is HTMl </h1> "); //isme html bhi send kar skte hai
    resp.end();

}

http.createServer(dataControl); // pura function leta hai

// isko arrow function sy bhi likh skete hai

http.createServer(
    //  req is request , res is response
    // jese ? mark ky aage ko query aati hai vo req hai
    // jo bejna hota hai vo respone hai

    (req, resp) => {
        console.log("server is running"); // this function will execute whenever any client (browser)
        // resp.write("Hello this is me ");
        resp.write("<h1> Hello this is HTMl </h1> "); //isme html bhi send kar skte hai
        resp.end();
    }
).listen(4500); 

// arrow function

function test(a)
{
    return a*10;
}

const test = (a)  => {return a*2;} ;
