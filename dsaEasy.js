//Find largest number from the array
// let arr =  [3, 3, 6, 1];
// let arr =  [3, 3, 0, 99, -40];
let arr = [-4, -3, 0, 1, -8];
let length = arr.length;
let max = arr[0];

for (let i=1; i <= length; i++)
{
    if(arr[i] > max)
    {
         max = arr[i];
    }
}
// console.log("max:", max);

// Check the array is sorted or not
 let array = [1,2,3,4,5];
//let array = [5,4,6,7,8];
//5,4,6,7,8
let ans=true;
for(let i=0; i < array.length; i++){
  for(let j=i+1; j< array.length;j++){
        if(array[i] > array[j]){
           ans = false;
           break;
        }
}
if(!ans) break;
}
console.log("Answer value:", ans);
if (ans){
    console.log(" sorted");
}else{
    console.log("not sorted")
}

