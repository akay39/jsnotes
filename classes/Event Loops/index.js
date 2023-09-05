// NOTES//

// Browsers//

//-JS Engine
//-Call stack
//-TImer
//-Jiolocation
//-vluetooth

// we need to have connection with all the superpowers.
//Js needs some way to access those superpowers from call stack because of GLOBAL object i.e. window

//  we need Web APIs//
//these are part of browsers.
//- setTimeout()
//-DOM APIs(document.addElementById)
//-fetch()
//-console
//-Location


// callback method can't go into call stack directly.
// through call back queue.
// evet loop- the job is to check this call back quue . and put this function of call backs into call stack.

console.log("start");

document.getElementById("btn")
.addEventListener("click" , function cb(){
    console.log("callback");
});

console.log("end");

// the job of event loop is to coonstantly monitor call stack and call back queue.
// why we need call back queue??
//ans- one by one function is executed from callback queue to call stack.
 console.log("start");

 setTimeout(function cbt() {
    console.log("cb setimeout");
 }, 5000);

 fetch("http:api.netflix.com")
 .then(function cbf(){
    console.log("cb netflix");
 });

 console.log("end");
 // fetch waits for the response/ rqst from the server to get executed.
 // important- micro task queue: similar to callback queue ut with higher priority.
 // all the callback functions with promises,mutation comes in microtask queue.
