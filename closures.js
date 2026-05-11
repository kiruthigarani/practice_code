let i = 10;

function outerFunction() {
    let i = 20; 
    console.log("Value of i:", i); // here the value of 'i' will be 20
}
outerFunction(); 
 console.log("Now Value of i:", i); // here the value of 'i' will be 10


const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

function makeSizer(size) {
  return () => {
    document.body.style.fontSize = `${size}px`;
  };
}

console.log("size12:", document.getElementById("size-12"));
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

//Closure - Time Optimization example
function heavyCalculation() {
    console.log("Performing heavy calculation...");
    let result = [];
    for (let i = 0; i < 1000000; i++) {
        result[i] = i * i;
    }
    return function(index){
         console.log("Result:", result[index]);
    }   
}
console.time();
// heavyCalculation(6);
const closure_var = heavyCalculation();
closure_var(6)
console.timeEnd();


/***************Interview question************************/
for (var j = 1; j <= 5; j++) {
           setTimeout(()=>{
            console.log("Counter:", j); // output is 6 five times
        },1000);
}

//convert above code to print 1to 5 
//one-way is using let keyword
for (let k = 1; k <= 5; k++) {
    setTimeout(()=>{
        console.log("Counter:", k);
    },1000);
}

//second way is using IIFE - IIFE means 
for (var m = 1; m <= 5; m++) {
    (function(n){
        setTimeout(()=>{
            console.log("Counter with IIFE:", n);
        },1000);
    })(m);
}

//third way is closure
for (var p=0; p <5;p++){
     function inner(p){
        setTimeout(()=>{
             console.log("Counter with Closure:", p);
        },1000);
    }
      inner(p);
}

/****************END- Interview question***********************/

function createCounter() {
    let count = 0; // 🔒 private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter1 = createCounter();

counter1.increment(); // 1
counter1.increment(); // 2
counter1.getCount();  // 2
counter1.decrement(); // 1

console.dir("know better about closure",counter1);



const originalValue = {
  name : "kiruthiga",
  age : 25

}
const copyValue = originalValue;
copyValue.name = "Arun";
console.log("originalValue:",originalValue); //Arun
console.log("copyValue:",copyValue); //Arun

const newCopyValue = {...originalValue};
newCopyValue.name = "Karthik";
console.log("originalValue:",originalValue);
console.log("newCopyValue:",newCopyValue);


const arr1 = [1,2,3,4,5];
const arr2 = arr1;
arr2.push(6);
console.log("arr1:",arr1); // [1, 2, 3, 4, 5, 6]  


const originalObject = {
   a: 1, 
   b: 2,
   addValue: function() {
    return this.a + this.b; 
   }
};
const copiedObject = originalObject;
copiedObject.a = 10;
console.log("originalObject:",originalObject);
console.log("copiedObject:",copiedObject);
/*
*originalObject: {a: 10, b: 2, addValue: ƒ}
copiedObject: {a: 10, b: 2, addValue: ƒ}
*
*/

