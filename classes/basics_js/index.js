/*class users
{
    constructor(name, email){
        this.name = name;
        this.email =email;
    }
}
 
let akshay = new users('akshay', 'aks@gmail.com');
akshay.phone = 123
akshay.age = 28

let rkv = new users('rishabh', 'rkv@gmail.com') */
// class is a blueprint such like a human being.
// akshay and rishabh are an object.
// god can create objects similar like us.
//first the constructor is called in a class.
// like a newly borned baby when it is in womb .
//initialy object is in a blank space.  
//contructor is used  to building the object.
// constructor can be parameterised aswell as non-parameterised.
//multipile constructors can be used in a single -
//-class also k/a overloaded constructors.
// an object may pickup aditional behaviours(functions) and properties - 
//- through out the code that were not part of the class definition.
//we can assign the properties in just parameters/(arguments).


// constructor onyl allows propeties initialization not the methods/function/behaviour
//constructor is function that's sole purpose is to initialize the properties of an object
//object can also be referred to as an instance of a class  

       /* PERSONAL NOTES( Object Oriented JS) */
// 1.reate an object using var keyword.
// 2.all the code is inside the capsule i.e. curly braces. 
// 3.keyword-this : refers to the object when inside an object
// 4.keyword-this: refers to the window when in global.
// 5. we can write functions inside objects.
// 6. use dot notation.
// 7. can  create && update the properties of object by dot notation.
// 8. can also use [''] for updating values of prperties.
//   [''] - can be used for the dynamic values. 
// one variable can target/update all the properties.

// 9. classes does the same as prototype model.


// syntax of class - class User { }
//10. constructor are build in class

/*var userOne ={
    email: 'aks@gmail.com',
    name: 'akshay',
    age: '28',
    login(){
        console.log(this.name , 'has logged in.')
    },
    logout(){
        console.log(this.name , 'has logged out.')
    }



}; */

// userOne.age = 89234554;

class User{
    constructor(/*arguements*/ email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email , 'just logged out.')
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email , 'score is now' , this.score);
        return this; 
    }
}

class Admin extends User{
    deleteUser(user){
users = users.filter()
    }
}

var users = [userOne, userTwo];
var userOne = new User('aks@gmail.com', 'akki');
var userTwo = new User('rkv@gmail.com' , 'rkv');
var userFour = new User() ;
userOne.login().updateScore().updateScore().logout();
//why do we chain functions?
//userOne.login();
//userTwo.logout();


// keyword - new
// create empty object
//passing the value into the constructor od user using this.
// in classes inside an object we dont use coma after each method.
// type return this will help you chain up the other method together.

//              CLASS INHERITANCE

class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}
var userOne = new User('aks@gmail.com', 'aks');
var userTwo = new User('rkv@gmail.com', 'rkv');
console.log(userOne);
console.log(userTwof);

