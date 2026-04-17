const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
let merging_assign = Object.assign(obj1,obj2);
console.log(merging_assign,obj1); //{a: 1, b: 3, c: 4}  {a: 1, b: 3, c: 4}


let merging_spread = {...obj1,...obj2};
console.log(merging_spread,obj1); // {a: 1, b: 3, c: 4} {a: 1, b: 2}


