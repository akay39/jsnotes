//                          NOTES

//                      SET TIME OUT
/*
function x(){
    var i = 1;
    setTimeout(function() {
      console.log(i);  
    }, 4000);
    console.log("namaste javascript");
}
x();
*/
//OUTPUT- namaste javascript
// after 4 sec it will print value of i =1;

/*function x(){
    for(var i =1 ; i<=5 ; i++){
        setTimeout(function() {
            console.log(i);  
          }, i*1000);
    }
    
    console.log("namaste javascript");
}
x();
*/
// OUTPUT- namaste javascript
//      6
//      6
//      6
//      6
//      6
// 6 is printed after every 1 sec because the refence of i is stored and upto the time the loop expires so the vlue becomes and and printed the same every time.
// we can fix this by simply replacing var to let.

/*
function x(){
    for(let i =1 ; i<=5 ; i++){
        setTimeout(function() {
            console.log(i);  
          }, i*1000);
    }
    
    console.log("namaste javascript");
}
x();
*/
//OUTPUT- namaste javascrript
//      1
//      2
//      3
//      4
//      5

/*
function x(){
    for (var i = 1; i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
                
            },i*1000);
        }
        close(i);
    }
    console.log("namastte javascript")
}
x();
*/
// with using var only.
