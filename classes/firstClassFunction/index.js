//           NOTES

// FIRST CLASS FUNCTION
// the ability of functions to be used as values. 
// first class citizens also means the same thing.
// we can pass another functions inisde callback function's arguements.

// Function Statement also k/a function declaration
/*
function a(){
    console.log("a called")
}
a();
*/

// Function Expression(function acts like a value)
/*
var b = function(){
    console.loh("b called")
}
b();
*/
// difference btwn function statement and expression is hoisting.
// if we call a and b before even creating then a will be called and b will give error as var is assigned as undefined .


// Function Declaration also k/a function statement.

// Anonymous Function(function without name)
// it is a invalid syntax.
// use them as values.
// assign them to a variABLE. they act as a value.
/*
function (){

}
*/


//Named Function Expression
/*
var b = function xyz(parameters){
    console.loh("b called")
}
b(arguements);
*/
//note- if we call xyz(); it will throw an error.
//  it behaves like a local variable.

// Parameters and arguements
// explained above.

// Arrow Function
// will be discussed in upcoming video.