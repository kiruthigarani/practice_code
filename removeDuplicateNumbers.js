const list = [1,2,3,4,1,2,3,1,2,3,4,5];

const newList = list.filter((element,index)=>{
  return list.indexOf(element) === index
});

console.log(newList);

//alternative solution
const uniqueList = [...new Set(list)];
console.log("uniqueList:", uniqueList);