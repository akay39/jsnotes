                //NOTES??
/*onsole.log(a);
console.log(b);
let a = 10;
var b = 100;
//output-cannot access a before initializing
//       undefined
*/

console.log(b);
let a = 10;
console.log(a);
var b = 100;
// initializing the both of the values with undefined.
// let and const are stored in the different memory space then global.
// that's why we can not use them before initializing with some value
//output- 100
//      10
// temporal deadzone-from hoisting to initializing with sme value is k/a TDZ.
// can't be accessed when in tdz. only when initializing value.
// let variables can't be updated or duplicate declaration any variable.
//we can declare and initialize let in 2 steps. 
// const is more strict than let. it must be declare and initialize in the single step.

// TYPE ERROR- Asignment to constant variable. value can't be updated in const.
//SYNTAX ERROR- if we dont declare and initialize in the same line for const variable.
//REFERENCE ERROR- because of TDZ.