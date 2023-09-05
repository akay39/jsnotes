/////////////////////////NOTE////////////////////////

//BLOCK- also k/a COMPOUND STATEMENT      
//{ Combining multiple statement together in a block so that we can use it where jsexpects one statement}
/*{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
*/
// let and const are block scope but var is in global scope.
// let and const are unable to access outside the block.
// OUTPUT-  10
//          20
//          30
//          10
// ReferenceError: b is not defined

/*var a = 100;
{
    var a = 10;
    let b = 20;
     const c = 30;
     console.log(a);
     console.log(b);
     console.log(c);
}
console.log(a);
*/
//OUTPUT-   10
//          20
//          30
//          10 (this is k/a shadowing beacuse of the same memory space.)
//SHADOWING- same named variable outside of the block is shadowed by the block scopee var.
// shadowing also behaves same in functions also as of block.
/*let b = 100;
{
    var a = 10;
    let b = 20;
     const c = 30;
     console.log(a);
     console.log(b);
     console.log(c);
}
console.log(a);
*/
//OUTPUT-   10
//          20
//          30
//          100 

/*const c = 100;
{
    var a = 10;
    let b = 20;
     const c = 30;
     console.log(a);
     console.log(b);
     console.log(c);
}
console.log(c);
*/
//OUTPUT-   10
//          20
//          30
//          100 

/*const c = 100;
function x(){
    const c = 30;
    console.log(c)
}
x();
console.log(c);
*/

//OUTPUT- 30
//        100  
//                   ILLEGAL SHADOWING
/*
let a = 20;
{
    var a = 20;
}
*/
//outut- syntaxError: 'a' has already been declared.
// var must be in the boundries such as inside function.

/*let a = 20;
{
    let a = 200;
}
*/
//this can be done.

/* 
const  a = 20;
{
    const a = 200;
}
*/
// this can also be done.