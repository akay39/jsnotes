/*everything in js happens inside an execution contest.*/
/* memory component is k/a variable environment*/
/* 1st phase - memory creation phase
allocate memory for variables and function (predefined value is undefined)*/
/* 2nd phase- code creation phase*/

/*                             code
var n =2;
function square (num){
    var ans = num*num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);
*/

/* CALL STACK maintains the order of execution of execution contest
different names for
 call stack-
 
-execution context stck
-program stack
-control stack
-runtime stack
-machine stack
*/