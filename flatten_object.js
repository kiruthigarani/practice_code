const sample_data = [
  { id: 1, number: [{ id: 2 }, { id: 3 }] },
  { id: 4, number: [{ id: 5 }, { id: 6 }] }
];
// Output [
//   { id: 1 },{ id: 2 },{ id: 3 },{ id: 4 },{ id: 5 },{ id: 6 }
// ]

let output = sample_data.reduce((acc,item)=>{
    acc.push({'id': item.id});

    item.number.forEach((num)=>{
        acc.push({'id': num.id});
    });
    return acc;
}, []);

console.log("Flatten:",output);