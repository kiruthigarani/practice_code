"use strict";
// globalObject - output will vary based on environment
// In a browser, 'this' refers to the Window object
// In Node.js, 'this' refers to an empty object {}

console.log("this value at global scope",this); 

// According to "this" substitution rules, if the value of this keyword is undefined or null, it will default to the global object in non-strict mode. 
// this substitution does not occur in strict mode.
// In strict mode, it will remain undefined or null. 
function exampleFunction() {
    console.log("this value at function scope",this);
};


// this Keyword value depends on how the function is called
exampleFunction(); // In javascript, 'this' is undefined in strict mode when the function is called directly

window.exampleFunction(); // In browser, 'this' refers to Window object