/*
var x = 7;
function getName(){
    console.log("namaste javascript")
}
get name();
console.log(x); 

output- Namaste javascript
        7

-----------------------------------------------------------------
get name();
console.log(x); 

var x = 7;
function getName(){
    console.log("namaste javascript")
}

output- Namaste javascript
        undefined
------------------------------------------------------------------
get name();
console.log(x); 

function getName(){
    console.log("namaste javascript")
}

output- Namaste javascript
        not defined
--------------------------------------------------------------------
function getName(){
    console.log("namaste javascript")
}
console.log(getName);

output- function getName(){
    console.log("namaste javascript")
}
-----------------------------------------------------------------------
console.log(getName);

function getName(){
    console.log("namaste javascript")
}

output- function getName(){
    console.log("namaste javascript")
}
------------------------------------------------------------------------

get name();
console.log(x); 
console.log(getName);

var x = 7;
var getName= () => {
    console.log("namaste javascript");
}

output- getName is not a function
NOTE- arrow function behaves like other variable but not like of function.
      initializing value will be undefined.
----------------------------------------------------------------------
*/