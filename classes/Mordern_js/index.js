/* Syntax asics && Type */
// 1. let- value can be updated without again using let keyword.
// 2. const- value can't be updated or chnages.
// 3. var-

/*                         
                            //Data Types JS//

1. Numbers                    1,100,3.14
2. Strings              'hello'"World" `JS`
3. Boolean                   true/false
4. Null             Explicitly set a variable with novalue 
5. Undefined        For variables that have not been defined
6. Ojects           Complex DS- aarrays , dates, literals etc.
7. Symbol                   used with objects
*/

/*                             
                              //STRINGS//

// string concatenation(joining things together)//
 let firstName ='akshay';
 let lastName = 'sharma';
 let fullName = firstName + ' ' + lastName;                             

-getting characters
 console.log(fullName[0])- single character

-string length
comsole.log(fullName.length);

-string methods like 
toUpperCase,
toLowerCase , 
indexOf('@')    @- arguements
*/

/* 
lastIndexOf() eg. let email = 'aks@gmail.com';
                  let result = email.lastIndexOf('i')
                   console.log(result); 
*/
// METHODS- are just functions belong to specific oject/object type.
                          
/*                        SLICE
email.slice(slice from, no. of characters to be sliced)
eg. let reuslt = email.slice(0,8);
output = aks@gmail
*/

/*                       SUBSTR
NOTE- making a substring from an original one.
eg. let reuslt = email.substr( starts from , ends at the positipn of characters.)

 */

/*                       REPLACE
let result = email.replace(the letter to be replace , by this letter only fro 1st occurance.)
*/

/*-----------------------------------------------------------------------*/

/*                       //NUMBER//

-math operators:      +,-,/,*,**(powerOf),%

-order of operation: B I D M A S

-increament/decreament: ++, --, +=,-=,/=,*=
let like = 10;
like += 10;
output: 10+10=20
-NOTE: NaN - Not a Number

-CONCATENATION OF NUMBER && STRINGS
const title ='Best reads of 2023';
const author = 'akshay';
const likes = 30;

-concotenation way: by adding + sign btwn strinngs and numbers.

-template string way:(when have alot of variables)
let result = 'The blog called ${title} by ${author} has ${likes} likes.';

-ceating html templates:

*/
//-----------------------------------------------------------------------//

/*                         //ARRAYS//
NOTE: can have different data types in an single array.

                           // ARRAYS METHODS //
                           let ninjas =['aks','rkv','rb',]
   let result = ninjas.join(','); 
   joins the whole array characters into a single string.  
   output: aks,rkv,rb
   let result = ninjas.indexOf('';)
   let result = ninjas.concat(['ken','harry']);
   let result = ninjas.push('ken'); => gives the length of  the concatenated array.
   let result = ninjas.pop();      => pop out the last value of an array.

*/
//-----------------------------------------------------------------------//
/*
                       // UNDEFINED AND NULL//
  let age;
  console.log(age, age+3, `the age is ${age}`);
  output1: undefined
  output2: NaN
  output3: undefined  
  
    let age = null;
  console.log(age, age+3, `the age is ${age}`);
  output1: null
  output2: 3
  output3: the age is null 
  NOTE: default value of null is zero in no. and null in string.
*/
//------------------------------------------------------------------------//
/*                  // BOOLEAN//
    true, false                
                     METHODS
let email ='aks@gmail.com';
let result = email.includes('@');
NOTE: search the given argument. works same for the arrays.  
OUTPUT: true(the value is in the given string.)
*/
/*                    //COMPARISON OPERATORS//
let = 25;
console.log(age ==25); OUTPUT: true (== it's a loose comparison)
console.log(age =='25') OUTPUT: true
console.log(age ==30); OUTPUT: false
console.log(age !=30); OUTPUT: true
console.log(age > 20); OUTPUT: true
console.log(age < 20); OUTPUT: false
console.log(age <= 25);OUTPUT: true
console.log(age >= 25); OUTPUT: true

let name ='akshay';
console.log(name == 'akshay'); OUTPUT: true 
console.log(name == 'Akshay'); OUTPUT: false
console.log(name > 'crystal'); OUTPUT: false
console.log(name > Akshay); OUTPUT: true
console.log(name > Crystal); OUTPUT: true
console.log(name);
NOTE: lowercase letters > uppercase letters (because they come after)

STRICT COMPARISON(different data types can't be equal.)

console.log(age === 25); OUTPUT: true
console.log(age ==='25'); OUTPUT: false
console.log(age !==25); OUTPUT: false
console.log(age !=='25'); OUTPUT: true

                      //TYPE CONVERSION//
let score = '100';

score = Number(score)             (NOTE: number is a keyword)
console.log(score +1);
console.log(typeOf score);

let result =Number('hello');
console.log(result)  OUTPUT: NaN

let result = String(50);
console.log(result, typeOf result); OUTPUT: 50 string

let result = Boolean(100);
console.log(result); OUTPUT: true "boolean"

let result = Boolean(0);
console.log(result); OUTPUT: false "boolean"

let result = Boolean(100);
console.log(result); OUTPUT: true "boolean"

let result = Boolean('0');
console.log(result, typeOf result); OUTPUT: true "boolean"

let result = Boolean('');
console.log(result, typeOf result); OUTPUT: false "boolean"
*/
/*
//------------------------------------------------------------------------//
                           //  LOOPS  //
-for loops
eg.
for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}
console.log('loop finished');
eg.
const names = ['aks', 'rkv', 'ssh'];
for(let i = 0; i <names.length; i++){
    console.log(names[i]);
}

-while loops
eg.
while(i < 5){
    console.log('in loop:', i);
    i++;
}
eg.
const names = ['aks','rks','rb'];
let i =0;
while(i <names.length){
    console.log(names[i]);
    i++;
}

-do while loop                       (NOTE: do block run atleast once.)
eg.
let i = 5;
do{
    console.log('value of i is:', i);
    i++;
}while(i < 5);
*/
//----------------------------------------------------------------------//
/*                        //IF STATEMENT//
eg.
const agr = 25;
if(age > 20){
    console.log('you are over 20 yeays old');
}
eg.
const password = passw0r1d;
if(password.length >= 8){
    console.log("that's password is long enough!");
}else{
    console.log('password is not long enough.');
}
//----------------------------------------------------------------------//
                          OR || AND &&
&&- both the conditions must be true;
//----------------------------------------------------------------------//
                        break and continue
break-will stop the execution of the loop.
continue- will skip the condition and continue the code.
//----------------------------------------------------------------------//
                           SWITCH STATEMENT
const grade = 'D';
-using if statements
if(grade ==='A'){

}else if(grade === 'B'){

}else if(grade === 'C'){

}else if(grade === 'D'){

}else if(grade === 'E'){
    
} else{

}

-using switch case
const grade = 'D';
switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');                 
    }
    NOTE: When condiiton or case matches the code will execute till end.
    that is why we use break statement after evry case.
*/
//-----------------------------------------------------------------------//
/*                  // VARIABLE & BLOCK SCOPE //
let age = 30;
if(true){

    let age = 40;
    let name = 'aks';
    console.log('inside 1st code block:', age , name);

    if(true){
        let age = 50;
        console.log('inside 2nd code block:', age);
       // var test ='hello';
    }
}
console.log('outside code block:', age, name)
// console.log(test);

OUTPUT: inside !st code block: 40 aks
        inside 2nd code block: 50
        outside code block: 30
        NOTE: const works the same but value can't be updated.
        NOTE: var keyword makes ignore the block scope.
*/
//----------------------------------------------------------------------//
/*                   // FUNCTION //
-function declaration 
syntax:
function greet(){
    console.log('hello there');
}
-function expression
syntax:
const speak = function(){
    console.log('good day!');
};

greet(); => this is k/a calling or invoking a function.
speak();

IMPORTANT NOTE: hoisting works with function declaration but not with function expression.
            
                 // ARGUMENTS && PARAMETERS //
eg.
const speak = function(name){
    console.log(`good day &{name}`);
};
speak();
OUTPUT: good day undefined

eg.
const speak = function(name){
    console.log(`good day &{name}`);
};
speak('mario'); (NOTE: when we pass value to a function like this k/a arguement.)
NOTE: when we create diff. values inside functions is k/a parameters.
OUTPUT: good day mario

eg.
const speak = function(name, time){
    console.log(`good ${time} ${name}`);
};
speak('mario', 'morning');
OUTPUT: good morning mario
NOTE: agruments and parameters are rspective of each other's value.

-default values as parameters.
eg.
const speak = function(name='radha', time='night'){
    console.log(`good ${time} ${name}`);
};
speak();
OUTPUT: good night radha
NOTE: if we overright the values then can be replaced.

                          // RETURNING VALUES//
eg.
-REGULAR FUNCTIONS:
const calcArea = function(radius){
    let area = 3.24*radius**2;
    return area;
}
const area = calcArea(5); (call the function & return the area.)
console.log(area); 

-ARROW FUNCTIONS:
const calcArea =(radius, something)=>{            (NOTE:or const calcArea = radius=> 3.24*radius**2;)
    return 3.24*radius**2;
};

const area =  calcArea(5);
console.log('area is:' area);
NOTE: if there is only one parameter we cann remove paranthesis.
 
const name = 'aks';
-function:
const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);

-method:
NOTE: used dot notation , used back of something
let resultTwo = name.toUpperCase();
console.log(resultTwo);
                      //CALLBACK FUNCTION //
CALLBACK FUNCTION: when we pass a function in another function as an argument
eg.
const myFunc = (callbackFunc) =>{
    //do something
    let value = 50;
    callbackFunc(value);
};
myFunc(function(value){
    //do something
    console.log(value);
});

another eg.
let people = ['aks','rks','rkv','rb'];


people.forEach(function(person, index){
    console.log(index, person);
    });
    //can also be written in an arrow function.
people.forEach(person => {
    console.log(index, person);
});
anotherway:
let people = ['aks','rks','rkv','rb'];
const logPerson =(person, index)=>{
    console.log(`${index} -hello ${person}`);
};
people.foreach(logPerson);
*/
//-----------------------------------------------------------------------//
/*                           //OBJECT//
  IMPORTANT NOTE: we can use this keyword only in normal functions.
  as arrow functions refers this keyword as global window.
*/