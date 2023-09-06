// NOTES//
//higher order function- a function which takes another function as an arguement is k/a higher order function.

function x() {
    console.log("namaste");
}

function y(x) {
    x();
}
///////////////////////////////////////////////////////////
// for calculating area of circle
const radius = [3,1,2,4];

const calculateArea = function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i]* radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));
/////////////////////////////////////////////////////////
// for calculating circumference
const calculateCircumference = function(radius){
    const output = [];
    for(let i =0; i<radius.length; i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));
////////////////////////////////////////////////////////
// calculate diameter
const calculateDiameter = function(radius){
    const output = [];
    for(let i =0; i<radius.length; i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));
///////////////////////////////////////////////////////////
// to write a generic function
const area = function (radius) {
  return Math.PI*radius*radius;  
};

const circumference = function(radius) {
    return 2*Math.PI*radius;
};

const diameter = function (radius) {
    return 2*radius;
};

const calculate = function (radius, logic) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

console.log(radius.map(area));// this line gives the area 