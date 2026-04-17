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

