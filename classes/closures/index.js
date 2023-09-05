//                   NOTES
/*function x(){
var a =7;
function y(){
    console.log(a);
}
y();
}
x();
*/
//OUTPUT- 7
//CLOSURE- functionalong with its lexical environment together.

/*function x(){
    var  a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
//OUTPUT- function y(){
//        console.log(a);
//   }
z();
*/
//OUTPUT- 7

//IMPORTANT NOTE- functions ,when they are returned from another function they still maintain their lexical scope.
// return y- means function with its lexical environment is returned.

/*function x(){
    var  a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z);
z();
*/
// valaue of 'a' = 100
// reference to 'a' will be encountered.

function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a, b);
        }
        y();
    }
    x();
}
z();
//NOTE- Y() makes closure with a as well as b .
// USES OF CLOSURES
//- Module Design Patern
//- Currying(watch another video of akshay saini)
//-Functions like once
//- memorize
//-maintaining state in async world
//-setTimeouts
//-Iterators
//-and many more

//           construction function
  