const vals = [1, 2, 3, 4, 5];
let sum =0;

for(let i=0;i<=vals.length-1;i++){
      sum = sum + vals[i];
}
console.log("sum using for loop:",sum);

let reduecedsum = vals.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("sum using reduce function:",reduecedsum);

const person = [{
    fname: "Alice",
    lname: "Smith",
    age: 30,
    city: "New York"
}, {
    fname: "Bob",
    lname: "Johnson",
    age: 25,
    city: "Los Angeles"
}, {
    fname: "Charlie",
    lname: "Williams",
    age: 35,
    city: "New York"
},
{    fname: "David",
    lname: "Brown",
    age: 28,
    city: "Chicago"
},
{    fname: "Eve",
    lname: "Davis",
    age: 22,
    city: "Los Angeles"
}
];
//group by city
const groupByCity = person.reduce((acc, curr) => {
  
    console.log('Accumulator:', acc[curr.city]);
    if (acc[curr.city]) {
        acc[curr.city] = ++acc[curr.city];
    } else {
        acc[curr.city] = 1;
    }
   
   return acc;
}, {});

console.log(groupByCity);

const getName = person.filter( (p) =>{
    if(p.age >= 30){
        return p.fname;
    }
});
console.log("Names of persons with age >= 30:",getName);
const names = person.map( (p) => p.lname );
console.log("Names of all persons:",names);

//get fname whose age is greater than or equal to 30 
const namesWithAge30 = person.filter( (p) =>p.age >=30).map((p) => p.fname);
console.log("First names of persons with age >= 30 using filter and map:",namesWithAge30);