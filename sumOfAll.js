let arr= [1, 2, 3, 4, 10, 11];

let sum = arr.reduce((acc,res)=>{
    return acc+res;
},0);

console.log(sum);

