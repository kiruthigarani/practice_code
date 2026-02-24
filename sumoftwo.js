const arr = [1,1,5,9,10,6];
const target = 7;


function sumIndex (arr,target){
//     const map = {};
// for(let i = 0; i < arr.length; i++){
//     let search = target - arr[i];
//     if(map[search] !== undefined){
//         return [arr[map[search]],arr[i]];
//           return [map[search],i];
//     }
//     map[arr[i]] = i;
// }
for(let i=0;i < arr.length;i++){
    for(j=0; j < arr.length;j++){
        console.log("numbers:"+ arr[i],arr[j] +"---" +arr[i] +arr[j] +"=="+ target);
        if(arr[i] +arr[j] === target){
            return [i,j];
        }
    }
}
}

console.log(sumIndex(arr,target));