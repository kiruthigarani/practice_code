const a1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const b = [{ id: 1, city: 'Pune' }, { id: 2, city: 'Delhi' }];
// Output
//  [{id:1, name:'Alice', city:'Pune'}, {id:2, name:'Bob', city:'Delhi'}]

let merge_output = a1.map((item)=>{
    let obj = b.find((o)=> o.id === item.id);
    return {...item, ...obj};
});

console.log("Merge two array based on id:",merge_output);

const freelancers = [
  { name: 'Harry', skill: 'JavaScript' },
  { name: 'David', skill: 'JavaScript' },
  { name: 'Sarah', skill: 'Python' }
];

const groupedBySkill = freelancers.reduce((acc, curr) => {
  if (!acc[curr.skill]) {
    acc[curr.skill] = [];
  }
  acc[curr.skill].push(curr);
  return acc;
}, {});

console.log(groupedBySkill);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(fruitCounts);