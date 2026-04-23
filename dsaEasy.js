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
console.log("max:", max);