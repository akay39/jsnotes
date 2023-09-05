// NOTES//
console.log("start");

setTimeout(function cb(){
    console.log("callback");
}, 5000);
console.log("end");
// if we have to differ some code we can put the setimeout =0; 
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = newDate().getTime();
}
console.log("while Expires");
// one of the very rare cases.