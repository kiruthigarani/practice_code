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


//this keyword value inside an object method
// difference b/w method and function is that method is written inside an object
const obj = {
    name : "kiruthiga",
    showName: function() {
        console.log("this value inside object method",this); // 'this' refers to the object 'obj'
        console.log("Name from object method:", this.name); // Accessing property using 'this'
    },
    
}

obj.showName(); // 'this' refers to the object 'obj'

// this keyword inside an arrow function
const arrowObj = {
    name : "arrowFunction",
    showName: () => {
        console.log("this value inside arrow function",this); // 'this' refers to the surrounding lexical context (global object in this case)
    },
}

arrowObj.showName(); // 'this' refers to the global/ window object

const arrowFunctionInsideMethodObj = {
    name : "kiruthiga",
    age: 25,
    showNameofarrow: function() {
        const arrowFunction = () => {
            console.log("this value inside arrow function",this); // 'this' refers to the surrounding lexical context, which is the object 'arrowFunctionInsideMethodObj'
        }
        arrowFunction();
    },
    
}
arrowFunctionInsideMethodObj.showNameofarrow(); // 'this' refers to the object 'arrowFunctionInsideMethodObj'