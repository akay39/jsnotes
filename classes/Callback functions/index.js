//                              NOTES



// wht is a acallback function in js.
//- take a function and pass it to the another function.
// call backs gives tthe power of asrynchrinity
/*
setTimeout(function () {
 console.log("timer") ;  
},10000);
// setTimeout function will store in a saparate memory/space.
function x(y){
console.log("x");
y();
}
x(function y(){
console.log("y");
})
*/

// js is a synchronous and single-threaded language

//Blocking the main thread
//if any operation is blocking the call stack is k/a blocking the main thread.

//Power of CallBacks.

//Deep about Event Listen 

// Closures Demo with Event Listners

// Scope Demo with Event Listen

// Garbage Collection & removeEventListners
//event listners are heavy and take lot memory. so we remove them when not using.


/*
let count =0;
document.getElementById("clickme").addEventListener("clickme", function xyz(){
    console.log("Button clicked", ++count);
})
*/


// making global variable is not a good way o write code.
// need closures.

function attachEventListen() { 
    let count =0;
    document.getElementById("clickme").addEventListener("click", function xyz(){
        console.log("Button clicked", ++count);
    })   
}
attachEventListen();