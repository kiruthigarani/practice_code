const arr = [1,1,5,9,10,6];
const target = 7;


function sumIndex (arr,target){
const numMap = new Map();
console.log("numMap:", numMap);
for(let i=0;i < arr.length;i++){
    const findNum = target - arr[i];
    console.log("findNum:", numMap.has(findNum));
    if(numMap.has(findNum)){
        return [numMap.get(findNum),i];
    }
    numMap.set(arr[i],i);
}
}

// for(let i=0;i < arr.length;i++){
//     for(j=0; j < arr.length;j++){
//         console.log("numbers:"+ arr[i],arr[j] +"---" +arr[i] +arr[j] +"=="+ target);
//         if(arr[i] +arr[j] === target){
//             return [i,j];
//         }
//     }
// }

console.log("Result:",sumIndex(arr,target));