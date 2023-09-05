                        //NOTES//
/* function a(){
    console.log(b);
}
var b =10;
a();
*/
//OUTPUT-10


/*function a(){
    c();
    function c(){
        console.log(b);
    }
    
}
var b =10;
a();
*/
//OUTPUT-10

/*function a(){
    var b =10;
    c();
    function c(){
        
    }
    
}
a();
console.log(b);
*/
//OUTPUT- b is not defined

//SCOPE- where the variable can be targeted/ access it.
// lexical environment is the local memory along the lexical environment of the parents.
//lexical- in a sequence/ in hararaki.
//Scope Chain- this chain of all the lexical environment and parent references. 
