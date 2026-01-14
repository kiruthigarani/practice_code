
const a = [1,2,3,4,5,6,3];
const b = [3,4,3,8,9,0];

const commonvalues =[... new Set(a.filter((element)=>{
    console.log("Element includes:",b.includes(element));
 return b.includes(element);
}))];

console.log(commonvalues);

