
const a = [1,2,3,4,5,6,3];
const b = [3,4,3,8,9,0];

const commonvalues = [new Set(a.filter((element)=>{
    console.log("Element includes:",b.includes(element));
    const isCommon = b.includes(element);
 return isCommon;
}))];

const c1= a.filter(element =>{
    return b.includes(element );
    //console.log("diff:",res)
});
console.log("common:",c1);

let res = c1.filter((element,index) =>{
    return c1.indexOf(element) === index;
});

console.log("final common:",res);

console.log(commonvalues);

