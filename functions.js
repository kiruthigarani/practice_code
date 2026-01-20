//Function expresssion
const add = function(a, b) {
   console.log(a + b);
};
add(2, 3); // Output: 5

//function statement
function multiply(a, b) {
    console.log( a * b);
}
multiply(2, 3); // Output: 6

/*
* Differenct between function expression and function statement
* 1. Function expression is not hoisted, means it cannot be called before its declaration.
* 2. Function statement is hoisted, means it can be called before its declaration.
*/

//immendiately invoked function expression(IIFE)
(function() {
    console.log("IIFE executed");
})(); // Output: IIFE executed

//first-class functions are functions that can be treated like any other variable, means it can be assigned to a variable, passed as an argument to another function, or returned from a function.

//Arrow function
const subtract = (a,b) =>{
    console.log(a - b);
}
subtract(5, 3); // Output: 2