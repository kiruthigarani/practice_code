const a1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const b = [{ id: 1, city: 'Pune' }, { id: 2, city: 'Delhi' }];
// Output
//  [{id:1, name:'Alice', city:'Pune'}, {id:2, name:'Bob', city:'Delhi'}]

let merge_output = a1.map((item)=>{
    let obj = b.find((o)=> o.id === item.id);
    return {...item, ...obj};
});

console.log("Merge two array based on id:",merge_output);