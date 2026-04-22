const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
let merging_assign = Object.assign(obj1,obj2);
console.log(merging_assign,obj1); //{a: 1, b: 3, c: 4}  {a: 1, b: 3, c: 4}


let merging_spread = {...obj1,...obj2};
console.log(merging_spread,obj1); // {a: 1, b: 3, c: 4} {a: 1, b: 2}

//string literal
const laptopModel = 'HP';
const deskNo = '4';
const name = 'kiruthiga';
const problem = 'Facing VPN issue';

const message = `Hello, I am ${name}. I am using ${laptopModel} laptop,
and my desk number is ${deskNo}. I am facing the following problem: ${problem}.`;
console.log(message);

//7.De-structuring assignment: 
//a taking third array value
let userDetails = ['Arun', 'Dinesh', 'Selva', 'Ranjith', 'Sunil'];
let [first,second,third] = userDetails;
console.log(third); // 'Selva'

//deep destructuring
const user = {
    username: 'Kiruthiga',
    address: {
        city: 'Madurai',
        state: 'Tamil Nadu',
        pin: 625019
    }
}
const {username,address:{city, state,pin}} = user;
console.log(username); // 'Kiruthiga'
console.log(city); // 'Madurai'
console.log(state); // 'Tamil Nadu'
console.log(pin); // 625019

//combining two array into one

const a = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const b = [{ id: 1, city: 'Pune' }, { id: 2, city: 'Delhi' }];
const combined = a.concat(b);
console.log("combined:",combined); 


const result = a.map((obj)=>{
   console.log("obj:",obj.id);
    const matchingObj = b.find((item) => item.id === obj.id);
    console.log("matchingObj:",matchingObj);
    return {...obj,...matchingObj};
})

console.log(result);


const arr = [1, 2, 3, 4, 5,1,3,5,6,2,3,4,5,6];
const out = arr.filter((item,index)=>{
    console.log("Item:",item,"index of item:",arr.indexOf(item),"index:",index);
    return arr.indexOf(item) === index;
});
console.log(out);

//Mutliple Array 

const multiArray = [[1, 2], [3, 4], [5,[6,7]],8,9,10];

// const flatarr = multiArray.flat(2);
// console.log(flatarr); // [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arr) {
    let output = [];
    arr.forEach(element => {
         if(Array.isArray(element)) {
        output = output.concat(flattenArray(element));
    }else{
        output.push(element);
    }
    
    });
    return output;
}
console.log(flattenArray(multiArray));
    

const a1 = [1,2,3,0,4,5,6,3,0];
const b1 = [3,4,3,8,9,0];
const res = a1.filter((item) => b1.includes(item));
//const final_res = [...new Set(res)];
const final_res = res.filter((item,index) => res.indexOf(item) === index);
console.log("final_res:",final_res);
// console.log("common:",res); 

//softcopy
let originalarray = [1, 2, 3, 4, 5];
let copiedarray = originalarray;
copiedarray.push(6);
console.log("originalarray:",originalarray);
console.log("copiedarray:",copiedarray);

//harcopy

let hardcopyarray = [...originalarray];
hardcopyarray.push(7);
console.log("originalarray:",originalarray);
console.log("hardcopyarray:",hardcopyarray);

let cities = ['Pune', 'Delhi', 'Bangalore'];
let isavailable = cities.includes('Delhi');
console.log(isavailable); // true


let cities2 = ['Pune', 'Delhi', 'Bangalore'];
let newarr = [];

for(let i=0;i<cities2.length;i++){
// newarr.push(cities2[i]); // ['Pune', 'Delhi', 'Bangalore']
//newarr.unshift(cities2[i]); // ['Bangalore', 'Delhi', 'Pune']
newarr.shift(cities2[i]); //empty array []  

}
console.log(newarr); // ['Pune', 'Delhi', 'Bangalore']


//interview Questions - Q1
const original = { 
    name: "Alice", 
    details: 
        { 
            city: "New York"         
        }
 };
const copied = { ...original };
 console.log("original:",original.details.city);
copied.name = "Bob";       
copied.details.city = "LA";
console.log("copied CITY NAME:",original.details.city);


//interview Questions - Q2
	console.log("start");
    
	settimeout(()=> console.log(10), 0);
	settimeout(()=> console.log(100), 100);
	process.nextTick(console.log("next"));
	promise.resolve(()=> console.log("resolved"));
	promise.resolve(()=> console.log("next resolved"));
	console.log("completed")


/*start
* completed
* next
resolved
next resolved
10
100
*
*/

//interview Questions- Q3

function samplefunc(){
var a,b;
console.log(a,b); //undefined
var a = 10, b =20;
}
 
var obj = {
   name: "Name",
   age: 20,
    randomNumber: function () {
	console.log(x); //undefined
	console.log(y); // reference error
	var x = 5;
	let y = 10;
	}

}